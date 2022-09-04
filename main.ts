import {FizzBuzzClass}  from "./Models/FizzBuzzClass.js";
import { FizzBuzzLogger } from "./Functions/FizzBuzzLog.js";
//instantiate Fizz Buzz
let fizzBuzz : FizzBuzzClass = new FizzBuzzClass(FizzBuzzLogger);
//run
let fizzBuzzValues = fizzBuzz.FizzBuzzLogger(100);
console.log(fizzBuzzValues);
 
 

