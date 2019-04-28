/**
*  启动
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import { loadCDNConfig } from './runtime';
import { validateConfig } from './util/validator';
import { CDN } from './worker/cdn';

export default async function startup () {
    // 1. 读取工程配置文件
    const cdnConfig = loadCDNConfig();
    // 2. 校验工程配置目录合法性
    const validateRet = validateConfig(cdnConfig);
    if ( validateRet != true ) {
        throw new Error(`${validateRet}`);
    }
    // 3. 整合&工作
    await CDN.run();

    return 'cdn上传成功^^^^';
}