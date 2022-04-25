'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ウオームアップ
// function isMultipleOfThree( number ) {

//     return (number % 3 ) === 0;

// }

// // テスト
// console.log( isMultipleOfThree( 6 ));   // => true
// console.log( isMultipleOfThree( 10 ));  // => false


// function isMultipleOf( number1, number2 ) {

//     return ( number1 % number2 ) === 0; 

//   }

//   // テスト
//   console.log(isMultipleOf( 6, 3 ));    // => true
//   console.log(isMultipleOf( 10, 4 ));   // => false

//基礎1
// function simplePasswordLock(password) {
//     if (password === "password") {
//         return "Correct! Welcome.";
//     }
//     return "Incorrect password, please try again.";
// }
// テスト:

// console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
// console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//基礎3
// function isItTooLong( num ){

//     if ( num.length > 1 ){
//         return true;
//     } else{
//         return false;
//     }

// //    return num.length > 1;

// }

//console.log(isItTooLong( "Makino" ));

// //基礎4+ボーナス
// function biggerNumber( numOne, numTwo ) {

//     if ( numOne > numTwo ){
//         return 'The first argument is bigger.';
//     } else if ( numOne < numTwo ){
//         return 'The second argument is bigger.';
//     } else{
//         return 'The same argument.';
//     }


// }
// テストケース:
// console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
// console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
// console.log(biggerNumber(4, 4)); // => The same argument.''



// //7
// function isEven( data ){

//     if ( typeof data === "number"){

// //        return data % 2 === 0;
// //        return ( data & 1 )  != 0;
//     }
//     else{

//         return "This is not a number.";

//     }
// }
// console.log(isEven(4)); // true が表示されるようにする。
// console.log(isEven(7)); // => false
// console.log(isEven("7")); // => "This is not a number."

//応用
// randomStopLight という名前の関数を宣言し、0 以上 10 以下のランダムな整数を生成します。
// 生成した数字が 3 未満であれば "🔴Red" を返し、3 以上 6 以下であれば "🟡Yellow" を返し、
// 6 より大きければ "🟢Green"を返すようにしてください。
function randomStopLight(){

    let randomNumber = Math.floor( Math.random() * 11 );
    console.log(randomNumber);

    if ( randomNumber < 3 ) {
        return "🔴Red";
    } else if ( randomNumber >= 3 && randomNumber <= 6 ){
        return "🟡Yellow";
    } else {
        return "🟢Green";

    }
}
console.log( randomStopLight());




