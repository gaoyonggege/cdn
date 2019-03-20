/**
*  cdn
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/
import { Worker } from '../model/worker';
import { ProjectConfig } from '../model/projectConfig';
import { getCDNConfig, getAssetsAbsPath } from '../runtime';
import { getFilesByDirPath } from '../util/file';
import { createWorker } from '../worker/workerFactory';

export class CDN {
    private prepared: boolean = false;
    private files: string[] = [];

    private worker: Worker = null;

    constructor () {}

    /**
     * 准备
     */
    async prepare () {
        let cdnConfig: ProjectConfig = getCDNConfig();
        this.worker = createWorker(<any>cdnConfig);
        await this.worker.init(cdnConfig);

        const assetsAbsPath = getAssetsAbsPath();
        this.files = await getFilesByDirPath(assetsAbsPath);
    }

    /**
     * 推送
     */
    async push () {
        if ( !this.prepared ) {
            throw new Error(`no prepared`);
        }
        if ( !this.files || !this.files.length ) {
            throw new Error(`file length error`);
        }
                                                            
        this.worker.pushCDN(this.files);
    }

    /**
     * system run
     */
    public static async run () {
        //
        const cdn = new CDN();
        await cdn.prepare();
        
        await cdn.push();
    }
}
