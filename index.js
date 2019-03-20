

console.log("Yee ha to package management");

const chalk = require('chalk');
 
console.log(chalk.underline(chalk.bgMagenta('Hello world!')));

var arr = [1, 1, 2, 2, 3, 5];
 
require("uniq")(arr);
console.log(chalk.cyan(arr));