'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト部分を関数化 削除しない
let actual;
let expected;

//配列以外のテスト関数
function testFunction(actual, expected) {

	if (actual === expected) {
		console.log("Test PASSED!");
	} else {
		console.error("Test FAILED. Keep trying!");
		console.group("Result:");
		console.log("  actual:", actual);
		console.log("expected:", expected);
		console.groupEnd();
	}
}

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
console.log("hello");