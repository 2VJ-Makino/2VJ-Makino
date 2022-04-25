'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

const variableNumber = 100;         // "number"と表示させるにはどんな値を代入すればいいでしょう？
console.log(typeof variableNumber); // "number"と表示されましたか？

// ここにコードを書いて、"boolean"と表示されるようにしてください。
let variableBoolean = false;
console.log(typeof variableBoolean);

//ここにコードを書いて、"undefined"と表示されるようにしてください。
//変数を定義しない
console.log(typeof variableUndefined);

//----------

const numberA = 10;
const numberB = 30;

const average = ( numberA + numberB ) / 2;
console.log(average); // numberA と numberB の平均が表示される。



function addTen( number ){

    return number + 10;

}

console.log(addTen(5));
