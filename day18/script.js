'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// const arrayOfObjects = [
//     { name: "alice", favoriteColor: "green" },
//     { name: "bob", favoriteColor: "blue" },
// ];


// // function getNames(array) {
// //     return array.map(obj => obj.name);
// // }

// const getNames = array => array.map(obj => obj.name);
// console.log(getNames(arrayOfObjects));


// function getNames(array) {
//     let result = [];
//     array.map(function (obj) { result.push(obj.name) })
//     return result;
// }

// function getNames(array) {
//     return array.map(function (obj) {
//         return obj.name
//     })
// }

// test(getNames(arrayOfObjects), ["alice", "bob"]);

// function getFavoriteColors(array) {
//     let result = [];
//     array.map(function (obj) {
//         result.push(obj.favoriteColor)
//     })
//     return result;
// }
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

// function giveMeABetterName(array) {

//     let result = [];

//     for (let i = 2; i < array.length; i++) {
//         result.push(array[i]);
//     }
//     return result;
// }

// console.log(giveMeABetterName([2, 3, 4, 5, 6]));

//関数 isMultipleOfTen を宣言してください。
//この関数は.filter メソッドに実行されているという点に注目してください。
//なお、関数内で.filter メソッドを使用しては いけません。
//ここでは おそらく アロー関数を使う必要はないでしょう。

// /**
//  * @param {number} ???
//  * @returns {boolean} 与えられた数値が 10 の倍数かどうか
//  */
// function isMultipleOfTen(number) {
//     return number % 10 === 0;
// }

// const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

//関数 hasAVowel を宣言してください。
//この関数は.filter メソッドに実行されているという点に注目してください。
//なお、関数内で.filter メソッドを使用しては いけません。
//ここでは おそらく アロー関数を使う必要はないでしょう。
/**
//  * @param {string} ???
//  * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
//  */
// // ここにコードを書きましょう
// function hasAVowel(string) {

//     return string.indexOf("a") !== -1 || string.indexOf("e") !== -1
//         || string.indexOf("i") !== -1 || string.indexOf("o") !== -1 || string.indexOf("u") !== -1;

// }

// const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
// const arrayOfStrings2 = ["bhg", "waa", "cvb"];

// test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
// test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

// 関数 getPositiveNumbers を宣言してください。
// この関数自体は.filter メソッドを 使用してください 。
// アロー関数も 使用してください 。
// アロー関数は getPositiveNumbers 関数の 内部 で使用されます。

// /**
//  * @param {Array<number>} ???
//  * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
//  */
// const getPositiveNumbers = (array) => array.filter(element => element > 0);
// // return array.filter(function (element) {
// //     return element > 0;
// // })

// test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
// test(getPositiveNumbers([-2, -4]), []);


// 関数 getQuestions を宣言してください。
// この関数は.filter メソッドを 使用してください 。
// アロー関数も 使用してください 。
// アロー関数は getQuestions 関数の 内部 で使用されます。。

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// const getQuestions = array => array.filter(element => element[0].toUpperCase() === element[0] && element[element.length - 1] === "?")

// // return array.filter(function (element) {
// //     return element[0].toUpperCase() === element[0] && element[element.length - 1] === "?";
// // })

// const arrayOfStrings3 = [
//     "Hi, there.",
//     "What in the world?",
//     "My name is JavaScript",
//     "Do you want to know a secret?",
// ];

// test(getQuestions(arrayOfStrings3), [
//     "What in the world?",
//     "Do you want to know a secret?",
// ]);
// test(getQuestions(arrayOfStrings3.slice(2)), [
//     "Do you want to know a secret?",
// ]);


// 関数 getOddLengthCapitalWords を宣言してください。

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、
 * 　　　　　　　　　　　　　　文字がすべて大文字の文字列のみを要素として持つ配列
 */
// const getOddLengthCapitalWords = array => array.filter(element => element.length % 2 !== 0 && element.toUpperCase() === element);

// return array.filter(function(element){
//   return element.length % 2 !== 0 && element.toUpperCase() === element
// })

// let result = [];
// for (let element of array) {
//   if (element.length % 2 !== 0 && element.toUpperCase() === element) {
//     result.push(element);
//   }
// } return result;


// 長さが奇数の場合、2で割ってあまり0でない場合、.push 
// かつ文字列のすべての文字を大文字に変換したものと元の文字列を比較しイコールなら　.push　



// const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

// test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
// test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);



// 関数 intersection を宣言してください。
// ここでは Lodash のメソッドを 使用しないで 実装しましょう。

/**
 * @param {Array<any>} ???
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
 */
// function intersection(array1, array2) {

//     let result = [];
//     for (let element1 of array1) {
//         for (let element2 of array2) {
//             if (element1 === element2) {
//                 result.push(element1);
//             }
//         }
//     }
//     return result;
// }

// function intersection(array1, array2) {

//     let result = [];
//     let temp = 0;
//     for (let element1 of array1) {
//         temp = (array2.filter(function (element) {
//             return element1 === element;
//         }))
//         if (temp.length !== 0) {
//             result.push(Number(temp));
//         }
//     }
//     return result;
// }
//filterは対象となるモノが無い場合はカラの配列を返すので安易なPushは注意
// function intersection(array1, array2) {

//     let result = [];
//     let temp = 0;
//     for (let element1 of array1) {
//         temp = (array2.filter(function (element) {
//             return element1 === element;
//         }))
//         if (temp.length !== 0) {
//             result.push(Number(temp));
//         }
//     }
//     return result;
// }
// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);

//filterは対象となるモノが無い場合はカラの配列を返すので安易なPushは注意
// function intersection(array1, array2) {

//     let result = [];
//     let temp = 0;
//     for (let element1 of array1) {
//         temp = (array2.filter(function (element) {
//             return element1 === element;
//         }))
//         if (temp.length !== 0) {
//             result.push(Number(temp));
//         }
//     }
//     return result;
// }
// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);

// // 応用演習
// // 関数 intersection を 任意の数の引数 を取るように変更してください。

// /**
//  * @param {...Array<any>} ??? - 任意の数の配列
//  * @returns {Array<any>} 与えられた配列のすべてに共通する要素だけが入った配列
//  */

// function intersections(...array) {

//     console.log(array);
//     console.log(array.length);
//     return array.length;

// }

// // }

// test(intersections([1, 2, 3], [1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersections([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3]);
// test(intersections([1, 2, 3], [3, 4, 5], [6]), []);
// test(
//     intersections([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]),
//     []
// );