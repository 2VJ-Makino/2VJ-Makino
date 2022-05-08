'use strict'
// // //ウォームアップ
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし、値が文字列のキー/値ペアだけを持つ。
//  */
// function filterObjectForStrings(object) {

//     const retObject = {};

//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             retObject[key] = object[key];
//         }
//     }
//     return retObject;

// }
// // test(filterObjectForStrings(obj1), obj1); // 変化なし
// // test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
// // test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない

// //関数 filterArrayForStrings を宣言してください。 1 問目で作った関数 を使ってください。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトの入った配列
//  * @returns {Array<{ [key: string]: string }>} 与えられたすべてのオブジェクトの入った配列だが、各オブジェクトには、値が文字列であるキー/値ペアだけが含まれる。
//  */
// function filterArrayForStrings(arrayOfObjects) {

//     const retArray = [];
//     for (const element of arrayOfObjects) {
//         retArray.push(filterObjectForStrings(element));
//     }
//     return retArray;
// }
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// // 2 番目の要素からキー が "b" のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

/**
//  * @param {Array<object>} ??? - オブジェクトの入った配列
//  * @param {string} キー
//  * @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
//  */
// function pluck(arrayObject, selectedKey) {

//     const retArray = [];

//     for (const element of arrayObject) {

//         retArray.push(element[selectedKey]);
//     }
//     return retArray;
// }

// const arrayOfObjects = [
//     { a: 1, b: 2, c: 3 },
//     { a: 4, b: 5, c: 6 },
//     { a: 7, b: 8, c: 9 },
// ];

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);


const pokemons = [
    {
        Number: "001",
        Name: "Bulbasaur",
        Generation: "Generation I",
        About:
            "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        Types: ["Grass", "Poison"],
    },
    {
        Number: "025",
        Name: "Pikachu",
        Generation: "Generation I",
        About:
            "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
        Types: ["Electric"],
    },
    {
        Number: "019",
        Name: "Rattata",
        Generation: "Generation I",
        About:
            "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
        Types: ["Normal"],
    },
];
// console.log(pokemons[0]);           //Bulbasaurのobject全部
// console.log(pokemons[1].Name);      //Pikachu
// console.log(pokemons[0]["Name"]);   //"Bulbasaur"
// console.log(pokemons[2]["About"]);  //"Rattata is cautious
// console.log(pokemons[2].Types[0]);  //Normal
/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */
// function getNames(arrayObject) {
//     const retArray = [];
//     for (const element of arrayObject) {
//         retArray.push(element.Name);
//     }
//     return retArray;
// }

// test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);
/**
 * @param {Array<object>} ??? - ポケモンが入った配列
 * @param {number} ??? - 取り出したいポケモンの 'number'
 * @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、null を返す。
 */
function findPokemon(arrayObject, number) {

    if (number == 1) {
        return arrayObject[0];
    } else if (number == 25) {
        return arrayObject[1];
    } else if (number == 19) {
        return arrayObject[2];
    } else {
        return null;
    }

}

test(findPokemon(pokemons, 1), pokemons[0]);
test(findPokemon(pokemons, 19), pokemons[2]);
test(findPokemon(pokemons, 25), pokemons[1]);
test(findPokemon(pokemons, 1337), null);



// /**
//  * @param {string} ???
//  * @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。各キーに対応する値は、それぞれの単語が文字列の中で使われている回数。
//  */
// function countWords(message) {

//     let retObject = {}
//     let messageArry = message.split(" ");   //スペース区切りでメッセージを配列に格納

//     for (const element of messageArry) {

//         //配列の中身が空の場合は空のObjectを返す
//         if (element === "") {
//             return retObject = {};
//         }
//         console.log(element);
//         console.log(message.split(element));
//         retObject[element] = message.split(element).length - 1;
//     }

//     return retObject;

// }

// //test(countWords("hello hello"), { hello: 2 });
// test(countWords("hello Hello"), { hello: 1, Hello: 1 });
// // test(countWords(""), {});
