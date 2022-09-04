//Function to calculate fizz buzz
  export const FizzBuzzLogger = (amount : number ) => {
    let fizzBuzzValues: any[] = [];
    for (let i : number = 1 ; i <= amount; i++) {
    if (i % 15 == 0) {fizzBuzzValues.push("FizzBuzz"); }
    else if (i % 3 == 0) {fizzBuzzValues.push("Fizz")}
    else if (i % 5 == 0) {fizzBuzzValues.push("Buzz")}
    else{fizzBuzzValues.push(i)}
    } 
    console.log("values collected")
    return fizzBuzzValues
  }

  
 