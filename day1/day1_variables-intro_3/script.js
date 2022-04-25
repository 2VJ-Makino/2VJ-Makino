'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const circleDiameter = 10;

// ここにあなたのコードを書いてください
let circleCircumference = circleDiameter * Math.PI;
let circleArea = ( circleDiameter / 2 ) * ( circleDiameter / 2 ) * Math.PI;

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

//---------
let a = "B";
let b = "A";

let c = b;
let d = a;

a = c;
b = d;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//---------
let value = 1;
let base = 2;

value = base ** 0;  
console.log(value); // "1" を表示

// value に何かを行う
value = base ** 1;
console.log(value); // "2" を表示

// value に何かを行う
value = base ** 2;
console.log(value); // "4" を表示

// value に何かを行う
value = base ** 3;
console.log(value); // "8" を表示

// value に何かを行う
value = base ** 4;
console.log(value); // "16" を表示


// value に何かを行う
value = base ** 5;
console.log(value); // "32" を表示

// value に何かを行う
value = base ** 6;
console.log(value); // "64" を表示

//----------------
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";

console.log( "Hello, my name is " + firstName +" "+ lastName + ". "+  "I live in " + city + ".");  // "Hello, my name is Yan Fan. I live in Tokyo." を表示
