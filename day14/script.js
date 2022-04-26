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


//ウォームアップ
//引数に x を取り、関数を返す divide という関数を作成してください。
//内部関数は引数に y をとり、x を y で割った値を返すようにしてください。

/**
* @param {number} x
* @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
*/
function divide(number) {
    let x = number;
    return function (y) {
        return x / y;
    }
}

const divide2 = divide(2);

test(divide2(4), 0.5);
test(divide(2)(1), 2);

