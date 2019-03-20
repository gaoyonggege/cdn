/**
*  七牛配置
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20 10:14
*/

export class QiniuConfig {
    
    constructor ( 
        public accessKey: string, 
        public secretKey: string,
        public bucket: string,
        public root: string,
        public projectName: string,
        public projectVersion: string ) {
                        
    }
}








