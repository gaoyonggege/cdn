/**
*  七牛worker
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as qiniu from 'qiniu';

import { Worker } from '../model/worker';


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

        for ( let filePath of files ) {
            //let file = util.calculateFileCDNPath( filePath,cdnPushConfig );

            //await this.pushFile( file,filePath );
        }
        
        return true;
    }

    pushFile ( key: string, localFile: string ) : Promise<boolean> {
        return new Promise( ( resolve, reject ) => {

        } );
    }
}
