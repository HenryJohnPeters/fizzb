"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzLogger = void 0;
//Function to calculate fizz buzz
const FizzBuzzLogger = (amount) => {
    let fizzBuzzValues = [];
    for (let i = 1; i <= amount; i++) {
        if (i % 15 == 0) {
            fizzBuzzValues.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            fizzBuzzValues.push("Fizz");
        }
        else if (i % 5 == 0) {
            fizzBuzzValues.push("Buzz");
        }
        else {
            fizzBuzzValues.push(i);
        }
    }
    console.log("values collected");
    return fizzBuzzValues;
};
exports.FizzBuzzLogger = FizzBuzzLogger;
