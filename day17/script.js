'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function doubleArray(array) {

//     const result = [];

//     for (const element of array) {
//         result.push(element * 2);
//     }
//     return result;
// }

// console.log(doubleArray([2, 3, 4, 5, 6]));

// function squaredArray(array) {

//     const result = [];

//     for (const element of array) {
//         result.push(element ** 2);
//     }
//     return result;
// }

// console.log(squaredArray([2, 3, 4, 5, 6]));

//基礎演習
// 関数 getGreeting を宣言してください。
// この関数は.map メソッドに実行されているという点に注目してください。なお、関数内で.map メソッドを使用しては いけません。

// /**
//  * @param {string} ???
//  * @returns {string} 与えられた引数に挨拶文を追加した文字列
//  */
// function getGreeting(person) {
//     return "Hello, " + person + ".";
// }

// test(["zeno", "yanis", "xander"].map(getGreeting), [
//     "Hello, zeno.",
//     "Hello, yanis.",
//     "Hello, xander.",
// ]);

// 関数 abs を宣言してください。
// この関数は.map メソッドに実行されているという点に注目してください。
// なお、関数内で.map メソッドを使用しては いけません。

// /**
//  * @param {number} ???
//  * @returns {number} 与えられた引数の絶対値
//  */
// function abs(num) {
//     // if (num < 0) {
//     //     return num * -1;
//     // }
//     // return num;

//     return Math.abs(num);
// }
// test([1, 2, 3].map(abs), [1, 2, 3]);
// test([-1, -2, -3].map(abs), [1, 2, 3]);
// test([-1, 2, -3].map(abs), [1, 2, 3]);

// 関数 getIncrementedNumbers を宣言してください。
// この関数では.map メソッドを 使用してください 。
// ヘルパー関数（この関数を補助する関数）を書く必要があるかもしれませんが、無名関数で書いてもかまいません。

// /**
//  * @param {Array<number>} ???
//  * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
//  */
// function getIncrementedNumbers(array) {
//     return array.map(function (elem) { return elem + 1; })
// }

// test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
// test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

// const array1 = [0, 0, 0];
// test(getIncrementedNumbers(array1), [1, 1, 1]);
// // 元の配列が変更されていないことを確認してください
// test(array1, [0, 0, 0]);
// 中級演習
// 関数 getSwitched を宣言してください。
// この関数は.map メソッドを 使用してください 。
// ヘルパー関数を書く必要があるかもしれませんが、無名関数を使って書いてもかまいません。

// /**
//  * @param {Array<number|string>} ???
//  * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
//  */
// function getSwitched(array) {
//     return array.map(function (elem) {
//         if (typeof elem === "string") {
//             return Number(elem);
//         } else if (typeof elem === "number") {
//             return String(elem);
//         }
//     })
// }
// test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
// test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
// test(getSwitched(["1", 2, "3"]), [1, "2", 3]);

// 応用演習
// この演習では、講義で説明されたことのないテクニックを
// 使用する必要があるかもしれません。
// 関数 multiplyByIndex を宣言してください。

// /**
//  * @param {Array<number>} ???
//  * @returns {Array<number>} 与えられた配列の各要素とそのインデックスを掛け合わせた数字が要素として入った、新たな配列
//  */
// function multiplyByIndex(array) {
//     return array.map(function (element, index) {
//         return element * index;
//     })
// }
// test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
// test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
// test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);

//関数 feedback を宣言してください。

/**
 * @param {Array<any>} ???
 * @param {Function} ??? - 実行したい関数
 * @param {number} ??? - 関数を実行したい回数
 * @returns {Array<any>} 与えられた配列の各要素に、実行したい回数だけ関数を実行した結果が入った、新しい配列
 */
function feedback(array, func, num) {
    return array.map(fun)
}

function double(element) {
    return element * 2;
}

test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
test(feedback([1, 2, 3], double, 8), [256, 512, 768]);