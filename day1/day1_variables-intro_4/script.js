'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ヒント： ここで何かする必要があるかもしれません

let num = 0;

function counter( num ) {
    let ret  = 0;
    ret = num + 1;
    // ここにあなたのコードを書いてください
    return ret;
}

num = 0;
console.log ( counter( num )); // => 1

num = 1;
console.log ( counter( num )); // => 2

num = 2;
console.log ( counter( num )); // => 3
// etc.


//isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを console.log で表示しましょう
let givenNumber = 3;

function isOdd( givenNumber ) {
    let mod = 0;
    mod = givenNumber % 2;
    
    if ( mod = 0 ){
        return "No, it's even";
    }
    else{
        return "Yes, it's odd";
    }
}

console.log( "Enter Number = " + givenNumber );
console.log( isOdd( givenNumber ));
