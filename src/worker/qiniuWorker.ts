/**
*  七牛worker
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as qiniu from 'qiniu';

import { Worker } from '../model/worker';
import { CDNFile } from '../model/lang';
import { makeCDNFile } from '../util/file';
import { infoLog, errorLog } from '../util/console';

export class QiniuWorder implements Worker {
    private mac: any = null;
    private uploadToken: any = null;
    private formUploader: any = null;
    private putExtra: any = null;
    
    /**
     * 初始化
     * @param config 
     */
    async init ( config: any ) : Promise<void> {
        this.mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey);
        const options = {
            scope: config.bucket,
            expires: 60*30
        };
        let putPolicy = new qiniu.rs.PutPolicy(options);
        this.uploadToken = putPolicy.uploadToken(this.mac);

        let qiniuConfig: any = new qiniu.conf.Config();
        // 空间对应的机房
        qiniuConfig.zone = qiniu.zone.Zone_z0;

        this.formUploader = new qiniu.form_up.FormUploader(qiniuConfig);
        this.putExtra = new qiniu.form_up.PutExtra();
    }

    /**
     * 推送七牛CDN
     * @param {*} cndPushConfig
     */
    async pushCDN ( files: string[] ) : Promise<boolean> {
        if ( !files || !files.length || files.length <= 0 ) {
            return false;
        }

        for ( let file of files ) {
            let cdnFile = makeCDNFile( file );

            await this.pushFile( cdnFile );
        }
        
        return true;
    }

    /**
     * 单文件 cdn 推送动作
     * @param cdnFile 
     */
    pushFile ( cdnFile: CDNFile ) : Promise<boolean> {
        const _this = this;
        
        return new Promise( ( resolve, reject ) => {
            _this.formUploader.putFile( _this.uploadToken, cdnFile.cdnPath,
                cdnFile.filePath, _this.putExtra,
                (respErr: any,respBody: any, respInfo: any) => {
                    if ( respErr ) {
                        throw respErr;
                    }
                    
                    if (respInfo.statusCode == 200) {
                        infoLog(`${cdnFile.filePath} upload success, uri : ${cdnFile.uri}`);
                        resolve( true );
                    } else {
                        errorLog(`${cdnFile.filePath} upload err : ${respInfo.statusCode} : ${respBody}`);
                        reject( false );
                    }
            } );
        } );
    }
}

