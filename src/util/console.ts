/**
*  打印
*   @author: gaoyonggege@github.com
*   @date: 2019.03.20
*/
import chalk from 'chalk';

/**
 * info log
 * @param msg 
 */
export function infoLog ( msg: string ) {
    if ( msg ) {
        console.log(chalk.green('%s'), msg);
    }    
}

/**
 * error log
 */
export function errorLog ( msg: string ) {
    if ( msg ) {
        console.log(chalk.red('%s'), msg);
    }
}
