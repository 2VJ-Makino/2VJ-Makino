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


// 下にクロージャが作られています。クロージャのスコープ内にあるのは、どの変数でしょうか。
// しっかりとコードを読んだら、関数宣言の下にあるコメントを 1 行ずつ外して、コンソールの表示を確認してください。
// 各行のコードが何をしているか分かりますか。疑問があるときは、必ず質問してください。🙋

// function createPasswordProtectedAccount(userChosenPassword) {
//     const savedPassword = userChosenPassword;
//     function checkPassword(passwordEntered) {
//         if (savedPassword === passwordEntered) {
//             console.log("正しいパスワードです。アクセスを許可します。");
//         } else {
//             console.log("パスワードが間違っています。アクセスできません。");
//         }
//     }
//     return checkPassword;
// }
// const account = createPasswordProtectedAccount("Test1234"); // 引数に初期パスワードを入れる。
// account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
// account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"

//講義の中で勉強したコードですが、何も見ずに自分で書いてみましょう。
//関数 add を宣言し、引数は x とします。add は、引数 y を受け取る関数を返します。
//内部関数は、x と y の和を返します。

/**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
//  */
// function add(x) {
//     return y => x + y;
// }

// const addFive = add(5);
// test(addFive(1), 6);


//関数 createDonationAccount を呼び出し、返り値を変数に代入しましょう。
//正しく書けていれば、“寄付受付口座が作成されました。” とコンソールに表示されるはずです。
//次に、変数に代入された関数を 3 回呼び出してみましょう。
//正しくできていれば、3 回目の実行で、コンソールに 2 と表示されるはずです。

// function createDonationAccount() {
//     let donations = 0;

//     function addDonation() {
//         console.log(donations);
//         donations += 1;
//     }
//     console.log("寄付受付口座が作成されました。");
//     return addDonation;
// }

// const donation = createDonationAccount();
// donation();
// donation();
// donation();

//講義の中で勉強したコードですが、何も見ずに自分で書いてみましょう。
//関数 add を宣言し、引数は x とします。
//add は、引数 y を受け取る関数を返します。
//内部関数は、x と y の和を返します。

// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
//  */
// // コードを書き始めましょう
// function add(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// const addFive = add(5);
// test(addFive(1), 6);

//次の関数は動作しますが、大きな問題があります。
//それは何でしょうか？

// function makeCounter() {
//     let counter = 0;
//     return function () {
//         counter += 1;
//         return counter;
//     };
// }

// const counterA = makeCounter();
// test(counterA(), 1);
// test(counterA(), 2);

// const counterB = makeCounter(); // 新しいカウンターを作りたい。
// test(counterB(), 1);
// test(counterB(), 2);

//引数に age をとる関数 createWebsiteAccount を宣言してください。
//呼び出されるたびに、age を 1 つ加算し、また、age が 13 歳以上なら true を返し、
//13 歳未満なら false を返す内部関数を作ります。

// /**
//  * @param {number} 年齢
//  * @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
//  */
// function createWebsiteAccount(number) {

//     return function () {
//         number++;
//         if (number >= 13) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// }


// const childAccount = createWebsiteAccount(10);
// test(childAccount(), false); // => false
// test(childAccount(), false); // => false
// test(childAccount(), true); // => true (今、子供は 13 歳です！)

// const adultAccount = createWebsiteAccount(33);
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)

//引数に x を取り、関数を返す product という関数を作成してください。
//内部関数は引数に y をとり、x と y の積を返します。

// /**
//  * @param {number} x
//  * @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
//  */
// function product(x) {
//     return y => x * y;
// }

// const product3 = product(3);

// test(product3(4), 12);
// test(product(4)(5), 20);

//引数に x を取り、関数を返す subtract という関数を作成してください。
//内部関数は引数に y をとり、x から y を引いた値を返します。

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
 */
function subtract(x) {
    return y => x - y;
}

const subtract5 = subtract(5);

test(subtract5(4), 1);
test(subtract(10)(8), 2);