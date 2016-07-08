// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.
//
// EX:
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 'fizz'
// 7
// 8
// 'fizz'
// 'buzz'

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.


// for(num =1; num <= 100; num++){
//   console.log(num);
// }



// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.


// for(num = 1; num <=100; num++){
//   if (num % 3 === 0){
//     console.log('fizz');
//   }
// }

// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.

// for(num = 1; num <=100; num++){
//   if (num % 3 === 0){
//     console.log('fizz');
//   } else if (num % 5 ===) {
//     console.log('buzz');
//   }
// }


// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.


for(num = 1; num <=100; num++){
    if ((num % 5 === 0) && (num % 3 === 0)){
      console.log("FizzBuzz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else if (num % 3 === 0){
      console.log("Fizz");
    } else {
      console.log(num);
    }
      
};