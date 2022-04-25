'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト部分を関数化 削除しない
let actual;
let expected;

//配列以外のテスト関数
function testFunction( actual, expected ){
 
    if ( actual === expected ) {
        console.log( "Test PASSED!" );
    } else {
        console.error( "Test FAILED. Keep trying!" );
        console.group( "Result:" );
        console.log( "  actual:", actual );
        console.log( "expected:", expected );
        console.groupEnd();
      }
}

//配列用のテスト関数
function testarryFunction( actual, expected ){
    
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

// // //課題1
// // //greeting という名前の関数を作成し、引数に文字列型の値を 1 つ渡しましょう。渡された名前を使って挨拶文を返してください。テストも試してみましょう。
// function greeting( name ){

//   if ( typeof name !== "string" ){
//     return "Please Input name in String.";
//   }

//   return "Hello, " + name +"!";

// }

// //テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
// console.log(greeting(2)); // => "Please Input name in String.";


// //課題2
// //average という名前の関数を宣言してください。この関数は引数として数値型の値を 2 つ取り、その 2 つの数の平均を返します。テストを書くのを忘れずに！
// function average( num1, num2 ){

//   if ( typeof num1 !== "number" || typeof num2 !== "number" ){

//     return "引数には数値を入れてください";

//   }

//   return (num1 + num2) / 2;

// }

// actual = average(10, 20);
// expected = 15;
// testFunction( actual, expected );

// actual = average(1, 2);
// expected = 1.5;
// testFunction( actual, expected );

// actual = average(-1, -2);
// expected = -1.5;
// testFunction( actual, expected );

// actual = average(0, 0);
// expected = 0;
// testFunction( actual, expected );

// actual = average("1", 2);
// expected = "引数には数値を入れてください";
// testFunction( actual, expected );


// //課題3
// // 関数 describeTheWeather を宣言してください。

// // それぞれの季節には、適切な温度があります。

// // Spring --> warm
// // Summer --> hot
// // Fall --> cool
// // Winter --> cold
// //もし与えられた温度が適切であれば、The temperature is normal for the season. を返してください。もしそうでなければ、The temperature is unusual for the season. を返してください。

//  /**
//  * @param {"Spring"|"Summer"|"Fall"|"Winter"} season - 現在の季節
//  * @param {"warm"|"hot"|"cool"|"cold"} temp - 現在の気温
//  * @returns {"The temperature is normal for the season."|"The temperature is unusual for the season."|"Please Input season or temp in String."|"Please Input temp -> warm or hot or cool or cold."|"Please Input season-> Spring or Summer or Fall or Winter."} 季節や気温に応じて変わる、気候に関する説明とエラーメッセージ
//  */
// function describeTheWeather( season, temp ) {

//   if ( typeof season !== "string" || typeof temp !== "string"){
//     return "Please Input season or temp in String.";
//   }

//   if( season === "Spring" ){

//     if ( temp === "warm" ){
//       return "The temperature is normal for the season."
//     } else if( temp === "hot" || temp === "cool" || temp === "cold" ){
//       return "The temperature is unusual for the season."
//     } else{
//       return "Please Input temp -> warm or hot or cool or cold.";
//     }

//   } else if ( season === "Summer" ){
  
//     if ( temp === "hot" ){
//       return "The temperature is normal for the season."
//     } else if( temp === "warm" || temp === "cool" || temp === "cold" ){
//       return "The temperature is unusual for the season."
//     } else{
//       return "Please Input temp -> warm or hot or cool or cold.";
//     }
 
//   } else if ( season === "Fall" ){
  
//     if ( temp === "cool" ){
//       return "The temperature is normal for the season."
//     } else if( temp === "warm" || temp === "hot" || temp === "cold" ){
//       return "The temperature is unusual for the season."
//     } else{
//       return "Please Input temp -> warm or hot or cool or cold.";
//     }
  
//   } else if ( season === "Winter" ){
    
//     if ( temp === "cold" ){
//       return "The temperature is normal for the season."
//     } else if( temp === "warm" || temp === "hot" || temp === "cool" ){
//       return "The temperature is unusual for the season."
//     } else{
//       return "Please Input temp -> warm or hot or cool or cold.";
//     }

//   } else {

//     return "Please Input season-> Spring or Summer or Fall or Winter.";

//   }
// }


//リファクタリング
// function describeTheWeather( season, temp ) {

//     if ( typeof season !== "string" || typeof temp !== "string"){
//         return "Please Input season or temp in String.";
//     }
//     if ( season === "Spring" || season === "Summer" || season === "Fall" || season === "Winter" ){
//         if ( temp === "warm" || temp === "hot" || temp === "cool" || temp === "cold" ){
//             if( season === "Spring" ){
//                 if ( temp === "warm" ){   
//                     return "The temperature is normal for the season.";
//                 } else {
//                     return "The temperature is unusual for the season.";
//                 }
//             } else if ( season === "Summer" ){
//                 if ( temp === "hot" ){
//                     return "The temperature is normal for the season.";
//                 } else {
//                     return "The temperature is unusual for the season.";
//                 }
//             } else if ( season === "Fall" ){
//                 if ( temp === "cool" ){
//                     return "The temperature is normal for the season.";
//                 } else {
//                     return "The temperature is unusual for the season.";
//                 }
//             } else if ( season === "Winter" ){
//                 if ( temp === "cold" ){
//                     return "The temperature is normal for the season.";
//                 } else {
//                     return "The temperature is unusual for the season.";
//                 }
//             }
//         } else {
//             return "Please Input temp -> warm or hot or cool or cold.";
//         }
//     } else {    
//         return "Please Input season-> Spring or Summer or Fall or Winter.";
//     }
// }


// actual = describeTheWeather("Spring", "warm");
// expected = "The temperature is normal for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Spring", "cold");
// expected = "The temperature is unusual for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Summer", "hot");
// expected = "The temperature is normal for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Summer", "cold");
// expected = "The temperature is unusual for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Fall", "cool");
// expected = "The temperature is normal for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Fall", "hot");
// expected = "The temperature is unusual for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Winter", "cold");
// expected = "The temperature is normal for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Winter", "hot");
// expected = "The temperature is unusual for the season.";
// testFunction( actual, expected );

// actual = describeTheWeather("Summmmer", "hot");
// expected = "Please Input season-> Spring or Summer or Fall or Winter.";
// testFunction( actual, expected );

// actual = describeTheWeather("Summer", "hooooooooot");
// expected = "Please Input temp -> warm or hot or cool or cold.";
// testFunction( actual, expected );

// actual = describeTheWeather( 5, "hot");
// expected = "Please Input season or temp in String.";
// testFunction( actual, expected );

// actual = describeTheWeather( "Summer", 0);
// expected = "Please Input season or temp in String.";
// testFunction( actual, expected );

//基礎1
//関数 numberOfPeople を宣言してください。
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */
//  function numberOfPeople( arrayOfPeople ) {

//     return arrayOfPeople.length;

//  }
  
// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
// expected = 4;
// testFunction( actual, expected );

// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin", "Mike"]);
// expected = 5;
// testFunction( actual, expected );

// let students = ["Alex", "Beau", "Carlos", "Dustin", "Mike"];
// students.push( "AAA", "BBB", "CCC");
// actual = numberOfPeople( students );
// expected = 8;
// testFunction( actual, expected );

//基礎2
/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す
 */
//  function last( array ){

//     return array[array.length -1];
// }

// actual = last(["Alex", "Beau", "Carlos", "Dustin", "Mike"]);
// expected = "Mike";
// testFunction( actual, expected );

//基礎3
//ビルトインの .push メソッドの代わりになる関数 push を作ってみましょう！ビルトインの .push メソッドを使ってはいけません。

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
// function push( array, value ){

//     array[array.length] = value;
//     return array.length;

// }

// let array = [1, 2, 3, 4, 5];

// // 関数が正しい結果を返すことを確認する
// actual = push( array, 6 );
// expected = 6;
// testFunction( actual, expected );

// // 配列が正しく変更されていることを確認する
// actual = array;
// expected = [1, 2, 3, 4, 5, 6];
// testarryFunction( actual, expected );

//中級1
// 関数 hiInTheMiddle を宣言してください。Math.floor を使用する必要があるかもしれません。
// まず初めに、引数として受け取った配列の要素数が奇数かどうかを確認します(ヒント: .length が奇数かどうか)。配列の長さが奇数なら、真ん中の要素が何であろうと "hi" に置換し、配列の長さが偶数なら、何も変更せず、配列を返してください。

/**
 * @param {Array<any>} array - 配列
 * @returns {Array<any>} 配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
// function hiInTheMiddle( array ){

//     if( array.length %2 ){
//         array[Math.floor( array.length / 2)] = "hi";
//     }
//     return array;
// }

// actual = hiInTheMiddle([1, 2, 3, 4, 5, 6, 7, 8]);
// expected = [1, 2, 3, 4, 5, 6, 7, 8];
// testarryFunction( actual, expected );

// actual = hiInTheMiddle([1, 2, 3, 4, 5, 6, 7]);
// expected = [1, 2, 3, "hi", 5, 6, 7];
// testarryFunction( actual, expected );

// actual = hiInTheMiddle([1, 2, 3, 4, 5]);
// expected = [1, 2, "hi", 4, 5];
// testarryFunction( actual, expected );

// actual = hiInTheMiddle([1, 2, 3,]);
// expected = [1, "hi", 3];
// testarryFunction( actual, expected );

// actual = hiInTheMiddle([1, 2, 3, 4]);
// expected = [1, 2, 3, 4];
// testarryFunction( actual, expected );

//2
//関数 pop を宣言してください。与えられた配列から最後の要素を削除し、削除した値を返します。ただし、ビルトインの .pop メソッドを使用することはできません！ .splice メソッドの使用を検討してみてください。

/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を返す。
 */
// function pop( array ){

//     let lastElement = array[array.length - 1];
//     array.splice( array.length - 1, 1 );
//     return lastElement;
    
// }

// let array = [1, 2, 3, 4, 5, 100, "aaa"];
// actual = pop( array );
// expected = "aaa";
// testFunction( actual, expected );

// actual = array;
// expected = [1, 2, 3, 4, 5, 100];
// testarryFunction( actual, expected );

//3
//関数 unshift を宣言してください。与えらえた値を、与えらえた配列の先頭に 追加する 関数です。ただし、ビルトインの .unshift メソッドを使用することはできません！ ここでも .splice メソッドの使用を検討してみてください。

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の _先頭_ に追加する値
 * @returns {number} 処理後の配列の長さを返す。
 */
// function unshift( array, element ){

//     array.splice( 0, 0,  element );
//     return array.length;


// }

// let array = [1, 2, 3, 4, 6];
// actual = unshift( array, true );
// expected = 6;
// testFunction( actual, expected );


// actual = array;
// expected = [true, 1, 2, 3, 4, 6];
// testarryFunction( actual, expected );

//4
//関数 shift を宣言してください。shift は与えられた 配列 の先頭の値を削除し、削除された値を返します。ビルトインの .shift メソッドを使用してはいけません。

/**
 * @param {Array<any>} ??? - 配列
 * @returns {any} 与えられた配列の先頭の要素を返す。
 */
// function shift( array ){
   
//     let firstElement = array[0];
//     array.splice( 0, 1 );
//     return firstElement;

// }

// let array = ["a", 5, 1, 2, 3, 4];
// actual = shift( array );
// expected = "a";
// testFunction( actual, expected );

// actual = array;
// expected = [5, 1, 2, 3, 4];
// testarryFunction( actual, expected );


//応用
//1
//ビルトインの .length プロパティを使わないで、関数 numberOfPeople を書き直してください。
//関数 numberOfPeople を宣言してください。
/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */
// function numberOfPeople( arrayOfPeople ) {
    
//     let i = 0;

//     //無限ループで配列の先頭から要素の型チェック、"undefined"になったら抜ける
//     for( ;; ){
//         if( typeof arrayOfPeople[i] === "undefined" ){
//             break;
//         } else {
//             i++;
//         }
//     }
//     return i;

// }
  
// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
// expected = 4;
// testFunction( actual, expected );

// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin", "Mike"]);
// expected = 5;
// testFunction( actual, expected );

//2
//2つの配列が互いに逆順かどうかをチェックする関数 areReverses を宣言してください。
//これを機に、配列は、どのようなビルトイン・メソッドが利用できるのか調べてみましょう。
//この問題を解くのにぴったりなメソッドが見つかる かも しれませんよ😉

/**
 * @param {Array<any>} ??? - 1 番目の配列
 * @param {Array<any>} ??? - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
 */
// function areReverses( array1, array2 ){


//     if( array1.length !== array2.length ){
//         return "二つの配列の長さが異なります";
//     }

    //普通のやり方、要素を一つずつ比較するやり方
    // for( let i = 0; i < array1.length; i++ ){

    //     if ( array1[i] !== array2[array1.length - 1 - i] ){
    //         return false;
    //     }
    // }
    // return true;

    //array2を反転、要素を一つずつ比較するやり方    
    // let array3 = array2.reverse();

    // for( let i = 0; i < array1.length; i++ ){

    //     if ( array1[i] !== array3[i] ){
    //         return false;
    //     }
    // }
    // return true;

    //array2を反転、配列を比較するやり方    
//     let array3 = array2.reverse();
//     if (JSON.stringify( array1 ) !== JSON.stringify( array3 )) {
//         return false;
//     }
//     return true;
// }


// let array1 = [1, 2, 3, 4, 5];
// let array2 = [5, 4, 3, 2, 1];

// actual = areReverses(array1, array2);
// expected = true;
// testFunction( actual, expected );

// // 元の配列が変更されていないことを確認する
// actual = array1;
// expected = [1, 2, 3, 4, 5];
// testarryFunction( actual, expected );

// array1 = [1, 2, 3, 4, 5];
// array2 = [5, 4, 3, 2, 2];

// actual = areReverses(array1, array2);
// expected = false;
// testFunction( actual, expected );

// // 元の配列が変更されていないことを確認する
// actual = array1;
// expected = [1, 2, 3, 4, 5];
// testarryFunction( actual, expected );

//3
//関数 concat を宣言してください。ビルトインの .concat を使ってはいけません。

/**
 * @param {Array<any>} array1 - 1 番目の配列
 * @param {Array<any>} array2 - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
 */
function concat( array1, array2 ){

     if ( typeof array1 !== "object" || typeof array2 !== "object" ){
         return "配列を引数にしてください";
     }

    let array3 = array1.slice();    //値渡しであることに注意!(参照渡しだとarray1の値が変わる)
    //let array3 = array1;
    let j = 0;

    for( let i = array1.length; i < ( array1.length + array2.length) ; i++ ){
        array3[i] = array2[j];
        j++;
    }
    return array3;
}


let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = concat( array1, array2 );
expected = [1, 2, 3, 4, 4, 3, 2, 1];
testarryFunction( actual, expected );

// // 元の配列が変更されていないことを確認する
actual = array1;
expected = [1, 2, 3, 4];
testarryFunction( actual, expected );

actual = array2;
expected = [4, 3, 2, 1];
testarryFunction( actual, expected );

// array1 = 1;
// array2 = [4, 3, 2, 1];

// actual = concat( array1, array2 );
// expected = "配列を引数にしてください";
// testarryFunction( actual, expected );

//ビルトイン・メソッドにコールバック＊を渡す
//＊コールバックについては後のレッスンで詳しく取り上げますが、文字列や数値を引数に渡すように、関数を引数に渡すことです。

//1
//配列につかえる JavaScript のビルトイン・メソッドの一つ、 forEach を使用して、配列の各要素をコンソール上に表示してください。
//2
//forEach を使用して、配列の各要素に 2 を掛けた数値をコンソール上に表示してください。

// let array = [4, 3, 2, 1];
// array.forEach( function( element ){
//     console.log( element * 2 );
// });

//ナイトメア
//関数 sort を宣言してください。ビルトインの sort メソッドを使ってはいけません。
//注目： 配列を並び替える方法は たくさん あります。好きな方法を選んでみましょう！

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
// function sort( array ) {

//     if ( typeof array !== "object" ){
//         return "配列を引数にしてください";
//     }





// }

// let arrayToSort = [5, 4, 3, 2, 1];

// actual = sort( arrayToSort );
// expected = [1, 2, 3, 4, 5];

// // 正しい結果を返すことを確認する
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// // 元の配列が変更されていないことを確認する
// if (JSON.stringify(arrayToSort) === JSON.stringify([5, 4, 3, 2, 1])) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd("Result:");
// }

// ここにテストを書いてください
