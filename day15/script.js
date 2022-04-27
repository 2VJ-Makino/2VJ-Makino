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


function domUpper(string) {
    const element = document.querySelector(string);
    console.log(element.textContent.toUpperCase());
}
domUpper("html");