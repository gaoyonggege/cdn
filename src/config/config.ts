/**
*  配置文件[唯一]
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/
import * as TYPES from '../type';

export default {
    
    
    [ TYPES.QINIU ]: {
        accessKey: 'luQSxXwqLmO_aPLAtKevU1pKUAD8dKJuHnVr_2ip',
        secretKey: 'a91KhDZUCfkCTQbcBSM97nhbVbwLPGD-CJbC6aJR',
        bucket: 'wyfe',
        // 上传到bucket根目录下的哪个目录层级中
        root: 'project/',
        // cdn domain + 部分路径前缀
        cdnDomain: 'https://fecdn.weiyankeji.cn/'
    },
    
    //
    default: {
        projectVersion: 'v1',
    },

    //
    cdnConfigFileName: 'cdnConfig.json',

}
