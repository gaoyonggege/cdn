/**
* aliyun worder
*   @author: gaoyonggege@github.com
*   @date: 2019.03.21
*/
import * as ALIOSS from 'ali-oss';
import { Worker } from '../model/worker';
import { CDNFile } from '../model/lang';
import { makeCDNFile } from '../util/file';
import { infoLog, errorLog } from '../util/console';

export class AliyunWorker implements Worker {
    private client: ALIOSS = null;

    constructor () {}

    /**
     * 初始化
     * @param config 
     */
    async init ( config: any ) : Promise<void> {
        this.client = new ALIOSS({
            region: config.region,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            bucket: config.bucket,
        });
    }

    /**
     * 推送阿里云CDN
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
    async pushFile ( cdnFile: CDNFile ) : Promise<boolean> {
        try {
            let result = await this.client.put(cdnFile.cdnPath, cdnFile.filePath);
            console.log(result);
            infoLog(`${cdnFile.filePath} upload success, uri : ${cdnFile.uri}`);
            return true;
        } catch (e) {
            errorLog(`${cdnFile.filePath} upload err : ${e.msg}`);
            return false;
        }
    }
}
