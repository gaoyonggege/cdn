/**
*  worker interface
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/

export interface Worker {
    init ( config: any ) : Promise<void>;
    pushCDN ( files: string[] ) : Promise<boolean>;
}

