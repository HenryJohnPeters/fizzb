const chaiRef = require('chai');
const mockito = require('ts-mockito')
const {FizzBuzzLogger} = require('../Functions/FizzBuzzLog')
const {FizzBuzzClass} =  require("../Models/FizzBuzzClass")
let fizzBuzz = new FizzBuzzClass(FizzBuzzLogger);

// // Creating mock
// let mockedFoo= mockito.mock(fizzBuzz);
// // Getting instance from mock
// let foo = mockito.instance(mockedFoo);
// // Using instance in source code
// foo.FizzBuzzLogger(100);
// foo.FizzBuzzLogger(100);

describe('#fizzBuzz()', async ( ) => {
 
 context('{param is 10}', function() {
   it('Returns array of ten', function() {
     chaiRef.expect(FizzBuzzLogger(100)).to.have.length(10)
   })
 })

context('{param is 100}', function() {
  it('returns array of 100', function() {
    chaiRef.expect(FizzBuzzLogger(100)).to.have.length(100);
  })
})

context('{param of 3 includes fizz}', function() {
  it('Array contains fizz', function() {
    chaiRef.expect(FizzBuzzLogger(3)).to.includes("Fizz");
  })
})

context('{param of 5 includes buzz}', function() {
  it('Array contains buzz', function() {
    chaiRef.expect(FizzBuzzLogger(5)).to.includes("Buzz");
  })
})

context('{param of 15 includes FizzBuzz}', function() {
  it('Array contains FizzBuzz', function() {
    chaiRef.expect(FizzBuzzLogger(15)).to.includes("FizzBuzz");
  })
})
})