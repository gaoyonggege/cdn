/**
*  cdn
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/
import { ProjectConfig } from '../model/projectConfig';
import { getCDNConfig, getAssetsAbsPath } from '../runtime';
import { getFilesByDirPath } from '../util/file';

export class CDN {
    private prepared: boolean = false;
    private files: string[] = [];

    constructor () {
        let cdnConfig: ProjectConfig = getCDNConfig();
        
        
    }

    async prepare () {
        const assetsAbsPath = getAssetsAbsPath();
        this.files = await getFilesByDirPath(assetsAbsPath);
    }

    async push () {
        if ( !this.prepared ) {
            throw new Error(`no prepared`);
        }
        if ( !this.files || !this.files.length ) {
            throw new Error(`file length error`);
        }



    }

    public static async run () {
        //
        const cdn = new CDN();
        await cdn.prepare();
        
        await cdn.push();
    }
}