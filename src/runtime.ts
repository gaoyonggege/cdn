/**
*  运行时
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as path from 'path';

import { ProjectConfig } from './model/projectConfig';
import config from './config/config';

// 项目配置
let projectConfig: ProjectConfig = null;

/**
 * 得到项目配置
 */
export function getCDNConfig () {
    return projectConfig;
}

/**
 * 加载项目配置
 */
export function loadCDNConfig () {
    try {
        let cwd: string = process.cwd();

        let cdnConfigFilePath: string = path.resolve(cwd, `${config.projectConfigFileName}`);

        projectConfig = require(cdnConfigFilePath);

        return projectConfig;
    } catch ( e ) {
        throw new Error(e);
    }
}

/**
 * 得到资产所在目录的绝对路径
 */
export function getAssetsAbsPath () {
    return path.join( process.cwd(), projectConfig.staticDir );
}
