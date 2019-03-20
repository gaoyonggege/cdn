#!/usr/bin/env node
/**
*  main
*   @author: gaoyonggege@github.com
*   @date: 2019.03.19
*/

import startup from './startup';

startup()
.then( ( data ) => {
    console.log(`data : ${data}`)
}).catch( ( err ) => {
    console.log(`err : ${err}`);
});

