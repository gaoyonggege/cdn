/**
*  运行时
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as path from 'path';

import { ProjectConfig } from './model/projectConfig';
import config from './config/config';

// 项目配置
export let projectConfig: ProjectConfig = null;


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
    const cwd: string = process.cwd();
    return path.join( cwd, projectConfig.staticDir );
}
