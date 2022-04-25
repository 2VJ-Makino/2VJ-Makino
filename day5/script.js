'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト部分を関数化 削除しない
let actual;
let expected;
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




//ウオームアップ

//以下のコードの誤りを修正してください。

// function isHot( temperature ) {
//   if ( temperature > 30 ) {
//       return "It's hot!";
//   } else {
//       return "It's not hot.";
//   }
// }
// console.log( isHot( 31 ));  // "It's hot!" を表示
// console.log( isHot( 2 ));   // "It's not hot." を表示
// console.log( isHot( 30 ));  // "It's not hot." を表示

// // 以下も同様に修正しましょう。

// function getTypeOfSchool( age ) {
//   if ( age  < 6 ){
//       return "kindergarten";
//   } else if ( age >= 6 && age < 13 ) {
//       return "elementary school";
//   } else if ( age >= 13 && age < 16 ) {
//       return "junior high school";
//   } else if ( age >= 16 && age < 19 ) {
//       return "high school";
//   } else {
//       return "after high school";
//   }
// }
// console.log(getTypeOfSchool( 3 ));  // "kindergarten" を表示
// console.log(getTypeOfSchool( 8 ));  // "elementary school" を表示
// console.log(getTypeOfSchool( 13 )); // "junior high school" を表示
// console.log(getTypeOfSchool( 16 )); // "high school" を表示
// console.log(getTypeOfSchool( 30 )); // "after high school" を表示

//tdd
//おさらい
// function addTen( num ) {

//     return num + 5;
// }

// let actual = addTen( 1 );
// let expected = 11;

// if( actual === expected ) {
//     console.log( 'Yay! Test PASSED.' );
// } else {
//     console.error( 'Test FAILED. Keep trying!' );
//     console.log( '    actual: ', actual );
//     console.log( '  expected: ', expected );
//     console.trace();
//}

//基礎演習
//


// let expected;
// let actual;

// /**
//  * @param {string} firstName - 下の名前
//  * @param {string} lastName - 苗字
//  * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
//  */
// function getFullName(firstName, lastName) {
//     return firstName +" "+ lastName;
//   }
  
//   actual = getFullName("Ken", "Watanabe");
//   expected = "Ken Watanabe";
  
//   if (actual === expected) {
//     console.log("Test PASSED!");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//   }


// let expected;
// let actual;

//   /**
//  * @param {string} name - 人の名前
//  * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありならtrue、なしならfalse）
//  * @returns {string} 与えられた人の名前と敬称が入った挨拶文
//  */
// function simpleGreeting(name, isFormal) {
//     // ここにコードを書きましょう
//     if( isFormal === true ) {
//         return "Hello, " + name + "-san.";
//     }
//     else if ( isFormal === false ){
//         return "Hello, " + name + ".";
//     }
//   }
  
//   actual = simpleGreeting("Amy", true);
//   expected = "Hello, Amy-san.";
  
//   if (actual === expected) {
//     console.log("Test PASSED!");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//   }
  
//   actual = simpleGreeting("Matt", false);
//   expected = "Hello, Matt.";
  
//   if (actual === expected) {
//     console.log("Test PASSED!");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//   }

//関数 isGreaterThan を宣言してください。

// let expected;
// let actual;

// /**
//  * @param {number} num1 - 1 番目の数字
//  * @param {number} num2 - 2 番目の数字
//  * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
//  */
// // 関数を宣言しましょう
// function isGreaterThan( num1, num2 ){

//         return num1 > num2;
// }


// actual = isGreaterThan(5, 4);
// expected = true;

// if (actual === expected) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }

// actual = isGreaterThan(3, 4);
// expected = false;

// if (actual === expected) {
//   console.log("Test PASSED!");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.group("Result:");
//   console.log("  actual:", actual);
//   console.log("expected:", expected);
//   console.groupEnd();
// }


//No4
//ウオームアップ

// let expected;
// let actual;

// //  * @param {number} number - 1 番目の数字
// //  * @returns {boolean} 与えられた 数字が 3の倍数かどうか?
// function isMultipleOfThree( number ) {

//     return (number % 3 ) === 0;

// }

// actual = isMultipleOfThree( 5 );
// expected = true;

// if (actual === expected) {
//     console.log("Test PASSED!");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

// // テスト
// // console.log( isMultipleOfThree( 6 ));   // => true
// // console.log( isMultipleOfThree( 10 ));  // => false

// /**
//  * @param {"+"|"-"|"*"|"/"|"**"|"%"} calc - 使用する算術演算子を表す文字列
//  * @param {number} num1 - 1 番目の被演算子
//  * @param {number} num2 - 2 番目の被演算子
//  * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
//  */
// // 関数を定義しましょう
// function operate( calc, num1, num2 ){

//     if( calc === "+" ){

//         return num1 + num2;

//     } else if( calc === "-" ){

//         return num1 - num2;

//     } else if( calc === "*" ){

//         return num1 * num2;

//     } else if( calc === "/" ){

//         return num1 / num2;

//     } else if( calc === "**" ){

//         return num1 ** num2;

//     } else if( calc === "%" ){

//         return num1 % num2;

//     } else {

//         return "算術演算子を入力してください";
//     }
// }

// let actual;
// let expected;

// actual = operate( "+", 1, 2 );
// expected = 3;
// testFunction( actual, expected );

// actual = operate( "-", 100, 33 );
// expected = 67;
// testFunction( actual, expected );

// actual = operate( "/", 100, 20 );
// expected = 5;
// testFunction( actual, expected );

// actual = operate( "%", 10, 3 );
// expected = 1;
// testFunction( actual, expected );

// actual = operate( "**", 2, 3 );
// expected = 8;
// testFunction( actual, expected );

// actual = operate( "@", 2, 3 );
// expected = "算術演算子を入力してください";
// testFunction( actual, expected );


//No6
// 英語では、虹色は以下の７色で表現されます。これを念頭に次の問題に取り組みましょう。
// red
// orange
// yellow
// green
// blue
// indigo
// violet
// 関数 isRainbowColor を宣言してください。

// /**
//  * @param {string} color - チェックしたい色の名前
//  * @returns {boolean} 与えられた色が虹色に含まれているかどうか
//  */
// function isRainbowColor( color ){
    
//     if( color === "red"
//         || color === "orange"
//         || color === "yellow"
//         || color === "green"
//         || color === "blue"
//         || color === "indigo"
//         || color === "violet" ){
//         return true;
//     } else {
//         return false;
//     }
// }

// actual = isRainbowColor( "red" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "orange" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "yellow" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "green" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "blue" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "indigo" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor( "violet" );
// expected = true;
// testFunction( actual, expected );

// actual = isRainbowColor("rEd");
// expected = false;
// testFunction( actual, expected );

// actual = isRainbowColor("Brown");
// expected = false;
// testFunction( actual, expected );

//中級演習
//1
// /**
//  * @param {any} checkText - チェックする値
//  * @returns {string} 与えられた引数のデータ型を表すわかりやすいメッセージ
//  */
// function typeOfFriendly( checkText ){

//     let dataType = typeof( checkText );

//     if( dataType == "string" ){

//         return "与えられた引数は string (文字列) です。";

//     } else if ( dataType == "number" ){

//         return "与えられた引数は number (数値) です。";

//     } else if ( dataType == "boolean" ){

//         return "与えられた引数は boolean (真偽) です。";

//     } else{

//         return "与えられた引数は undefne (未定義) です。";
//     }
// }

// actual = typeOfFriendly("Hello");
// expected = "与えられた引数は string (文字列) です。";
// testFunction( actual, expected );

// actual = typeOfFriendly(5);
// expected = "与えられた引数は number (数値) です。";
// testFunction( actual, expected );

// actual = typeOfFriendly( false );
// expected = "与えられた引数は boolean (真偽) です。";
// testFunction( actual, expected );

// actual = typeOfFriendly(  );
// expected = "与えられた引数は undefne (未定義) です。";
// testFunction( actual, expected );

// //2
// //関数 compare を宣言してください。
// /**
//  * @param {"=="|"==="|"<"|"<="|">"|">="} ??? - 使用したい比較演算子
//  * @param {number} ??? - 1 番目の被演算子
//  * @param {number} ??? - 2 番目の被演算子
//  * @returns {boolean} 与えられた演算子を被演算子と組み合わせて比較した結果
//  */
// function compare( calc, num1, num2 ){
   
//     if( calc === "==" ){
        
//         return ( num1 == num2 );

//     } else if ( calc === "===" ){

//         return ( num1 === num2 );

//     } else if ( calc === "<" ){

//         return ( num1 < num2 );

//     } else if ( calc === "<=" ){

//         return ( num1 <= num2 );

//     } else if ( calc === ">" ){

//         return ( num1 > num2 );

//     } else if ( calc === ">=" ){

//         return ( num1 >= num2 );

//     } else{

//         console.log("比較演算子を選択してください");
//         return "比較演算子を選択してください";
        
//     }
// }

// actual = compare("===", 1, 1);
// expected = true;
// testFunction( actual, expected );

// actual = compare("===", 1, "1");
// expected = false;
// testFunction( actual, expected );

// actual = compare("==", 1, "1");
// expected = true;
// testFunction( actual, expected );

// actual = compare("+", 1, "1");
// expected = "比較演算子を選択してください";
// testFunction( actual, expected );

//応用問題
//1
//関数 concatenateNumbers を宣言してください。
// /**
//  * @param {number} ??? - 1 番目の数値
//  * @param {number} [???] - 2 番目の数値 (任意)
//  * @param {number} [???] - 3 番目の数値 (任意)
//  * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
//  */
// // ここにコードを書きましょう
// function concatenateNumbers( ...number ){

//     let retString = ""; //結合文字列の戻り値

//     for( let i = 0; i < number.length; i++ ){

//         retString += number[i].toString();

//     }
//     //console.log ( retString );
//     //console.log ( typeof(retString) );
//     return retString;
// }

// actual = concatenateNumbers( 7 );
// expected = "7";
// testFunction( actual, expected );

// actual = concatenateNumbers( 7, 9 );
// expected = "79";
// testFunction( actual, expected );

// actual = concatenateNumbers( 7, 9, 10 );
// expected = "7910";
// testFunction( actual, expected );

// actual = concatenateNumbers( 7, 9, 10, 300 );
// expected = "7910300";
// testFunction( actual, expected );

//2
//関数 halfLife を宣言してください。
// /**
//  * @param {number} ??? - 初めの数量
//  * @param {number} ??? - 半減期（数量が半分になるまでの時間）
//  * @param {number} ??? - 経過時間
//  * @returns {number} 与えられた時間が経過したあとに残っている数量
//  */
// function halfLife( initVolume, halfTime, elaspedTime ){

//     console.log(initVolume * ( 0.5 ** ( elaspedTime / halfTime )));
//     return initVolume * ( 0.5 ** ( elaspedTime / halfTime ));
// }

// actual = halfLife( 1, 1, 1 );
// expected = 1 / 2;
// testFunction( actual, expected );

// actual = halfLife( 8, 4, 2 );
// expected = 4 * Math.SQRT2;
// testFunction( actual, expected );

// actual = halfLife( 2, 2, 4 );
// expected = 1 / 2;
// testFunction( actual, expected );

//3
//関数 invertCase を宣言してください。
/**
 * @param {string} ??? - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
 */
// function invertCase( string ){

//     let arr = Array.from( string );                     //一旦文字列を配列に格納
//     let retArr = "";                                    //戻り値の文字列

//     //配列の個数分ループ
//     for( let i = 0; i < arr.length; i++ ){

//         let temp = arr[i].codePointAt( 0 );             //ASCIIコードに変更

//         //アルファベットかつ大文字の場合
//         if( temp >= 65 && temp <= 90 ){
//             temp += 32;                                 //小文字に変換(ASCIIコード+32で小文字に変換)
//             retArr += String.fromCodePoint( temp );     //文字列に追加  

//         //アルファベットかつ小文字の場合
//         } else if( temp >= 97 && temp <= 122 ){
//             temp -= 32;                                 //大文字に変換(ASCIIコード-32で大文字に変換)
//             retArr += String.fromCodePoint( temp )      //文字列に追加

//         //それ以外の場合
//         } else{
//             retArr += String.fromCodePoint( temp );     //そのまま変換、文字列に追加
//         }
//     }
//     return retArr;
// }

// actual = invertCase("I hope you are having a nice day");
// expected = "i HOPE YOU ARE HAVING A NICE DAY";
// testFunction( actual, expected );


// actual = invertCase("My daughter is 5 years old");
// expected = "mY DAUGHTER IS 5 YEARS OLD";
// testFunction( actual, expected );

// actual = invertCase("Z z A a 12345");
// expected = "z Z a A 12345";
// testFunction( actual, expected );

