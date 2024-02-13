#!/usr/bin/node

const arg2 = process.argv[2];
const parsedNumber = parseInt(arg2);
if (is NaN(parsedNumber)){
console.log("not a number");
}else{
console.log(`My number:${parsedNumber}`);
}
