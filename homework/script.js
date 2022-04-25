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

// // //ウォームアップ
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし、値が文字列のキー/値ペアだけを持つ。
//  */
// function filterObjectForStrings(object) {

//     const retObject = {};

//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             retObject[key] = object[key];
//         }
//     }
//     return retObject;

// }
// // test(filterObjectForStrings(obj1), obj1); // 変化なし
// // test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
// // test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない

// //関数 filterArrayForStrings を宣言してください。 1 問目で作った関数 を使ってください。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトの入った配列
//  * @returns {Array<{ [key: string]: string }>} 与えられたすべてのオブジェクトの入った配列だが、各オブジェクトには、値が文字列であるキー/値ペアだけが含まれる。
//  */
// function filterArrayForStrings(arrayOfObjects) {

//     const retArray = [];
//     for (const element of arrayOfObjects) {
//         retArray.push(filterObjectForStrings(element));
//     }
//     return retArray;
// }
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// // 2 番目の要素からキー が "b" のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// /**
//  * @param {Array<object>} ??? - オブジェクトの入った配列
//  * @param {string} キー
//  * @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
//  */
// function pluck(arrayObject, selectedKey) {

//     const retArray = [];

//     for (const element of arrayObject) {

//         retArray.push(element[selectedKey]);
//     }
//     return retArray;
// }

// const arrayOfObjects = [
//     { a: 1, b: 2, c: 3 },
//     { a: 4, b: 5, c: 6 },
//     { a: 7, b: 8, c: 9 },
// ];

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);

