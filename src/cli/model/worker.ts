/**
*  worker interface
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import { ProjectConfig } from '../model/projectConfig';
import { CDNFile } from './lang';

export interface Worker {
    init ( config: ProjectConfig ) : Promise<void>;
    pushCDN ( files: string[] ) : Promise<boolean>;
    pushFile ( cdnFile: CDNFile ) : Promise<boolean>;
}

