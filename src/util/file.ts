/**
* 文件相关
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import * as path from 'path';
import chalk from 'chalk';
import * as glob from 'glob';

import config from '../config/config';
import { CDNFile } from '../model/lang';
import { projectConfig, getAssetsAbsPath } from '../runtime';
import { errorLog } from '../util/console';

/**
 * 得到目录下的全部文件
 * @param {*} dirPath: 目录路径
 */
export function getFilesByDirPath ( dirPath: string ) : Promise<string[]> {
    return new Promise( ( resolve,reject ) => {
        if ( !dirPath.endsWith('/') ) {
            dirPath += '/';
        }

        let pattern = dirPath + '**/*';

        glob( pattern,{dot: false,nodir: true},(err: any, files: string[]) => {
            if ( err ) {
                errorLog(`util.js err : ${err}`);
                return resolve([]);
            }

            return resolve( files );
        } );
    } );
}

/**
 * 根据文件路径得到文件名
 * @param {*} filePath : 文件路径
 * @return : 文件名
 */
export function getFileNameByFilePath ( filePath: string ) {
    if ( !filePath ) {
        return null;
    }
        
    let tmp = filePath.split('/');
    let fileName = tmp[ tmp.length-1 ];

    return fileName;
}

/**
 * 新建一个 cdn file obj
 * @param file: 文件的本地绝对路径
 */
export function makeCDNFile ( file: string ) : CDNFile {
    if ( !file ) {
        return null;
    }

    const cdnFile: CDNFile = {
        filePath: file,       
        cdnPath: '',
        uri: '',
    };

    const assetsAbsPath: string = getAssetsAbsPath();
    const fileRelativePath: string = file.replace(assetsAbsPath,'');

    const cloud = (<any>config)[projectConfig.type];
    cdnFile.cdnPath = path.join(projectConfig.root, projectConfig.name, projectConfig.version, fileRelativePath);
    cdnFile.uri = path.join( cloud.cdnDomain, cdnFile.cdnPath );

    return cdnFile;
}

