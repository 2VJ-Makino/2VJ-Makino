'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト部分を関数化 削除しない
let actual;
let expected;

//配列以外のテスト関数
function testFunction(actual, expected) {

    if (actual === expected) {
        console.log("Test PASSED!");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

//配列用のテスト関数
function test(actual, expected) {

    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.log("Test PASSED!");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd("Result:");
    }
}

// //ウォームアップ
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

//
// function greeting() {
//     console.log("Hello!");
// }

// function runSomething(func) {
//     func();
// }

// //runSomething(greeting);
// runSomething(greeting());

// //returnAll という関数を考えます。
// function returnAll(value) {
//     return value;
// }
// // //関数宣言はなく、関数式で returnAll を書いてみましょう。
// // const returnAll2 = function (value) {
// //     return value;
// // }

// // console.log(typeof returnAll(false)); // boolean
// // console.log(typeof returnAll(5)); //number
// // console.log(typeof returnAll("5")); //string
// // console.log(typeof returnAll([])); // object
// // console.log(typeof returnAll({ a: 1 })); // object

// function foo() {
//     return "hi";
// }

// console.log(typeof returnAll(foo));     // function
// console.log(typeof returnAll(foo()));   // string

//中級
//1
//関数 doSomething を宣言してください。

/**
 * @param {Function} ???
 * @param {any} ??? - 与えられた関数に渡す引数
 * @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
 */
// ここにコードを書きましょう
// const doSomething = function (action, number) {

//     return action(number);

// }

// function addTen(number) {
//     return number + 10;
// }

// test(doSomething(addTen, 6), 16);
// test(doSomething(addTen, -100), -90);

//ここまでの授業で扱った関数は outer、addTen、doSomething のようにすべて名前がついていて、上の演習でもdoSomething に名前のある関数を渡しました。しかし、名前のない関数、つまり、無名関数を doSomething に渡すこともできます。以下のコードでも関数 doSomething はきちんと動作します。

// test(
//     doSomething(function (num) {
//         return num * 4;
//     }, 2),
//     8
// );

// const outer = function () {
//     return function () {
//         return 5;
//     };
// };

// let i = outer();
// console.log(i);
// console.log(outer());
// console.log(typeof outer());

// const add = function (x) {
//     return function (y) {
//         return x + y;
//     };
// };

// const addFive = add(5);
// //add ƒ (y) {
// //    return 5 + y;
// //    }

// let foo = addFive(3);

// //return 5 + y ;
// //return 5 + 3;


// console.log(foo); // ???

// const addTen = function (number) {
//     return number + 10;
// }

// function addTen2(number) {
//     return number + 10;
// }

// const double = function (x) {

//     console.log("double in!");
//     console.log(x);


//     return 2 * x;
// };


// console.log(doSomething(5, function (x) { return 2 * x; }));


// function greeting() {
//     console.log("Hello!");
// }

// function runSomething(func) {
//     func();
// }

// console.log(typeof greeting);
// //runSomething(greeting);

// const testFu = function foo2() { return "hi"; };


// function returnAll(value) {
//     return value;
// }

// const ret = function returnAll2(x) { return x };

// console.log(returnAll(5));                                  //通常関数
// console.log(ret(5));                                        //関数式
// console.log(doSomething(5, function (x) { return x; }));    //無名関数

// // 例えば、、、
// console.log(typeof returnAll(false));       // boolean

// console.log(typeof returnAll(5));           // number
// console.log(typeof returnAll("5"));         // string
// console.log(typeof returnAll([]));          // object
// console.log(typeof returnAll({ a: 1 }));    // object


// function foo() {
//     return "hi";
// }


// console.log(typeof returnAll);              //function
// console.log(typeof returnAll());            //undefined
// console.log(typeof returnAll(foo));         //function
// console.log(typeof returnAll(foo()));       //string

// console.log(returnAll(testFu));         //function
// console.log(returnAll(testFu()));       //string
// const doSomething = function (number, action) {
//     return action(number);
// };

// test(
//     doSomething(function (num) {
//         return num * 4;
//     }, 2),
//     8
// );

// function multiplyFour(num) {
//     return num * 4;
// }

//test(doSomething(multiplyFour, 2), 8);


// const outer = function () {
//     return function () {
//         return 5;
//     };
// };

// console.log(outer());           //5
// console.log(typeof outer());    //number

// const inner = outer();
// console.log(inner());
// console.log(typeof inner());


// const add = function (x) {
//     console.log("in1")
//     return function (y) {
//         console.log("in2")
//         return x + y;
//     };
// };

// const addFive = add(10); //xに5が入る
// console.log("add(5)end");
// let foo = addFive(3);   //yに3が入る
// console.log("addFive(3)end");
// console.log(foo);

// function foo() {
//     function bar() {
//         return 200;
//     }
//     return bar();
//     function bar() {    //redefine
//         return 20;
//     }
// }
// console.log(foo());

// function foo() {
//     var bar = function () {
//         return 3;
//     };
//     return bar();
//     var bar = function () { //bar -> undefined
//         return 8;
//     };
// }
// console.log(foo());

// console.log(foo());
// function foo() {
//     var bar = function () { //bar -> undefined
//         return 3;
//     };
//     return bar1();
//     var bar1 = function () {    //bar -> undefined
//         return 8;
//     };
// }


// function foo() {
//     return bar();   // bar -> undefined
//     var bar = function () {
//         return 3;
//     };
//     var bar = function () {
//         return 8;
//     };

// }
// console.log(foo());

