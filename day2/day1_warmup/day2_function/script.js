'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// function add(numOne, numTwo) {
//     return numOne + numTwo;
//   }
  
//   // テスト
//   console.log(add(4, 3)); // 7 を表示
//   console.log(add(100, 42)); // => 142

//   console.log(add(100)); // 何が起こる？
//   console.log(add(1, 4, 5)); // 何が起こる？

//   function simpleFunctionA() {
//     return "Hello simple function A";
//   }
  
//   function simpleFunctionB() {
//     console.log("Hello simple function B");
//   }
  
//   console.log(simpleFunctionA(), "--> From running Simple Function A");
//   console.log(simpleFunctionB(), "--> From running Simple Function B");

// function subtract(num1, num2) {
//     // ここにコードを書いてください

//     return num1 - num2;

//   }
//   テスト:
  
//   console.log(subtract(4, 3)); // => 1
//   console.log(subtract(100, 42)); // => 58

//   function average(num1, num2) {
//     // ここにコードを書いてください

//     return ( num1 + num2 ) / 2;

//   }
//   テスト:
//   console.log(average(4, 3)); // => 3.5
//   console.log(average(100, 42)); // => 71


// function cube( x ) {

//     return x ** 3;

// }
// //   テスト:
//     console.log(cube( 3 )); // => 27


// function simpleHelloA() {
//     console.log("hello");
//   }
  
//   function simpleHelloB() {
//     return "hello";
//   }
  
//   const a = simpleHelloA();
//   const b = simpleHelloB();
//   console.log(a, b);


// function createGreeting(greetingPhrase, instructorName) {
//     return greetingPhrase + ", " + instructorName + "!";
// }

// let morningGreeting = createGreeting( "Good morning" , "Mike" );
// let dayGreeting = createGreeting( "Hello" , "Beau" );
// let eveningGreeting = createGreeting( "Good evening" , " Alex" );


// console.log(morningGreeting);   //"Good morning, Mike!" を表示
// console.log(dayGreeting);       // "Hello, Beau!" を表示
// console.log(eveningGreeting);   // "Good evening, Alex!" を表示


function guessMyNumber(n) {
    if (n > 6) {
      return "Please try a number between 0 and 5.";
    }
    else if (n === randomNumber(6)) {
      return "You guessed my number!";
    }
    return "Nope! Wrong number!";
}
  
function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
}
