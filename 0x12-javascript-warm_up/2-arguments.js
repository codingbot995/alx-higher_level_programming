#!/usr/bin/node

const argsLength = process.argv.length;
if (argsLength == 2){
console.log("no argument");
}
else if (argsLength == 3){
console.log("argument found");
}
else{
console.log("arguments found");
}
