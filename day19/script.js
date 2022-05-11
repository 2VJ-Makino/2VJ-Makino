'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {

	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log("Test PASSED!");
	} else {
		console.error("Test FAILED. Keep trying!");
		console.group("Result:");
		console.log("  actual:", actual);
		console.log("expected:", expected);
		console.groupEnd("Result:");
	}
}

//1
//配列で6以下のものを抽出して、2乗する関数
function extractLessThan6AndDouble(array) {

	let result = [];

	for (const element of array) {
		if (element < 6) {
			result.push(element ** 2);
		}
	}
	return result;
}

// test(extractLessThan6AndDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(extractLessThan6AndDouble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

//
//
function extractLessThan6AndDouble2(array) {

	let result = [];

	result = array.filter(function (element) {
		return element < 6;
	})
	result = result.map(function (element) {
		return element ** 2;
	})

	return result;

}
// test(extractLessThan6AndDouble2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(extractLessThan6AndDouble2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

function extractLessThan6AndDouble3(array) {

	return array.filter((element) => element < 6).map(element => element ** 2)
}
test(extractLessThan6AndDouble3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(extractLessThan6AndDouble3([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

//2
//冷蔵庫の中のアイテム
const refInItems = [];

//冷蔵庫にアイテムを入れる
function putItemInRefrigerator(item) {
	refInItems.push(item);
}
//冷蔵庫のなかのアイテムを確認する
function getItemsInRefrigerator() {
	return refInItems;
}
//冷蔵庫からアイテムを出す
function removeItemFromRefrigerator(item) {

	for (let i = 0; i < refInItems.length - 1; i++) {
		if (refInItems[i] === item) {
			refInItems.splice(i, 1)
		}
	}
}


// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);