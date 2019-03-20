/**
*  启动
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import { ProjectConfig } from '../model/projectConfig';
import { runInNewContext } from 'vm';


export function validateConfig ( projectCofig: ProjectConfig ) {
    if ( !projectCofig ) {
        throw new Error('projectCofig empty');
    }



    return true;
}