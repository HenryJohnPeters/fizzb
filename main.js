"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FizzBuzzClass_js_1 = require("./Models/FizzBuzzClass.js");
const FizzBuzzLog_js_1 = require("./Functions/FizzBuzzLog.js");
//instantiate Fizz Buzz
let fizzBuzz = new FizzBuzzClass_js_1.FizzBuzzClass(FizzBuzzLog_js_1.FizzBuzzLogger);
//run
let fizzBuzzValues = fizzBuzz.FizzBuzzLogger(100);
console.log(fizzBuzzValues);
