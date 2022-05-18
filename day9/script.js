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
function testarryFunction(actual, expected) {

    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED!");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd("Result:");
    }
}

//ウォームアップ
//関数: getOddNumbers を宣言してください。

// /**
//  * @param {Array<number>} array - 数値型の要素を持つ配列

//  * @returns {Array<number>} 与えられた配列の中の奇数だけが入った配列
//  */
// function getOddNumbers(array) {

//     let retArray = [];

//     for (const element of array) {
//         if (element % 2 !== 0) {
//             retArray.push(element);
//         }
//     }
//     return retArray;
// }

// actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// expected = [1, 3, 5, 7];
// testarryFunction(actual, expected);

// actual = getOddNumbers([2, 4, 6, 8]);
// expected = [];
// testarryFunction(actual, expected);

//基礎
//1
//myInfo というオブジェクトを作成し、name, age, location, isCoder というキーを追加してください。isCoder の値を true に設定し、それ以外の値に自分自身の情報を入れてください。

// const myInfo = {
//     name: "AAA",
//     age: 10,
//     location: "Aichi",
//     isCoder: true
// };


// // この演習では TDD スタイルのテストは必要ありません。ここでは console.log を使用してください。
// console.log(myInfo["isCoder"]); // => "true"


//2と3
// ドットとダッシュの連続で情報を伝えるモールス信号は、電話が登場する前、電気通信の手段に広く使われていました。
// 以下の配列は "tar" という文字列をモールス信号で表したものです。
// まず、これをもとに "morseCode" というオブジェクトを作ってください。キーには対応する文字を使いましょう。

// const tar = ["-", ".-", ".-."];

// const morseCode = {
//     t: "-",
//     a: ".-",
//     r: ".-."
// }

// function morseCodeArt(string) {

//     let array = Array.from(string);
//     let retMorse = "";

//     for (const element of array) {
//         retMorse += morseCode[element] + " ";
//     }

//     return retMorse;

// }

// // testarryFunction(morseCode["t"], "-");
// // testarryFunction(morseCode["a"], ".-");
// // testarryFunction(morseCode["r"], ".-.");

// testarryFunction(morseCode["a"], ".-");
// testarryFunction(morseCode["r"], ".-.");
// testarryFunction(morseCode["t"], "-");
// testarryFunction(morseCodeArt("art"), ".- .-. -");


//4
// 関数 select を宣言してください。
// ヒント: 最近学んだある パターン が使えるかもしれません。

/**
 * @param {object} ??? - オブジェクト
 * @param {Array<string>} ??? - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */
// function select(object, array) {

//     let retObject = {};

//     for (let i = 0; i < array.length; i++) {

//         retObject[array[i]] = object[array[i]];
//     }

//     return retObject;

// }

// testarryFunction(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
// testarryFunction(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
// testarryFunction(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
// testarryFunction(select({ a: 1, b: 2, c: 3 }, []), {});

//5
//関数 countCharacters を宣言してください。
/**
 * @param {string} message
 * @returns {{ [character: string]: number }} 与えられた文字列の中の各アルファベットをキーに、その登場回数を値にしたオブジェクト
 */
// function countCharacters(message) {

//     let retObject = {}
//     let messageArry = Array.from(message);

//     for (const element of messageArry) {
//         retObject[element] = message.split(element).length - 1;
//     }
//     return retObject;
// }


// testarryFunction(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
// testarryFunction(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });



//中級演習
//1
//関数 countWords を宣言してください。
//ヒント: 文字列型のメソッド.split が役に立ちます。

/**
 * @param {string} ???
 * @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。
 * 各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
 */
// function countWords(message) {

//     let retObject = {}
//     let messageArry = message.split(" ");   //スペース区切りでメッセージを配列に格納


//     for (const element of messageArry) {

//         //配列の中身が空の場合は空のObjectを返す
//         if (element === "") {
//             return retObject = {};
//         }
//         retObject[element] = message.split(element).length - 1;
//     }

//     return retObject;

// }
// testarryFunction(countWords("hello hello"), { hello: 2 });
// testarryFunction(countWords("hello Hello"), { hello: 1, Hello: 1 });
// testarryFunction(countWords(""), {});

// 応用演習
// この演習では、まだ講義で説明されていないテクニックを使う必要があるかもしれません。
// 関数 removeOddValues を宣言してください。
//ヒント: typeof を使う必要があるかもしれません。

/**
 * @param {object} ??? - オブジェクト
 * @returns {object} 与えられたオブジェクトのキー/値のペアのうち、値が奇数のものを除いた新たなオブジェクト。

 */
// function removeOddValues(inObject) {

//     let retObject = {}

//     for (const element of Object.keys(inObject)) {

//         //数値の場合
//         if (typeof inObject[element] !== "string") {
//             //偶数の場合
//             if (inObject[element] % 2 === 0) {
//                 console.log(inObject[element]);
//                 retObject[element] = inObject[element];
//             }
//         } else {
//             //数値でない場合は奇数出ないと判断、オブジェクトに格納
//             retObject[element] = inObject[element];
//         }
//     }
//     return retObject;
// }


// //testarryFunction(removeOddValues({ a: 1, b: 2, c: 3 }), { b: 2 });
// testarryFunction(removeOddValues({ a: "1", b: "2", c: "3" }), {
//     a: "1",
//     b: "2",
//     c: "3",
// });
// // 1 行が非常に長くなる場合は、キー/値のペアを改行して書くこともできます。

// ナマケモノタイム!!!🦥
// 以下は、ナマケモノ(sloth) についての情報が含まれている bucketOfSloths という配列です。




//関数 longestName を宣言してください。

/**
 * @param {Array<object>} slothArray - ナマケモノに入った配列
 * @returns {object} 名前・ミドルネーム・苗字を合わせた名前が一番長いナマケモノのオブジェクト
 */
// function longestName(slothArray) {

//     let retObject = {};
//     let nameString = "";
//     let nameSum = 0;
//     let nameSumTemp = 0;


//     for (let i = 0; i < slothArray.length; i++) {
//         //FistとLastは必ずある
//         nameSumTemp = 0;

//         nameSumTemp = slothArray[i].name.first.length + slothArray[i].name.last.length;

//         //Middleはある場合
//         if (slothArray[i].name.middle !== undefined) {

//             nameSumTemp = nameSumTemp + slothArray[i].name.middle.length;

//         }

//         if (nameSumTemp > nameSum) {
//             nameSum = nameSumTemp;
//             nameString = slothArray[i].name;   //nameを覚えておく
//         }

//     }

//     console.log(nameString);

//     return retObject;



// }
// testarryFunction(longestName(bucketOfSloths), bucketOfSloths[0]);
// //test(longestName(bucketOfSloths.slice(1)), bucketOfSloths[2]);
// //test(longestName(), undefined);

//ソート(バブル固定)
function sort(array) {

    let temp = 0;

    for (let i = 0; i <= array.length; i++) {
        for (let j = array.length - 1; j >= 1; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
const bucketOfSloths = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
    { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
    { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
    { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
];

const bucketOfSlothsSortedByAge = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
    { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
    { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
    { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
];




//2.関数 getSortedByAge を宣言してください。
function getSortedByAge(array) {

    let temp = 0;

    for (let i = 0; i <= array.length; i++) {
        for (let j = array.length - 1; j >= 1; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;




}