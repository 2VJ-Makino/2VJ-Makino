'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト部分を関数化 削除しない
// let actual;
// let expected;
// function testFunction(actual, expected) {

//   if (actual === expected) {
//     console.log("Test PASSED!");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//   }
// }

//dig - tdd - next - warmup.ja.md
// // //ウオームアップ
// // /**
// //  * @param {number} num1 - 1 番目の数字
// //  * @param {number} num2 - 2 番目の数字
// //  * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
// //  */
// // function compareTwoNumbers( num1, num2 ){

// //     if( num1 === num2 ){
// //         return num1 + " は "+ num2 + " と等しい";
// //     }
// //     else if ( num1 < num2 ){
// //         return num1 + " は "+ num2 + " より小さい";
// //     }
// //     else{
// //         return num1 + " は "+ num2 + " より大きい";
// //     }
// // }

// // let actual = compareTwoNumbers(1, 1);
// // let expected = "1 は 1 と等しい";

// // if (actual === expected) {
// //   console.log("Yay! Test PASSED.");
// // } else {
// //   console.error("Test FAILED. Keep trying!");
// //   console.log("    actual: ", actual);
// //   console.log("  expected: ", expected);
// // }

// // actual = compareTwoNumbers(3, 4);
// // expected = "3 は 4 より小さい";

// // if (actual === expected) {
// //   console.log("Yay! Test PASSED.");
// // } else {
// //   console.error("Test FAILED. Keep trying!");
// //   console.log("    actual: ", actual);
// //   console.log("  expected: ", expected);
// // }

// // actual = compareTwoNumbers(4, 3);
// // expected = "4 は 3 より大きい";

// // if (actual === expected) {
// //   console.log("Yay! Test PASSED.");
// // } else {
// //   console.error("Test FAILED. Keep trying!");
// //   console.log("    actual: ", actual);
// //   console.log("  expected: ", expected);
// // }

// // function retComf( temp ){

// //     if( temp >= 20 && temp <= 26 ){
// //         return "It's comfortable!"
// //     }
// //     // else if ( temp < 20 || temp > 26 ){
// //     //     return "It's too hot/cold!";
// //     // }
// //     else{
// //         return "It's too hot/cold!";
// //     }
// // }
// // console.log( retComf (10));

//day7とあるが、これはday6の内容
//dig - conditionals - cont.ja.md
//基礎1と2
// /**
// //  * @param {number} ??? - 年齢
// //  * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
// //  */
//  function isTeenager(age) {

//     if( typeof age == "number" ){

//         return age >= 13 && age <= 19 ;

//     } else {

//         return "無効です！与えられた年齢は数字ではありません！";

//     }
//  }

//   let actual = isTeenager(3);
//   let expected = false;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = isTeenager(14);
//   expected = true;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = isTeenager(13);
//   expected = true;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
//   actual = isTeenager(12);
//   expected = false;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = isTeenager(19);
//   expected = true;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = isTeenager(20);
//   expected = false;

//   if (actual === expected) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = isTeenager("Hello!");
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager(true);
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager();
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = isTeenager("20");
// expected = "無効です！与えられた年齢は数字ではありません！";

// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

//基礎3
// 関数 anotherGreeting を宣言してください。

/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */
// function anotherGreeting(name, selected1, selected2) {

//   let result = "";

//   if (typeof name !== "string") {
//     return "無効なインプットです！";
//   }

//   if (selected2 === true) {
//     result = "Hello, " + name;
//   } else {
//     result = "Goodbye, " + name
//   }

//   if (selected1 === true) {
//     result += "-san.";
//   } else {
//     result += "!";
//   }

//   return result;

// }

// actual = anotherGreeting("Mary", true, true);
// expected = "Hello, Mary-san.";
// testFunction(actual, expected);

// actual = anotherGreeting("Mary", false, true);
// expected = "Hello, Mary!";
// testFunction(actual, expected);

// actual = anotherGreeting("Felix", false, false);
// expected = "Goodbye, Felix!";
// testFunction(actual, expected);

// actual = anotherGreeting(true, false, true);
// expected = "無効なインプットです！";
// testFunction(actual, expected);


// 中級2
// 関数 getLetterGrade を宣言してください。次の説明を参考にしましょう。
// 関数 getLetterGrade に レンジチェック を加えて、100 より大きい数値、または 0 より小さい数値を与えた場合、
//“無効な点数です。” と返すように修正してください。

// 90 以上、100 以下は、 "A"
// 80 以上、89 以下は、"B"
// 70 以上、79 以下は、"C"
// 60 以上、69 以下は、"D"
// 59 以下の場合は、"F"
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */
// function getLetterGrade(nubmer) {

//   if (nubmer < 0 || nubmer > 100) {
//     return "無効な点数です";
//   } else {
//     if (nubmer >= 90 && nubmer <= 100) {
//       return "A";
//     } else if (nubmer >= 80 && nubmer <= 89) {
//       return "B";
//     } else if (nubmer >= 70 && nubmer <= 79) {
//       return "C";
//     } else if (nubmer >= 60 && nubmer <= 69) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }
// }

// actual = getLetterGrade(200);
// expected = "無効な点数です"
// testFunction(actual, expected);


//No4
//関数 getBestNumericalGrade を宣言してください。この関数は getLetterGrade と逆のことを行います。
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */
// function getBestNumericalGrade(grade) {

//   if (grade === "A" || grade === "B" || grade === "C" || grade === "D" || grade === "F") {

//     if (grade === "A") {
//       return 100;
//     } else if (grade === "B") {
//       return 89;
//     } else if (grade === "C") {
//       return 79;
//     } else if (grade === "D") {
//       return 69;
//     } else if (grade === "F") {
//       return 59;
//     }
//   } else {
//     return "無効な点数です。";
//   }

// }

// actual = getBestNumericalGrade("A");
// expected = 100;
// testFunction(actual, expected);


// actual = getBestNumericalGrade("B");
// expected = 89;
// testFunction(actual, expected);

// actual = getBestNumericalGrade("恐竜ってすばらしい");
// expected = "無効な点数です。";
// testFunction(actual, expected);

// actual = getBestNumericalGrade(100);
// expected = "無効な点数です。";
// testFunction(actual, expected);

// 応用演習
// ここからの演習では、講義で説明されたことのないテクニックを使用する必要があるかもしれません。
// 次の問題では、De Morgan’s Law（ド・モルガンの法則） と呼ばれるものについて調べてみることをおすすめします。
// 1.|| 演算子を使用せずに、|| のように機能する関数 or を宣言してください。

/**
 * @param {any} ??? - １つめの被演算子
 * @param {any} ??? - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま || で評価したときと同じ結果
 */
function or(op1, op2) {

  //共にBooleanの場合
  if (typeof op1 === "boolean" && typeof op2 === "boolean") {
    if (op1 === false && op2 === false) {
      return false;
    }
    else {
      return true;
    }
  }
  //op2がbooleanでない場合はbooleanでない方を返す
  else if (typeof op1 === "boolean" && typeof op2 !== "boolean") {
    return op2;
  }
  //op1がbooleanでない場合はbooleanでない方を返す
  else if (typeof op1 !== "boolean" && typeof op2 === "boolean") {
    return op1;
  }
  //op1、op2が共にbooleanでない場合
  else {
    if (op1 !== "") {
      return op1;
    }
    else {
      return op2;
    }
  }
}
// test(or(true, true), true);
// test(or(true, false), true);
// test(or(false, true), true);
// test(or(false, false), false);
// test(or("bananas", false), "bananas");
// test(or(false, "bananas"), "bananas");
// test(or("bananas", true), "bananas");
// test(or(true, "bananas"), "bananas");
// test(or("", "bananas"), "bananas");
// test(or("bananas", ""), "bananas");
// test(or("apples", "bananas"), "apples");
// test(or(1, "bananas"), 1);
// test(or("bananas", 1), "bananas");


// function or2(op1, op2) {
//   //共にBooleanの場合
//   if (Boolean(op1) === false && Boolean(op2) === false) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }


// test(or2(true, true), true);
// test(or2(true, false), true);
// test(or2(false, true), true);
// test(or2(false, false), false);
// test(or2("bananas", false), "bananas");
// test(or2(false, "bananas"), "bananas");
// test(or2("bananas", true), "bananas");
// test(or2(true, "bananas"), "bananas");
// test(or2("", "bananas"), "bananas");
// test(or2("bananas", ""), "bananas");
// test(or2("apples", "bananas"), "apples");
// test(or2(1, "bananas"), 1);
// test(or2("bananas", 1), "bananas");

/**
 * @param {any} ??? - １つめの被演算子
 * @param {any} ??? - ２つめの被演算子
 * @returns {any} ２つの被演算子を与えられた順番のまま && で評価したときと同じ結果
 */
function and(op1, op2) {

  //共にBooleanの場合
  if (typeof op1 === "boolean" && typeof op2 === "boolean") {
    if (op1 === true && op2 === true) {
      return true;
    }
    else {
      return false;
    }
  }
  //op2がbooleanでない場合はbooleanを返す
  else if (typeof op1 === "boolean" && typeof op2 !== "boolean") {
    return op1;
  }
  //op1がbooleanでない場合はbooleanを返す
  else if (typeof op1 !== "boolean" && typeof op2 === "boolean") {
    return op2;
  }
  //op1、op2が共にbooleanでない場合
  else {
    if (op1 === "") {
      return op1;
    }
    else if (typeof op1 === "number") {
      return op2;
    }
    else {
      return op2;
    }
  }
}

test(and(true, true), true);
test(and(true, false), false);
test(and(false, true), false);
test(and(false, false), false);
test(and("bananas", false), false);
test(and(false, "bananas"), false);
test(and("bananas", true), true);
test(and(true, "bananas"), true);
test(and("", "bananas"), "");
test(and("bananas", ""), "");
test(and("apples", "bananas"), "bananas");
test(and(1, "bananas"), "bananas");
test(and("bananas", 1), 1);
test(and(10, "bananas"), "bananas");
test(and("bananas", 10), 10);













//基礎2
/**
//  * @param {number} ??? - テストの対象となる数値
//  * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
//  */
// function isOddWithoutIf( number ){

//     if( typeof number !== "number" ){
//         return "数値を入力してください";
//     }

//     return Boolean(number % 2 );
// }

//  actual = isOddWithoutIf( 1 );
//  expected = true;
//  testFunction( actual, expected );

//基礎3
//関数 getSimpleNumberName を宣言してください。
// /**
//  * @param {number} ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
//  * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
//  */
// function getSimpleNumberName( number ){

//     const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

//     if(( number < 0 && number > 10 ) || ( typeof number !== "number" )){

//         return "0から10の数値か、数値を入力してください";
//     }

//     return arr[number];
// }


// actual = getSimpleNumberName("0");
// expected = "zero";
// testFunction( actual, expected );

//基礎4
//関数 getRegularConvexPolygonName を宣言してください。
/**
 * @param {number} ??? - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// function getRegularConvexPolygonName( number ){

//     const arr = ["0", "1", "2", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"]

//     if(( number < 3 && number > 8 ) || ( typeof number !== "number" )){

//         return "3から8の数値か、数値を入力してください";
//     }
//     return arr[number];

// }
// actual = getRegularConvexPolygonName( 8 );
// expected = "octagon";
// testFunction( actual, expected );

//中級2
//関数 getLetterGrade を宣言してください。次の説明を参考にしましょう。

// 90 以上、100 以下は、 "A"
// 80 以上、89 以下は、"B"
// 70 以上、79 以下は、"C"
// 60 以上、69 以下は、"D"
// 59 以下の場合は、"F"
// /**
//  * @param {number} ??? - 0 以上 100 以下の点数
//  * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
//  */
// function getLetterGrade( nubmer ){

//     if( nubmer < 0  || nubmer > 100 ){
//         return "無効な点数です"
//     } else{
//         if ( nubmer >= 90 && nubmer <= 100){
//             return "A";
//         } else if ( nubmer >= 80 && nubmer <= 89){
//             return "B";
//         } else if ( nubmer >= 70 && nubmer <= 79){
//             return "C";
//         } else if ( nubmer >= 60 && nubmer <= 69){
//             return "D";
//         } else {
//             return "F";
//         }
//     }
// }

// actual = getLetterGrade( 70 );
// expected = "C";
// testFunction( actual, expected );


// 中級演習
// 関数 getTimeOfDay を宣言してください。

// 4:00 AM から 12:00 PM の間（12:00 は除く）: morning
// 12:00 PM から - 5:00 PM の間（5:00 は除く）: afternoon
// 5:00 PM から - 8:30 PM の間（8:30 は除く）: evening
// 8:30 PM から - 4:00 AM の間（4:00 は除く）: night
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} ??? - 時 (12時間制)
 * @param {number} ??? - 分
 * @param {"AM"|"PM"} ??? - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
// function getTimeOfDay( hour, minutes, ampm ){

//     let tempMinutes = 0;

//     //0時0分からの経過時間を分で求める
//     if ( ampm === "AM" ){

//         tempMinutes = ( hour * 60 ) + minutes;

//     } else if (ampm === "PM" && hour == 12 ){

//         tempMinutes = ( hour * 60 ) + minutes;                  //12:00PMだけは特別

//     } else if (ampm === "PM" && hour !== 12 ){

//         tempMinutes = ( 12 * 60 ) + ( hour * 60 ) + minutes;    //PMは720を足す

//     } else{
//         return "AMかPMで入力してください";
//     }

//     //console.log( tempMinutes );
//     if ( tempMinutes >= 0 && tempMinutes < 240 ) {

//         return "night";    //0:00AM~4:00AM(分に変換)

//     } else if ( tempMinutes >= 240 && tempMinutes < 720 ){

//         return "morning";   //4:00AM~12:00PM(分に変換)　

//     } else if ( tempMinutes >= 720 && tempMinutes < 1020 ){

//         return "afternoon"; //12:00PM~5:00PM(分に変換)　

//     } else if ( tempMinutes >= 1020 && tempMinutes < 1230 ){

//         return "evening"; //5:00PM~8:30PM(分に変換)　

//     } else{

//         return "night"; //8:30PM~0:00AM(分に変換)

//     }
// }

// actual = getTimeOfDay( 8, 30, "PM");
// expected = "evening";
// testFunction( actual, expected );


// actual = getTimeOfDay(3, 59, "AM");
// expected = "night";
// testFunction( actual, expected );

//応用
//関数 getAreaOfCircle を宣言してください。

// /**
//  * @param {number} ??? - 半径
//  * @returns {number} 与えられた半径の円の面積
//  */
// function getAreaOfCircle( radius ){

//     return radius ** 2 * Math.PI;

// }
// // ここにあなたのテストを書きましょう
// actual = getAreaOfCircle( 3 );
// console.log ( actual );
// expected = 9 * Math.PI ;
// testFunction( actual, expected );

// 関数 getNumberName を宣言してください。例を下に挙げます。

// -123: negative one hundred twenty three
// …
// 0: zero
// 1: one
// 2: two
// …
// 10: ten
// …
// 100: one hundred
// …
// 1345: one thousand three hundred forty five
/**
 * @param {number} ??? - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう

// actual = getNumberName(0);
// expected = "zero";
// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = getNumberName(1345);
// expected = "one thousand three hundred forty five";
// if (actual === expected) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }