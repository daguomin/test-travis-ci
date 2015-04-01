/**
 * Created by zengjie on 15-4-1.
 */

var funcs = require('./funcs');

function main(argv){
    console.log(funcs.fibonacci(parseInt(argv[0])));
}

if(require.main === module){
    main(process.argv.slice(2));
}