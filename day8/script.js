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

//関数 sumArray を宣言してください。
/**
 * @param {Array<number>} numbers - 数値型の要素を持つ配列

 * @returns {number} 与えられた配列のすべての数字の合計
 */

// let actual;
// let expected;

// function sumArray(numbers) {

//     let result = 0;

//     for (const sum of numbers) {

//         result = result + sum;

//     }

//     return result;

// }

// actual = sumArray([1, 2, 3, 4]);
// expected = 10;

// if (actual === expected) {
//     console.log("Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }


//関数 productArray を宣言してください。

/**
 * @param {Array<number>} numbers - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */
// function productArray(numbers) {

//     let result = 1;

//     for (const product of numbers) {

//         result = result * product;
//         // result = result * numbers.shift;

//     }

//     return result;

// }

// actual = productArray([1, 2, 3, 4]);
// expected = 24;

// if (actual === expected) {
//     console.log("Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

//3
//関数 hasFun を宣言してください。

/**
 * @param {Array<any>} wards
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
// function hasFun(wards) {

//     let result = true;

//     for (const word of wards) {

//         if (word === "fun") {

//             result = true;

//         } else {
//             result = false;
//         }

//     }

//     return result;

// }

// actual = hasFun(["whatever", 2, false, "fun", "hello"]);
// expected = true;

// if (actual === expected) {
//     console.log("Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

// actual = hasFun(["whatever", 2, false, "run", "hello"]);
// expected = false;

// if (actual === expected) {
//     console.log("Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

//3
//関数 containsOnlyBooleans を宣言してください。

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
// function containsOnlyBooleans(array) {

//     let result = true;

//     for (const element of array) {
//         if (typeof element !== "boolean") {
//             result *= 0;

//         }
//     }
//     return Boolean(result);
// }
// actual = containsOnlyBooleans([true, false, true, false, false]);
// expected = true;
// testFunction(actual, expected);

// actual = containsOnlyBooleans([true, false, true, false, "not a boolean"]);
// expected = false;
// testFunction(actual, expected);


//関数 concatenate を宣言してください。ビルトインの concat メソッドは使わないでください。
//5
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
// function concatenate(array1, array2) {

//     let retArray = Array.from(array1);

//     for (const element of array2) {
//         retArray.push(element);
//     }
//     return retArray;
// }

// actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
// expected = ["eeny", "meeny", "miny", "moe"];
// testarryFunction(actual, expected);

// actual = concatenate(["eeny", "meeny"], ["moe"]);
// expected = ["eeny", "meeny", "moe"];
// testarryFunction(actual, expected);

//6
//関数 getEvenNumbers を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */
// function getEvenNumbers(array) {

//     let retArray = [];

//     for (const element of array) {
//         if (element % 2 === 0) {
//             retArray.push(element);
//         }
//     }
//     return retArray;
// }
// actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// expected = [2, 4, 6, 8];
// testarryFunction(actual, expected);

//7
//関数 getMultipliedArray を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */
// function getMultipliedArray(array, number) {

//     let retArray = [];

//     for (const element of array) {
//         retArray.push(element * number);
//     }
//     return retArray;
// }

// actual = getMultipliedArray([1, 2, 3], 6);
// expected = [6, 12, 18];
// testarryFunction(actual, expected);

//中級1
//関数 isSorted を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */
// function isSorted(array) {

//     let ret = 1;

//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] < array[i + 1]) {
//             ret *= 1;
//         }
//         else {
//             return false;
//         }
//     }
//     return Boolean(ret);
// }

// actual = isSorted([-1, 2, 3]);
// expected = true;
// testFunction(actual, expected)

// actual = isSorted([3, 2, 3]);
// expected = false;
// testFunction(actual, expected)

//2
//関数 countOccurrences を宣言してください。

/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */
// function countOccurrences(array, value) {

//     let count = 0;

//     for (const element of array) {

//         if (element === value) {
//             count++;
//         }
//     }
//     return count;
// }

// actual = countOccurrences([1, 2, 3], 2);
// expected = 1;
// testFunction(actual, expected)

// actual = countOccurrences([1, 2, 2], 2);
// expected = 2;
// testFunction(actual, expected)


// actual = countOccurrences([1, 2, "elephant"], "elephant");
// expected = 1;
// testFunction(actual, expected)

//3
//関数 reverse を宣言してください。ビルトイン・メソッドの reverse は使わないでください。

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
// function reverse(array) {

//     let retArray = [];

//     for (let i = 0; i < array.length; i++) {
//         retArray.push(array[array.length - i - 1]);
//     }
//     return retArray;

// }

// const arrayToReverse = ["eeny", "meeny", "miny", "moe"];
// actual = reverse(arrayToReverse);
// expected = ["moe", "miny", "meeny", "eeny"];
// testarryFunction(actual, expected);

// // 元の配列が変更されていないことを確認してください。
// actual = arrayToReverse;
// expected = ["eeny", "meeny", "miny", "moe"];
// testarryFunction(actual, expected);


//4
//関数 getOperatedArray を宣言してください。
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */
// function getOperatedArray(array, operator, number) {

//     let retArray = [];

//     for (let element of array) {

//         if (operator == "+") {
//             retArray.push(element + number);
//         } else if (operator == "-") {
//             retArray.push(element - number);
//         } else if (operator == "*") {
//             retArray.push(element * number);
//         } else if (operator == "/") {
//             retArray.push(element / number);
//         } else if (operator == "**") {
//             retArray.push(element ** number);
//         } else if (operator == "%") {
//             retArray.push(element % number);
//         } else {
//             //NOP
//         }
//     }
//     return retArray;
// }

//+の場合
// if (operator == "+") {
//     retArray.push(element + number);
// } else if (operator == "-") {   //-の場合ってここに書く？
//     retArray.push(element - number);
// }

// //+の場合
// if (operator == "+") {
//     retArray.push(element + number);
// }
// //-の場合
// else if (operator == "-") {
//     retArray.push(element - number);
// }


// actual = getOperatedArray([2, 3, 4], "**", 2);
// expected = [4, 9, 16];
// testarryFunction(actual, expected);

// actual = getOperatedArray([1, 2, 3], "+", 5);
// expected = [6, 7, 8];
// testarryFunction(actual, expected);

// actual = getOperatedArray([9, 6, 3], "/", 3);
// expected = [3, 2, 1];
// testarryFunction(actual, expected);

// actual = getOperatedArray([9, 6, 4], "%", 4);
// expected = [1, 2, 0];
// testarryFunction(actual, expected);

//応用問題
//1
//関数 callADoctor を宣言してください。単数形 と 複数形 では名詞と動詞の関係が変化することに注意してください。
//例えば My head hurts! は動詞に s が必要ですが、 My shoulders hurt! には必要ありません。

/**
 * @param {Array<string>} ??? - 「痛む場所」が入った配列
 * @returns {string} お医者さんに診てもらうときに言うセリフ
 */
// function callADoctor(array) {

//     let retString = "Doctor, doctor! My ";

//     //配列の要素が1つの場合
//     if (array.length === 1) {
//         //要素が単数の場合
//         if (array[0].slice(-1) !== "s") {
//             return retString + array[0] + " hurts!";
//         }
//         //複数の場合
//         else {
//             return retString + array[0] + " hurt!";
//         }
//     }
//     //配列の要素が複数の場合
//     else {
//         console.log(array.length);
//         //要素を連結する
//         for (let i = 0; i < array.length - 1; i++) {
//             retString = retString + array[i] + ", ";
//             console.log(retString);
//         }
//         retString = retString + "and " + array[array.length - 1] + " hurt!";
//         return retString;

//     }
// }

// test_a(callADoctor(["head"]), "Doctor, doctor! My head hurts!");
// test_a(callADoctor(["shoulders"]), "Doctor, doctor! My shoulders hurt!");
// test_a(callADoctor(["head", "shoulders", "knees", "toes"]), "Doctor, doctor! My head, shoulders, knees, and toes hurt!");


//2.関数 deepCount を宣言してください。
/**
 * @param {Array<any>} ???
 * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、配列内の各要素も一つ一つカウントすること。
 */

// function deepCount(array) {

//     const stack = [...array];
//     const res = [];
//     let i = 1;

//     console.log("array length", stack.length);
//     console.log("stack", stack);
//     console.log("---");

//     while (stack.length) {
//         //stackの最後の要素を取り出しnextに格納(stackはnextを取り出した残り入る)
//         console.log(i);
//         const next = stack.pop();
//         console.log("stack", stack);
//         console.log("next", next);
//         console.log("---");
//         //配列かどうかチェック
//         if (Array.isArray(next)) {
//             // push back array items, won't modify the original input
//             console.log(next, "=array");
//             stack.push(...next);
//             console.log("stack=", stack);
//             console.log("push next=", next);
//         } else {
//             console.log(next, "=not array");
//             res.push(next);
//             //console.log("res=", res);
//         }
//         console.log("----------")
//         console.log("res", res);
//         i++;
//     }
//     // reverse to restore input order
//     return res.reverse().length;
// }


// test_a(deepCount([1]), 1);
// test_a(deepCount([1, 3]), 2);
// test_a(deepCount([1, 3, [2, 4]]), 4);
// test_a(deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]), 6);


//ナイトメア問題 😈
//この問題は難解なので、心して臨みましょう。
//関数 sort を宣言してください。ビルトインの sort メソッドを使ってはいけません。
//注目： 配列を並び替える方法は たくさん あります。好きな方法を選んでみましょう！

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
// function sort(array, typeOfSort) {

//     let temp = 0;
//     let max = 0;
//     let index = 0;

//     //バブルソート
//     if (typeOfSort === "bubble") {
//         for (let i = 0; i <= array.length; i++) {
//             for (let j = array.length - 1; j >= 1; j--) {
//                 if (array[j] < array[j - 1]) {
//                     temp = array[j - 1];
//                     array[j - 1] = array[j];
//                     array[j] = temp;
//                 }
//             }
//         }
//         return array;
//     }

//     //選択ソート
//     else if (typeOfSort === "selection") {
//         for (let i = 0; i <= array.length - 2; i++) {
//             max = array[i];
//             for (let j = i + 1; j < array.length; j++) {
//                 if (array[i] < array[j]) {
//                     console.log("in");
//                     if (max < array[j]) {
//                         max = array[j];
//                         index = j;
//                     }
//                 }
//             }
//             temp = array[i];
//             array[i] = max;
//             array[index] = temp;
//         }
//         return array.reverse();
//     }
// }
// test_a(sort([5, 4, 6, 7, 2], "bubble"), [2, 4, 5, 6, 7]);
// test_a(sort([5, 4, 6, 7, 2], "selection"), [2, 4, 5, 6, 7]);

function flattenDeep(array) {

    const stack = [...array];
    const res = [];

    while (stack.length) {
        //stackの最後の要素を取り出しnextに格納(stackはnextを取り出した残り入る)
        const next = stack.pop();
        //配列かどうかチェック
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    //並並び替え
    return res.reverse()
}

test_a(flattenDeep([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
test_a(flattenDeep([[1], [2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
test_a(flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
