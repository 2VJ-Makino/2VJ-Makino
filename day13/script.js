'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual;
let expected;

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

// //アセスメント2

// //1
// //関数 sayHelloToFriends を宣言してください。

// /**
//  * @param {Array<string>} array - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// function sayHelloToFriends(array) {

//     const retArray = [];

//     for (const element of array) {
//         retArray.push("Hello, " + element + "!");
//     }
//     return retArray;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} object - オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし値が文字列である場合のみ、そのキー・値のペアを持つ。
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
// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // キーが "b" または "d" のペアは含まれていない

// //3
// //関数 filterArrayForStrings を宣言してください。2 問目で作った関数を 使ってください 。

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 与えられたオブジェクトを要素に持つ配列。ただし値が文字列である場合のみ、各オブジェクトはそのキー・値のペアを持つ。
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

// //4
// //以下のコードをコンソールで実行する前に、何が表示されるか説明してみましょう。
// //説明：
// //一番深いループ(let kのループ)でconsole.logが2回実行される
// //表示内容は[names]の配列を、先頭から読みだしたもので(let jのループ)
// //上記が4回ループ(let iのループ)
// //⇒( ichi　ichi , ni ni, san san, yon yon ) が4回表示される


// const names = ["ichi", "ni", "san", "yon"];

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < names.length; j++) {
//         for (let k = 1; k < 3; k++) {
//             console.log(names[j]);
//         }
//     }
// }

// //5
// //以下のコードは、複数のネストされたブロック内で 同じ変数名 を使用しています。
// //コードを実行する前に何が表示されるか予想してみましょう。
// //その後、コードを実行して予想が合っていたかどうかを確認してください。
// //なぜこのような結果になるのか理由を説明してください
// //予想：
// //a:0 b:0 c:0 c:1 b:1 a:1 
// //はずれ
// //説明：
// // 添え字が毎回初期化されて0～1でループ
// //a:0 b:0 c:0 c:1 b:1 c:0 c:1 最上位のループ一回目
// //a:1 b:0 c:0 c:1 b:1 c:0 c:1 最上位のループ2回目



// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//         console.log("b: " + i);
//         for (let i = 0; i < 2; i++) {
//             console.log("c: " + i);
//         }
//     }
// }


