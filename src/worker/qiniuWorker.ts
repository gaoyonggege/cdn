/**
*  七牛worker
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import { Worker } from '../model/worker';

export class QiniuWorder implements Worker {

    /**
     * 推送七牛CDN
     * @param {*} cndPushConfig 
     */
    async pushCDN ( files: string[] ) : Promise<boolean> {
        if ( !files || !files.length || files.length <= 0 ) {
            return false;
        }

        for ( let filePath of files ) {
            let file = util.calculateFileCDNPath( filePath,cdnPushConfig );

            await this.pushFile( file,filePath );
        }

        
        return true;
    }

    pushFile ( key: string, localFile: string ) : Promise<boolean> {
        return new Promise( ( resolve, reject ) => {
            
        } );
    }


}
