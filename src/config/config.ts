/**
*  配置文件[唯一]
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/
import * as TYPES from '../type';

export default {
    [ TYPES.ALIYUN ]: {
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI8m5aQevDxeOC',
        accessKeySecret: 'rQ7poFXbhAWUDaxQ2MUvqJXE5wgoHi',
        bucket: 'wy-fe',
        // cdn domain + 部分路径前缀
        cdnDomain: 'https://fe-alicdn.weiyankeji.cn/'
    },
    
    [ TYPES.QINIU ]: {
        accessKey: 'luQSxXwqLmO_aPLAtKevU1pKUAD8dKJuHnVr_2ip',
        secretKey: 'a91KhDZUCfkCTQbcBSM97nhbVbwLPGD-CJbC6aJR',
        bucket: 'wyfe',
        // cdn domain + 部分路径前缀
        cdnDomain: 'https://fecdn.weiyankeji.cn/'
    },
    
    //
    default: {
        projectVersion: 'v1',
    },

    //项目配置文件名
    projectConfigFileName: 'cdnConfig.json',

    
}
