/**
*  配置文件[唯一]
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/
import * as TYPES from '../type';

export default {
    
    
    [ TYPES.QINIU ]: {
        accessKey: '',
        secretKey: '',
        bucket: '',
        // 上传到bucket根目录下的哪个目录层级中
        root: '',
        // cdn domain + 部分路径前缀
        cdnDomain: ''
    },
    
    //
    default: {
        projectVersion: 'v1',
    },

    //项目配置文件名
    projectConfigFileName: 'cdnConfig.json',

    
}
