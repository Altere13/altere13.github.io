var clock = document.getElementById("clock");
var list = document.getElementById("list");
list.style.display = "none";

clickCount = 2

function clockFunc() {
	var time = new Date();
	var h = time.getHours().toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();

	if (h.length < 2)
		h = "0" + h;
	if (m.length < 2)
		m = "0" + m;
	if (s.length < 2)
		s = "0" + s;

	var text = h + ":" + m + ":" + s;

	clock.textContent = text;
}

clockFunc()
setInterval(clockFunc, 1000)

function menu() {
	clickCount *= -1
	if (list.style.display == "none") {
		console.log('open')
		list.style.display = "block";
	}
	else if (list.style.display == "block") {
		console.log('close')
		list.style.display = "none";
	}
	else {
		console.log("error")
		console.log(list.style.display)
	}
}