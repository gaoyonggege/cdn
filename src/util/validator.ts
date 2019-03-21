/**
*  启动
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import { ProjectConfig } from '../model/projectConfig';
import { runInNewContext } from 'vm';
import { clouds } from '../type';

export function validateConfig ( projectCofig: ProjectConfig ) {
    if ( !projectCofig ) {
        throw new Error('projectCofig empty');
    }

    if ( !clouds.includes(projectCofig.type) ) {
        throw new Error(`cdnConfig.json file type error`);
    }

    if ( !projectCofig.root || /[^a-zA-Z0-9]/.test(projectCofig.root) ) {
        throw new Error(`cdnConfig.json file root error`);
    }

    if ( !projectCofig.name ) {
        throw new Error(`cdnConfig.json file name error`);
    }

    if ( !projectCofig.version ) {
        throw new Error(`cdnConfig.json file version error`);
    }

    if ( !projectCofig.staticDir || projectCofig.staticDir.startsWith('..') ) {
        throw new Error(`cdnConfig.json file staticDir error`);            
    }

    return true;
}