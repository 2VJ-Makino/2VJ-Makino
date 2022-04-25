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

// //1
// //関数 filterObjectForStrings を宣言してください。

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

// //test(filterObjectForStrings(obj1), obj1); // 変化なし
// //test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
// //test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない

// //2
// //関数 filterArrayForStrings を宣言してください。 1 問目で作った関数 を使ってください。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトの入った配列
//  * @returns {Array<{ [key: string]: string }>} 与えられたすべてのオブジェクトの入った配列だが、各オブジェクトには、値が文字列であるキー/値ペアだけが含まれる。
//  */
// function filterArrayForStrings(arrayOfObjects) {

//     const retArray = [];

//     for (const element of arrayOfObjects) {

//         console.log("ele", element);
//         retArray.push(filterObjectForStrings(element));
//     }

//     return retArray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// // 2 番目の要素からキー が "b" のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


//ペア演習
//パートナーと一緒に次の演習に取り組みましょう。
//for ループを使って、以下のコードを書き換えてください。

// let index = 0;

// while (index <= 4) {
//     console.log("hello!");
//     index++;
// }

// console.log("-");

// for (let index = 0; index <= 4; index++) {

//     console.log("hello!");

// }

//2
// const array = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < array.length; i++) {
//     console.log("Value:" + i, "Index" + i);
// }

//関数 sayFourHellos を宣言してください。for ループを使って、"Hello!" を 4 回表示するようにしてください。
// function sayFourHellos() {

//     for (let i = 0; i < 4; i++) {

//         console.log("hello!");

//     }

// }

// sayFourHellos();
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

// //関数 countDown を宣言してください。start の数値をを引数にとり、start から 0 までの数値をカウントダウンさせて表示しましょう。for ループを使ってください。
// function countDown(start) {

//     for (let i = start; i >= 0; i--) {

//         console.log(i);
//     }
// }

// countDown(5);
// //5
// //4
// //3
// //2
// //1
// //0

//基礎1
//関数 sayHellos を宣言してください。引数に数字 n をとり、for ループを使って "Hello!" を n 回表示させましょう。
//テストケース:

// function sayHellos(num) {

//     for (let i = 0; i <= num - 1; i++) {

//         console.log("hello!");

//     }
// }
// sayHellos(4);
// // "Hello!"
// // "Hello!"
// // "Hello!"
// // "Hello!"

//関数 countToTen を宣言してください。1 から 10 までの数字を毎行 1 だけ増えていくように表示させてください。
//ヒント: for ループのブロックの中で、添え字（index）を console.log してみましょう。
//テストケース:
// function countToTen() {

//     // for (let i = 1; i <= 10; i++) {
//     //     console.log(i);
//     // }
// }

//countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//関数 counter 内の while ループを for ループに書き直してください。書き直しても結果が変わらないようにしましょう。
// function counter(num) {
//     //let i = 0;
//     // while (i < num) {
//     //     console.log(i);
//     //     i++;
//     // }

//     for (let i = 0; i < num; i++) {
//         console.log(i);
//     }
// }

// counter(10);

//関数 printArray を宣言してください。配列を 1 つ引数にとり、そのすべての要素を 1 つずつコンソールに表示させてください。テストの際には、配列に少なくとも 5 つの要素を入れて、関数がうまく動くか確認しましょう。
// function printArray(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         console.log(arr[i]);
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c", "d", "e"];

// printArray(arr2);

//関数 addOne を宣言してください。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を要素として持つ配列
**/
// function addOne(arr) {

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {

//         result.push((arr[i] + 1));

//     }
//     return result;
// }


// const array1 = [1, 2, 3, 4];

// // function が動作するかテストする
// test(addOne(array1), [2, 3, 4, 5]);
// // 元の配列が変更されていないことを確認する
// test(array1, [1, 2, 3, 4]);

// let index = 0;
// while (index <= 4) {
//     console.log("hello!");
//     index++;
// }
// for (let index = 0; index <= 4; index++) {
//     console.log("hello");
// }
// const array = [a, b, c, d, e];
// for (let i = 0; i < array.length - 1; i++) {
//     console.log("Value:" + i, "Index" + i);
// }
// function test(actual, expected) {

// /**
//  * @param {number} start
//  * @param {number} end
//  * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
//  */
// function createRange(number1, number2) {
//     const result = [];
//     for (let i = number1; i <= number2; i++) {
//         result.push(i);
//     }
//     return result;
// }
// test(createRange(4, 6), [4, 5, 6]);
// test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);
// -2
// function printCars1() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     let i = 0;
//     while (i < cars.length) {
//         console.log(cars[i]);
//         i++;
//     }
// }
// printCars1();
// function printCars2() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     for (const element of cars) {
//         console.log(element);
//     }
// }
// printCars2();
// function printCars3() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
//     }
// }
// printCars3();
// const commands = ["Print me last", "Print me second", "Print me first"];
// function decrement(list) {
//     for (let i = list.length - 1; i >= 0; i--) {
//         console.log(list[i]);
//     }
// }
// // //テストケース:
// decrement(commands);
// // // "Print me first"
// // // "Print me second"
// // // "Print me last"
// function decrement2(list) {
//     let i = list.length - 1;
//     while (i >= 0) {
//         console.log(list[i]);
//         i--;
//     }
// }
// // //テストケース:
// decrement2(commands);
// // // "Print me first"
// // // "Print me second"
// // // "Print me last"
// /**
//  * @param {number} start
//  * @param {number} end
//  * @param {number} step
//  * @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた配列。
//  */
// // // ここにコードを書きましょう
// // function createRangeBySteps(num1, num2, step){
// const result = [];
// for (let i = num1; i <= num2; i = i + step) {//i+=
//     result.push(i);
// }
// return result;
// }
// test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
// test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);
// ///**
// /* @param {Array<number>} ???
// * @param {Array<number>} ???
// * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
// */
// // ここにコードを書きましょう
// function addTogether(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }
// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]); let index = 0;
// while (index <= 4) {
//     console.log("hello!");
//     index++;
// }
// for (let index = 0; index <= 4; index++) {
//     console.log("hello");
// }
// const array = [a, b, c, d, e];
// for (let i = 0; i < array.length - 1; i++) {
//     console.log("Value:" + i, "Index" + i);
// }

// /**
//  * @param {number} start
//  * @param {number} end
//  * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
//  */
// function createRange(number1, number2) {
//     const result = [];
//     for (let i = number1; i <= number2; i++) {
//         result.push(i);
//     }
//     return result;
// }
// test(createRange(4, 6), [4, 5, 6]);
// test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);
// -2
// function printCars1() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     let i = 0;
//     while (i < cars.length) {
//         console.log(cars[i]);
//         i++;
//     }
// }
// printCars1();
// function printCars2() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     for (const element of cars) {
//         console.log(element);
//     }
// }
// printCars2();
// function printCars3() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
//     }
// }
// printCars3();
// const commands = ["Print me last", "Print me second", "Print me first"];
// function decrement(list) {
//     for (let i = list.length - 1; i >= 0; i--) {
//         console.log(list[i]);
//     }
// }
// // //テストケース:
// decrement(commands);
// // // "Print me first"
// // // "Print me second"
// // // "Print me last"
// function decrement2(list) {
//     let i = list.length - 1;
//     while (i >= 0) {
//         console.log(list[i]);
//         i--;
//     }
// }
// // //テストケース:
// decrement2(commands);
// // // "Print me first"
// // // "Print me second"
// // // "Print me last"
// /**
//  * @param {number} start
//  * @param {number} end
//  * @param {number} step
//  * @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた配列。
//  */
// // // ここにコードを書きましょう
// // function createRangeBySteps(num1, num2, step){
// const result = [];
// for (let i = num1; i <= num2; i = i + step) {//i+=
//     result.push(i);
// }
// return result;
// }
// test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
// test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);
// ///**
// /* @param {Array<number>} ???
// * @param {Array<number>} ???
// * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
// */
// // ここにコードを書きましょう
// function addTogether(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }
// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

/**
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
// function addTogether(arr1, arr2) {

//     const result = [];

//     if (arr1.length <= arr2.length) {

//         for (let i = 0; i < arr1.length; i++) {
//             result.push(arr1[i] + arr2[i]);
//         }
//         for (let i = arr1.length; i < arr2.length; i++) {
//             result.push(arr2[i]);
//         }
//     } else {

//         for (let i = 0; i < arr2.length; i++) {
//             result.push(arr1[i] + arr2[i]);
//         }
//         for (let i = arr2.length; i < arr1.length; i++) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// }
// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);
// test(addTogether([1, 2, 3], [7, 8, 9, 10, 11, 12]), [8, 10, 12, 10, 11, 12]);
// test(addTogether([7, 8, 9, 10, 11, 12], [1, 2, 3]), [8, 10, 12, 10, 11, 12]);
// test(addTogether([1], [4, 5, 6]), [5, 5, 6]);

//応用
//1
//関数 unique を宣言してください。引数として配列を 1 つとり、重複していない値のみが入った配列を返してください。
//未完成、最後の文字の評価ができていない！
/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 重複していない値のみが入った配列
 */
// function unique(array) {

//     const retArray = [];
//     let flg = 1;

//     for (let i = 0; i < array.length - 1; i++) {

//         for (let j = i + 1; j < array.length; j++) {

//             console.log("array[i]", array[i]);
//             console.log("array[j]", array[j]);
//             console.log("-----");

//             if (array[i] === array[j]) {

//                 flg = flg * 0;

//             } else {
//                 flg = flg * 1;
//             }

//         }
//         console.log("flg", flg);
//         if (flg === 1) {
//             retArray.push(array[i]);
//             console.log(retArray);

//         }
//         flg = 1;

//     }
//     return retArray;

// }

// //test(unique([1, 1, 1, 1, 1]), []);
// test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);

//2
//関数 sum を宣言してください。不特定の数の引数を取り、すべての引数の合計を返してください。
//ヒント：　この問題を解くには、スプレッド構文(spread syntax) について調べる必要があるかもしれません。
/**
 * @param {...number} ???
 * @returns {number} 引数の合計値
 */
// function sum(...numbers) {

//     let retNum = 0;

//     for (let element of numbers) {

//         retNum += element;

//     }
//     return retNum;

// }

// test(sum(1), 1);
// test(sum(1, 1, 1, 1, 1), 5);
// test(sum(1, 2, 3, 4, 5), 15);

//3
//関数 zip を宣言してください。不特定の数の配列を引数として取り、各配列の値が全部入った配列を返してください。

/**
 * @param {...<Array<any>} ???
 * @returns {Array<any>} 与えられた配列内のすべての値を持つ配列
 */
// function zip(...array) {

//     let retArray = [];

//     for (const element of array) {

//         for (let i = 0; i < element.length; i++) {

//             retArray.push(element[i]);

//         }
//     }

//     return retArray;
// }


// test(zip([1], [2], [3], [4]), [1, 2, 3, 4]);
// test(zip([1, 2, 3], [4, 5], [1], [4]), [1, 2, 3, 4, 5, 1, 4]);


/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 重複していない値のみが入った配列
 */
// function unique(array) {

//     const retArray = [];
//     let tempArray = array.slice();

//     for (let i = 0; i < array.length; i++) {

//         //自分自身は一旦削除
//         tempArray.splice(i, 1);

//         //自分自身が残った配列の中にあるかチェック
//         if (!tempArray.includes(array[i])) {
//             retArray.push(array[i]);
//         }
//         //配列の初期化(array)
//         tempArray = array.slice();
//     }
//     return retArray;
// }

// test(unique([1, 1, 1, 1, 1]), []);
// test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);

// ナイトメア問題 😈
// この演習は、非常に難解ですが、とてもいい練習になります。かなり時間がかかるつもりで、じっくり取り組んでください。
// パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。到着したすべてのゲストに新しいゲストを紹介する関数、 getIntroductions を宣言してください。
//1
/**
 * @param {number} ??? - ゲストの数
 * @returns {Array<string>} 到着するゲストへの挨拶
 */
function getIntroductions() {





}


test(getIntroductions(1), ["welcome 1"]);
test(getIntroductions(2), ["welcome 1", "welcome 2, meet 1"]);
test(getIntroductions(5), [
    "welcome 1",
    "welcome 2, meet 1",
    "welcome 3, meet 1 and 2",
    "welcome 4, meet 1, 2 and 3",
    "welcome 5, meet 1, 2, 3 and 4",
]);

