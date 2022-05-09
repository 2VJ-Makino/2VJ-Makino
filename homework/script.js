'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//lesson6 dig-functions-comparisons-conditionals-review.ja.mdの 😈

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
const digit = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred", 1000: "thousand"
}

function getNumberName(number) {

    let result = "";
    let div1 = 0;
    let mod1 = 0;
    let div2 = 0;
    let mod2 = 0;

    //入力値のチェック
    //負の場合はnegativeを先頭につけて、値は絶対値で計算
    if (number < 0) {
        number = Math.abs(number);
        result = "negative ";
    }

    //100未満
    if (number < 100) {
        div1 = number / 10;
        mod1 = number % 10;
        if (number >= 20) {
            //10の倍数以外(余りがある)
            if (mod1 !== 0) {
                result += digit[Math.floor(div1) * 10] + " " + digit[mod1];
            }
            else {
                result += digit[Math.floor(div1) * 10];
            }
        }
        //19以下はそのままdigitから値をもってくる
        else {
            result += digit[number];
        }
    }
    //100以上、1000未未満
    else if (number >= 100 && number < 1000) {

        div2 = number / 100;
        mod2 = number % 100;
        div1 = number / 10;
        mod1 = number % 10;

        //100の倍数以外(余りがある)
        if (mod2 !== 0) {
            //10の桁が0(10の桁は何も表示しない)
            if (mod2 < 10) {
                result += digit[Math.floor(div2)] + " hundred " + digit[mod1];
            }
            //10の桁が0でない
            else {
                result += digit[Math.floor(div2)] + " hundred " + digit[Math.floor(div1 / 10) * 10] + " " + digit[mod1];
            }
        }
        //100の倍数
        else {
            result += digit[Math.floor(div2)] + " hundred";
        }
    }
    //それ以上
    else {
        result = "9999以下の数値を入力してください";
    }

    return result;
}

test(getNumberName(-999), "eleven");
