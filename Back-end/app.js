// let n=5;

// for(let i=0; i<n;i++){
//     console.log("Iteration number: " + i);  

// }
// console.log("Loop finished.");

// console.log(process.argv);

// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello to ", args[i]);
// }

// const someVale=require("./math")
// console.log(someVale.sum(2,2));
// console.log(someVale.mul(2,2));
// console.log(someVale.g);
// console.log(someVale.PI);

// const info=require("./Fruits");
// console.log(info);

// const figlet = require('figlet');

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import { sum, mul, g, PI } from './math.js';

console.log(sum(2, 2));
console.log(mul(2, 2));
console.log(g);
console.log(PI);

import { generate } from "random-words";
console.log(generate()); 