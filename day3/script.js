'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// console.log(1100 > 99) // => true を表示させる。
// console.log(1 === 21) // => false
// console.log(62 !== 63) // => true
// console.log("5" === 5) // => false
// console.log("6" !== "six") // => true
//No3
//console.log( ((2 + 3 ) * 10)  === 50 );
//No4
// function isEqual(valueOne, valueTwo) {
//   return valueOne == valueTwo;
// }
// console.log(isEqual(10, "10"));
//No5
// function isGreaterThan(valueOne, valueTwo) {
//   return valueOne > valueTwo;
// }
// console.log(isGreaterThan( 10, 100 ));
//No6
// function isOfAge( age ){
//   return age >= 20;
// }
// console.log(isOfAge( 10 ));

//中級
//No2
// function isEven( n ){

//   //return !Boolean( n % 2 ); //型変換、NOT演算子
//   return ( n % 2 ) === 0;

// }
// console.log( isEven( 3 ));


// //No3
// function validCredentials( username, password ){

//   console.log( username.length );
//   console.log( password.length );

//   return ( username.length > 5 && password.length > 5 );

// }

// console.log( validCredentials( "Makino Kouji", "PASSWORD"));


//応用
//No1
//ポイント：bit演算子(&)を使用
//2進数で最下位ビットは偶数が0、奇数は1であることを利用
// function isEven( n ){

//   return ( n & 1 ) === 0;

// }
// console.log( isEven( 4 ));


// //No2
// function getGreaterValue( num1, num2 ){

//   return Math.max( num1, num2 );

// }

// console.log(getGreaterValue(10, 15)); // 15 を表示
// console.log(getGreaterValue(15, 10)); // 15 を表示

// No3
//ポイント:可変長引数をレストパラメータ(rest parameters)で宣言
// function getGreatestValue( num1, num2, ...othernum ){

//   return Math.max( num1, num2, ...othernum );

// }

// console.log( getGreatestValue( 10, 15 ));         // 15 を表示
// console.log( getGreatestValue( 15, 10 ));         // 15 を表示
// console.log( getGreatestValue( 1, 2, 3, 4, 5 ));  // 5 を表示
// console.log( getGreatestValue( 1, 10, 3, 4, 5 )); // 10 を表示

//全部レストパラメータにしてしまう
// function getGreatestValue( ...othernum ){

//   return Math.max( ...othernum );

// }

// console.log( getGreatestValue( 10, 15 ));         // 15 を表示
// console.log( getGreatestValue( 15, 10 ));         // 15 を表示
// console.log( getGreatestValue( 1, 2, 3, 4, 5 ));  // 5 を表示
// console.log( getGreatestValue( 1, 10, 3, 4, 5 )); // 10 を表示



//1
//コメントアウト/インのショートカット
// CTRL＋スラッシュ
//2
// 文字サイズ変更
// CTRL＋+　サイズ大
// CTRL＋-　サイズ小
//3
//タブ   インデント
//シフトタブ　インデント戻る
//4
//検索　CTR＋F
//更に検索ワードの移動　F3
//関数
//@でコメント

//ナイトメア
//平坦化：入れ子配列の入れ子を外して、一次元配列にする
//Array.prototype.flatは使ってはいけない
function flatten(array) {
    const result = [];
    for (const element1 of array) {
        if (typeof element1 === "object") {
            for (const element2 of element1) {
                result.push(element2);
            }
        } else {
            result.push(element1);
        }
    }
    console.log(result);
    return result;
}

// flatten([[1, 2, 3], [4, 5, 6]]);
// flatten([1, 2, 3, [4, 5, 6]]); // [1, 2, 3, 4, 5, 6]
// flatten([[1], [2], [3], [4, 5, 6]]); // [1, 2, 3, 4, 5, 6]

function flatten2(array) {
    const result = [];
    for (const element1 of array) {

        console.log(element1);
        console.log(typeof element1);
        console.log(element1.length);

        if (typeof element1 === "object") {
            for (const element2 of element1) {
                result.push(element2);
            }
        } else {
            result.push(element1);
        }
    }
    console.log(result);
    return result;
}

flatten2([
    [1, [2, 3]],
    [4],
    [5],
    [6, 7, 8]
]); // [1, 2, 3, 4, 5, 6]
