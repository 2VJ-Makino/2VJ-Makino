'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const myMathObject = {
    //ただの足し算
    sum: function (...num) {
        let result = 0;
        for (const n of num) {
            result += n;
        }
        return result;
    },
    //ただの掛け算
    product: function (...num) {
        let result = 1;
        for (const n of num) {
            result *= n;
        }
        return result;
    },
    //偶数だったらtrueを返す
    isEven: function (num) {
        return num % 2 === 0;
    },
    //数値配列の数値をすべて足す
    getNumbers: function (...num) {
        const result = [];
        for (const element of num) {
            if (typeof element === "number") {
                result.push(element);
            }
        }
        return result;
    },
    //絶対値
    abs: function (num) {
        if (num < 0) {
            return num * -1;
        } else {
            return num;
        }
    },
    //べき乗
    power: function (baseNum, expNum) {
        let result = 1;
        for (let i = 0; i < expNum; i++) {
            result *= baseNum;
        }
        return result;
    },
    //切り上げ
    ceil: function (number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return (number += 1) & number;
        }
    },
    //切り捨て
    floor: function (number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return number & number;
        }
    },
    //四捨五入
    round: function (number) {
        return this.floor((number + 0.5));
    },
    //素因数分解
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
    //素数を求める
    getPrimeNumbers: function (number) {
        const retArray = [];
        let div = 0;
        let mod = 0;
        //2から入力された数までループ
        for (let i = 2; i <= number; i++) {
            console.log(i);
            //その数が自分自身のみで割り切れるかのチェック
            for (let j = 2; j <= i; j++) {
                div = i / j;
                mod = i % j;
                //割り切れて、かつ、自分自身と同じ数=素数
                if (mod === 0 && i === j) {
                    retArray.push(j);
                }
                //割り切れるが自分自身と同じ数でない=素数でない
                else if (mod === 0 && i !== j) {
                    break;
                }
            }
        }
        return retArray;
    },
};

//HLMLからの呼び出し
const getAbsValue = () => {
    let inputValue = document.querySelector(".abs_input1").value;
    let absElement = document.querySelector(".abs_div2");
    absElement.append("は" + myMathObject.abs(inputValue) + "です");
}

const getPrimeFactValue = () => {
    let inputValue = document.querySelector(".primeFact_input1").value;
    let primeFactElement = document.querySelector(".primeFact_div2");
    primeFactElement.append("は" + JSON.stringify(myMathObject.primeFactorization(inputValue)) + "です");
}

const getPrimeValue = () => {
    let inputValue = document.querySelector(".prime_input1").value;
    let primeElement = document.querySelector(".prime_div2");
    primeElement.append("は" + JSON.stringify(myMathObject.getPrimeNumbers(inputValue)) + "です");
}

const getDomValue = () => {
    let inputValue = document.querySelector(".dom_input4").value
    let domElement = document.querySelector(".dom_div2");
    let selectedRadio = document.getElementsByName("select");

    if (selectedRadio[0].checked) {
        for (let i = 0; i < inputValue; i++) {
            domElement.append("🐊");
        }
    } else if (selectedRadio[1].checked) {
        for (let i = 0; i < inputValue; i++) {
            domElement.append("😈");
        }
    } else {
        document.write('<img src="https://bandai-hobby.net/images/153_4706_s_8f7igxlx6blmt7dg964m57fgbgtm.jpg">');
    }

};