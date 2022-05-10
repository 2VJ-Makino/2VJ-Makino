'use strict'
// Please don't delete the 'use strict' line above

// console.log(allPokemon);
// console.log(allPokemon.length);

// 基本演習
// 1.データ中のすべてのポケモンの名前を要素に持つ配列を返す、関数 getNames を宣言してください。

// /**
//  * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
//  */

// function getNames() {
//     const result = [];
//     for (const obj of allPokemon) {
//         result.push(obj["Name"]);
//     }
//     return result;
// }
// test(getNames(), getNamesExpected);

// 2.与えられた名前を持つポケモンのオブジェクトを返す、関数 getPokemonByName を宣言してください。

/**
//  * @param {string} ??? - ポケモンの名前
//  * @returns {object} 与えられた名前を持つポケモンのオブジェクト
//  */
// function getPokemonByName(name) {
// 	let result = {};
// 	allPokemon.map(function (obj) {
// 		if (obj["Name"] === name) {
// 			// console.log(obj);
// 			result = obj;
// 		}
// 	})
// 	return result;
// }

// test(getPokemonByName("Pikachu"), getPokemonByNameExpected);

// 3.全ポケモンの最大 CP (戦闘力) の平均値を返す、関数 getAvgMaxCP を宣言してください。

// /**
//  * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
//  */
// function getAvgMaxCP() {
//     let result = 0;
//     allPokemon.map(function(obj){
//         result += obj.MaxCP 
//         // console.log(result);
//     })
//     return result/allPokemon.length;
// }

// // このテストの値はおおよそ答と近ければ合格です。少し違っても問題ありません。
// // 少しだけ違う場合は、テストをコメントアウトしてください
// // それにしても、なぜ違ってもよいかわかりますか？🤔
// test(getAvgMaxCP(), getAvgMaxCPExpected);

// 4.引数に文字列で attack（技）を取る getResistantPokemon という関数を宣言してください。この関数は、与えられた attack に耐性のあるすべてのポケモンのオブジェクトを要素に持つ配列を返します。

// /**
//  * @param {string} attack（技）
//  * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
//  */
// function getResistantPokemon(attack) {
//     let result = [];
//     allPokemon.map(function (obj) {
//         obj.Resistant.map(function (elem) {
//             if (elem === attack) {
//                 result.push(obj);
//             }
//         })
//     })
//     return result;
// }

// test(getResistantPokemon("Fire"), getResistantPokemonExpected);

// 5.引数に文字列 attack （技）を取る関数 getResistantPokemonNames を宣言してください。この関数は与えられた attack に耐性のあるすべてのポケモンの名前が入った配列を返します。 ヒント： 上記で作成した getResistentPokemon を活用できるかも。

// /**
//  * @param {string} attack（技）
//  * @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
//  */
// function getResistantPokemonNames(attack) {
// 	let result = [];
// 	allPokemon.map(function (obj) {
// 		obj.Resistant.map(function (elem) {
// 			if (elem === attack) {
// 				result.push(obj.Name);
// 			}
// 		})
// 	})
// 	return result;
// }

//test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);

// 6.weakness（弱点）をキー、その弱点を持つポケモンの数を値とするオブジェクトを返す、関数 getWeaknessCounts を宣言してください。
// let weaknessCounts = {
// 	Fire: 0,
// 	Ice: 0,
// 	Flying: 0,
// 	Psychic: 0,
// 	Water: 0,
// 	Ground: 0,
// 	Rock: 0,
// 	Electric: 0,
// 	Grass: 0,
// 	Fighting: 0,
// 	Poison: 0,
// 	Steel: 0,
// 	Bug: 0
// };
// /**
//  * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
//  */
// function getWeaknessCounts() {

// 	allPokemon.map(function (obj) {
// 		for (let element of obj.Weaknesses) {
// 			weaknessCounts[element] += 1;
// 		}
// 	})
// 	return weaknessCounts;
// }
// test(getWeaknessCounts(), getWeaknessCountsExpected);

/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */

function getNames() {
	const result = [];
	allPokemon.forEach(obj => result.push(obj.Name));
	return result;
}
test(getNames(), getNamesExpected);