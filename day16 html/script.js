'use strict'



// let allelem = document.querySelectorAll(".title");
// for (let i = 0; i < allelem.length; i = i + 2) {

// 	allelem[i].style.display = "none"

// }

//赤、青、黄色　に順番をつけて、if文でランダムで数を決める

//array[] = ["red", "blue", "yello"]
//ランダムで0~2を生成
//allelem[i].style.backgound = array[ランダム数値]




let allelem = document.querySelectorAll(".title");
const array = ["red", "blue", "yellow"];
for (let i = 0; i < allelem.length; i++) {
	allelem[i].style.backgroundColor = array[Math.floor(Math.random() * 3)]
}





// let element = document.querySelector("img");
// console.log(element);
// //element.textContent = "I am the first h1 element";



// function domUpper(string) {
//     const element = document.querySelector(string);
//     //element.textContent = element.textContent.toUpperCase();
//     console.log(element.textContent.toUpperCase());

// }
// //domUpper("html");

// //document.getElementById("main-header").style.fontSize = "50px";

// //document.querySelector(".inner").style.fontSize = "20px";

// //inputの追加
// let input_data = document.createElement('input');
// input_data.type = 'button';
// input_data.value = "押して";
// let parent = document.querySelector(".outer");
// parent.appendChild(input_data);

// document.querySelector("input").onclick = function () {
//     window.alert("hello");
// };

// function clickBtn2() {
//     window.alert("hello");
// }