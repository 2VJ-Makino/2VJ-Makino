'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const getValueInput = () => {
    let inputValue1 = document.querySelector(".input1").value;
    console.log(inputValue1);
    addRaccoon(inputValue1);
}

let addRaccoon = (inputValue1) => {
    let theRaccoonMeter = document.querySelector(".p1");
    for (let i = 0; i < inputValue1; i++) {
        theRaccoonMeter.append("🐊");
    }
};

