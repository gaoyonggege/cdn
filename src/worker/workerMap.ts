/**
*  worker map
*/
import { Worker } from '../model/worker';
import * as TYPES from '../type';

const workerMap: Map<string, Worker> = new Map<string, Worker>();
workerMap.set( TYPES.QINIU,  );

export {
    workerMap
};