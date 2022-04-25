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
// //関数 pluck を宣言してください。

// /**
//  * @param {Array<object>} ??? - オブジェクトの入った配列
//  * @param {string} キー
//  * @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
//  */
// // function pluck(arrayObject, key) {

// //     const retArray = [];

// //     for (const element of arrayObject) {

// //         retArray.push(element[key]);
// //     }

// //     return retArray;

// // }

// // const arrayOfObjects = [
// //     { a: 1, b: 2, c: 3 },
// //     { a: 4, b: 5, c: 6 },
// //     { a: 7, b: 8, c: 9 },
// // ];

// // test(pluck(arrayOfObjects, "a"), [1, 4, 7]);

// //基礎演習
// //基礎演習 1 では、このオブジェクトを使用します。

// const hellos = {
//     English: "Hello",
//     Japanese: "Konnichiwa",
//     German: "Hallo",
//     Spanish: "Hola",
//     Arabic: "Ahlan wa sahlan",
//     Chinese: "Nihao",
// };

// // //関数 sayHellos を宣言してください。関数を実行するとあらゆる言語で挨拶が返ってくるようにしましょう。

// // /**
// //  * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
// //  */
// // function sayHellos() {

// //     for (const key in hellos) {
// //         console.log(hellos[key]);
// //     }
// // }

// // // console.log の表示は、返り値ではないため、テストするのは困難です。
// // // 今回は、コンソールの表示を確認することで、テストとしてください。

// // sayHellos();
// // // "Hello"
// // // "Konnichiwa"
// // // "Hallo"
// // // "Hola"
// // // ...

// //2
// //関数 getKeys を宣言してください。

// /**
//  * @param {object} object
//  * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
//  */
// // ここにコードを書きましょう
// // function getKeys(object) {
// //     const keys = [];
// //     for (const key in object) {
// //         keys.push(key);
// //     }
// //     return keys;
// // }
// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

// // test(getKeys(object1), ["a", "b", "c"]);
// // test(getKeys(object2), ["1", "2", "hello"]);

// //3
// // 関数 getValues を宣言してください。
// /**
//  * @param {object} object
//  * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
//  */
// // ここにコードを書きましょう
// function getValues(object) {
//     const array = [];
//     for (const key in object) {
//         array.push(object[key]);
//     }
//     return array;
// }

// // test(getValues(object1), [1, 2, "hello"]);
// // test(getValues(object2), ["a", "b", "c"]);

// //4
// //printAll は、与えられたオブジェクトのすべての値を表示する関数です。しかし、以下のコードではうまくいきません。何が問題なのでしょうか。正しく動くように修正してください。

// // const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };

// // function printAll(object) {
// //     for (const key in object) {
// //         console.log(object[key]);
// //     }
// // }
// // printAll(myObj);

// //5
// //関数 swapPairs を宣言してください。

// /**
//  * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
//  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
//  */
// // ここにコードを書きましょう
// function swapPairs(object) {
//     const newObject = {};
//     for (const key in object) {
//         newObject[object[key]] = key;
//     }
//     return newObject;
// }

// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// // test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// // test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });


// //中級演習
// //2
// //この演習はこれまでに勉強した知識を組み合わせる必要があり、途中、苦戦するかもしれませんが、忍耐強くチャレンジしてみましょう。🔥
// //関数 swapPairs2 を宣言してください。

// /**
//  * @param {object} ???
//  * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、最初のキー/値のペアのみを使用し、その後のペアは無視すること。
//  */
// // ここにコードを書きましょう
// function swapPairs2(object) {
//     const newObject = {};
//     for (const key in object) {
//         if (newObject[object[key]] === undefined) {
//             newObject[object[key]] = key;
//         }
//     }
//     return newObject;
// }

// const object5 = { a: 1, b: 2, c: 3, d: 1 };
// const object6 = { a: 1, b: 1, c: 1, d: 1 };

// // 1 はすでに使われているので、d:1 は無視される
// //test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });
// // この場合も 1  はすでに使われているので、二回目以降、1 が値になるキー/値のペアは無視される。

// //test(swapPairs2(object6), { 1: "a" });


// //関数 getAllValues2 を宣言してください。

// /**
//  * @param {Array<object>} ???
//  * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列
//  */
// // ここにコードを書きましょう
// function getAllValues2(objectInArray) {
//     const array = [];
//     for (const array of objectInArray) {

//     }

// }

// const collection2 = [{ a: 1, b: 2 }, { c: "uno", d: "dos" }, { e: "ichi" }];

// test(getAllValues2(collection2), [1, 2, "uno", "dos", "ichi"]);
// test(getAllValues2(collection2.slice(1)), ["uno", "dos", "ichi"]);



//基礎演習
//基礎演習 1 では、このオブジェクトを使用します。
// const hellos = {
//     English: "Hello",
//     Japanese: "Konnichiwa",
//     German: "Hallo",
//     Spanish: "Hola",
//     Arabic: "Ahlan wa sahlan",
//     Chinese: "Nihao",
// };
//1
//関数 sayHellos を宣言してください。関数を実行するとあらゆる言語で挨拶が返ってくるようにしましょう。

/**
 * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
 */
// function sayHellos() {

//     for (const key in hellos) {
//         console.log(hellos[key]);
//     }

// }

//sayHellos();

//2
//関数 getKeys を宣言してください。

/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */
// function getKeys(object) {
//     let retArray = [];
//     for (const key in object) {
//         retArray.push(key);
//     }
//     return retArray;
// }

// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

//test(getKeys(object1), ["a", "b", "c"]);
//test(getKeys(object2), ["1", "2", "hello"]);

//3
//関数 getValues を宣言してください。

/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */
// function getValues(object) {
//     let retArray = [];
//     for (const key in object) {
//         retArray.push(object[key]);
//     }
//     return retArray;
// }

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);

//4
//printAll は、与えられたオブジェクトのすべての値を表示する関数です。しかし、以下のコードではうまくいきません。何が問題なのでしょうか。正しく動くように修正してください。

// const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
// function printAll(object) {
//     for (const key in object) {
//         console.log(object[key]);
//     }
// }
//printAll(myObj);

//5
//関数 swapPairs を宣言してください。

/**
 * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */
// function swapPairs(object) {
//     let retObject = {};
//     for (const key in object) {
//         retObject[object[key]] = key;
//     }
//     return retObject;
// }

// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

//test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
//test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//復習: 配列とオブジェクト
//1
//関数 getFirstObjectValues を宣言してください。

/**
 * @param {Array<object>} ??? - オブジェクトを要素に持つ配列

 * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った配列
 */
// function getFirstObjectValues(objectArray) {

//     let retArray = [];

//     for (const key in objectArray[0]) {
//         retArray.push(objectArray[0][key]);
//     }
//     return retArray;
// }

// const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

//test(getFirstObjectValues(collection), [1, 2]);
//test(getFirstObjectValues(collection.slice(1)), [3, 3]);

//2
//関数 getAllValues を宣言してください。 for in と for of 、両方の for ループを使用する必要があるかもしれません！

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
 */
// function getAllValues(arrayObject) {
//     let retArray = [];
//     for (const element of arrayObject) {
//         for (const key in element) {
//             retArray.push(element[key]);
//         }
//     }
//     return retArray;
// }

// test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
// test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);

//3
//関数 selectAllValues を宣言してください。

/**
 * @param {Array<object>} ???
 * @param {string} ??? - 取り出したいキーの名前
 * @returns {Array<any>} すべてのオブジェクトにおいて第二引数のキーに対応する値が入った配列
 */
// function selectAllValues(arrayObject, keyString) {
//     let retArray = [];
//     for (const element of arrayObject) {
//         for (const key in element) {
//             if (key === keyString) {
//                 retArray.push(element[keyString]);
//             }
//         }
//     }
//     return retArray;
// }

// test(selectAllValues(collection, "a"), [1, 3, 100]);
// test(selectAllValues(collection, "b"), [2, 3, 4]);

// 中級演習
// この演習はこれまでに勉強した知識を組み合わせる必要があり、途中、苦戦するかもしれませんが、忍耐強くチャレンジしてみましょう。🔥
//1
//関数 swapPairs2 を宣言してください。

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、最初のキー/値のペアのみを使用し、その後のペアは無視すること。
 */
// function swapPairs2(object) {
//     let retObject = {};
//     for (const key in object) {
//         //キーを調べてなかったらキーとバリューを入れ替え
//         if (retObject[object[key]] === undefined) {
//             retObject[object[key]] = key;
//         }
//     }
//     return retObject;
// }

// const object5 = { a: 1, b: 2, c: 3, d: 1 };
// const object6 = { a: 1, b: 1, c: 1, d: 1 };

// // 1 はすでに使われているので、d:1 は無視される
// test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });
// // この場合も 1  はすでに使われているので、二回目以降、1 が値になるキー/値のペアは無視される。
// test(swapPairs2(object6), { 1: "a" });

//2
//関数 getAllValues2 を宣言してください。
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列
 */
// function getAllValues2(arrayObject) {

//     let retArray = [];
//     for (const element of arrayObject) {
//         for (const key in element) {
//             retArray.push(element[key]);
//         }
//     }
//     return retArray;

// }
// const collection2 = [{ a: 1, b: 2 }, { c: "uno", d: "dos" }, { e: "ichi" }];

//test(getAllValues2(collection2), [1, 2, "uno", "dos", "ichi"]);
//test(getAllValues2(collection2.slice(1)), ["uno", "dos", "ichi"]);

//3
//関数 getRandomHello を宣言してください。
//ヒント： Math オブジェクトの.random メソッドが使えるかもしれません。

/**
 * @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の任意の言葉
 */
// function getRandomHello() {

//     let helloArray = [];
//     let i = 0;

//     //配列にkeyをコピー
//     for (const key in hellos) {
//         helloArray[i] = key;
//         i++;
//     }
//     return hellos[helloArray[Math.floor(Math.random() * helloArray.length)]];


// }
// const hellos = {
//     English: "Hello",
//     Japanese: "Konnichiwa",
//     German: "Hallo",
//     Spanish: "Hola",
//     Arabic: "Ahlan wa sahlan",
//     Chinese: "Nihao",
// };

// ランダムな出力をする関数をテストすることは困難です。
// ここでは、コンソールの表示を見て、テストとしましょう。
//console.log(getRandomHello()); // "konnichiawa"、"hola"、等、実行する度にランダムな言葉が表示されるはずです。

//応用演習
//この演習では、講義で説明されたことのないテクニックを使用する必要があるかもしれません。（テストには基礎演習、中級演習で使ったオブジェクトを使っています。）

//1
//関数 swapPairs3 を宣言してください。

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、それらのキーを配列に入れること。
 */
function swapPairs3(object) {
    let retObject = {};
    for (const key in object) {

        //console.log(key);                       //key
        //console.log(object[key]);               //value
        if (retObject[object[key]] === undefined) {
            retObject[object[key]] = key;
        }
        else {
            // console.log(key);
            // console.log(retObject[object[key]]);

            console.log(retObject[1]);

        }
        console.log(retObject);

    }
    return retObject;
}
const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };
//test(swapPairs3(object5), { 1: ["a", "d"], 2: "b", 3: "c" });
//test(swapPairs3(object6), { 1: ["a", "b", "c", "d"] });

const object7 = { 1: ["a"], 2: "b", 3: "c" };

//object7[1] = ["a"];

object7[1].concat("b");
console.log(object7);