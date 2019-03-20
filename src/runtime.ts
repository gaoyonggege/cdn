/**
*  运行时
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as path from 'path';

import { ProjectConfig } from './model/projectConfig';
import config from './config/config';

let cdnConfig: ProjectConfig = null;

export function getCDNConfig () {
    return cdnConfig;
}

export function loadCDNConfig () {
    try {
        let cwd: string = process.cwd();

        let cdnConfigFilePath: string = path.resolve(cwd, `${config.cdnConfigFileName}`);

        cdnConfig = require(cdnConfigFilePath);

        return cdnConfig;
    } catch ( e ) {
        throw new Error(e);
    }
}

