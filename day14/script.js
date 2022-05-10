'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// let actual;
// let expected;

// //配列用のテスト関数
// function test(actual, expected) {

//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("  actual:", actual);
//         console.log("expected:", expected);
//         console.log("Test PASSED!");
//     } else {
//         console.error("Test FAILED. Keep trying!");
//         console.group("Result:");
//         console.log("  actual:", actual);
//         console.log("expected:", expected);
//         console.groupEnd("Result:");
//     }
// }


//ウォームアップ
//引数に x を取り、関数を返す divide という関数を作成してください。
//内部関数は引数に y をとり、x を y で割った値を返すようにしてください。

// /**
// * @param {number} x
// * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
// */
// function divide(x) {
//     let x = number;
//     return function (y) {
//         return x / y;
//     }
// }

// const divide2 = divide(2);

// test(divide2(4), 0.5);
// test(divide(2)(1), 2);

const myMathObject = {
    sum: function (...num) {
        let result = 0;
        for (const n of num) {
            result += n;
        }
        return result;
    },
    product: function (...num) {
        let result = 1;
        for (const n of num) {
            result *= n;
        }
        return result;
    },
    isEven: function (num) {
        return num % 2 === 0;
    },
    getNumbers: function (...num) {
        const result = [];
        for (const element of num) {
            if (typeof element === "number") {
                result.push(element);
            }
        }
        return result;
    },
    abs: function (num) {
        if (num <= 0) {
            return num * -1;
        } else {
            return num;
        }
    },
    power: function (baseNum, expNum) {
        let result = 1;
        for (let i = 0; i < expNum; i++) {
            result *= baseNum;
        }
        return result;
    },
    ceil: function (number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return (number += 1) & number;
        }
    },
    floor: function (number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return number & number;
        }
    },
    round: function (number) {
        return this.floor((number + 0.5));
    },
    primeFactorization: function (number) {

        let inNumber = this.abs(number);    //こっそりabs
        let calcNum = 2;
        let div = null;
        let mod = null;
        let primeCounter = 0;
        const retObject = {};

        if (inNumber == 0 || inNumber == 1) {
            return "0と1以外の数を入力してください"
        }

        //無限ﾙｰﾌﾟ
        for (; ;) {
            div = inNumber / calcNum;
            mod = inNumber % calcNum;

            //mod=0　割り切れたので継続
            if (mod === 0) {
                inNumber = div;
                primeCounter += 1;
                retObject[calcNum] = primeCounter;
            }
            //割り切れなかったので、割る数をインクリメント
            else {
                calcNum++;
                primeCounter = 0;
            }

            //div=1 mod=0でこれ以上割り算できないのでループ終了
            if (div === 1 && mod === 0) {
                break;
            }

        }
        return retObject;
    },
};
// test(myMathObject.primeFactorization(1), "0と1以外の数を入力してください");
// test(myMathObject.primeFactorization(2), { 2: 1 });
// test(myMathObject.primeFactorization(3), { 3: 1 });
// test(myMathObject.primeFactorization(4), { 2: 2 });
// test(myMathObject.primeFactorization(5), { 5: 1 });
// test(myMathObject.primeFactorization(6), { 2: 1, 3: 1 });
// test(myMathObject.primeFactorization(200560490130), {
//     2: 1,
//     3: 1,
//     5: 1,
//     7: 1,
//     11: 1,
//     13: 1,
//     17: 1,
//     19: 1,
//     23: 1,
//     29: 1,
//     31: 1,
// });
// test(myMathObject.primeFactorization(900719925474099), {
//     3: 1,
//     53: 1,
//     157: 1,
//     1613: 1,
//     2731: 1,
//     8191: 1,
// });

// これらはテストのサンプルです。下の問題は自分でテストを考えましょう。
// test(myMathObject.sum(1), 1);
// test(myMathObject.sum(1, 2, 3), 6);

// test(myMathObject.product(1), 1);
// test(myMathObject.product(1, 2, 4), 8);

// test(myMathObject.isEven(1), false);
// test(myMathObject.isEven(2), true);

// test(myMathObject.sum(19283, 18475, 199999), 237757);
// test(myMathObject.product(19283, 18475, 199999), 71250328746575);

// test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
// test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);

// test({ a: "A", b: "B" }, { b: "B", a: "A" });

// test(myMathObject.abs(1), 1);
// test(myMathObject.abs(-1), 1);
// test(myMathObject.abs(435678.745389), 435678.745389);
// test(myMathObject.abs(-675843.753489), 675843.753489);
// test(myMathObject.power(2, 3), 8);
// test(myMathObject.power(4, 2), 16);

// test(myMathObject.ceil(1.0), 1);
// test(myMathObject.ceil(1.1), 2);
// test(myMathObject.ceil(2.2), 3);
// test(myMathObject.ceil(3.3), 4);
// test(myMathObject.ceil(4.4), 5);
// test(myMathObject.ceil(5.5), 6);

// test(myMathObject.floor(1.1), 1);
// test(myMathObject.floor(2.2), 2);
// test(myMathObject.floor(3.3), 3);
// test(myMathObject.floor(4.4), 4);
// test(myMathObject.floor(5.5), 5);

// test(myMathObject.round(1.1), 1);
// test(myMathObject.round(2.2), 2);
// test(myMathObject.round(3.3), 3);
// test(myMathObject.round(4.4), 4);
// test(myMathObject.round(5.5), 6);
// test(myMathObject.round(6.6), 7);
// test(myMathObject.round(7.7), 8);

// //関数 incrementNumbers を宣言してください。
// /**
//  * @param {{ [key: string]: number }} ???
//  * @returns {{ [key: string]: number }} 与えられたオブジェクトと同じ値を持つが、数値には 1 が足されたオブジェクト
//  */
// function incrementNumbers(object) {

//     for (let key in object) {
//         if (typeof object[key] === "number") {
//             object[key] += 1;
//         }
//     }
//     return object;
// }



// test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
//     a: 2,
//     b: 3,
//     1: 4,
//     d: "hello",
// });
// test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
//     a: 3,
//     b: 4,
//     1: 5,
//     d: "hello",
// });
