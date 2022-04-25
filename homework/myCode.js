// 2秒ごとに アライグマ の絵文字を追加します
let addRaccoon = () => {
	let theRaccoonMeter = document.getElementById("raccoonMeter");
	theRaccoonMeter.append("🦝");
};
window.addEventListener("load", () => {
	window.setInterval(addRaccoon, 2000);
});