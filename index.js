//clock
var obj_Clock = document.querySelector(".clock");
var obj_hour  = document.querySelector(".hour");
var obj_min   = document.querySelector(".min");
var obj_sec   = document.querySelector(".sec");
 
for (var i = 0; i < 60; i++) {
	var obj_line = document.createElement("span");
	obj_line.classList.add("line");

	if (i%5 == 0) { //每隔五分钟的分割线
		obj_line.classList.add("on");
		var obj_line_txt = document.createElement("em");
		obj_line_txt.classList.add("digital");
		if (i == 0) { //设置十二点文字
			obj_line_txt.innerHTML = 12;
		} else {
			obj_line_txt.innerHTML = i/5;
		}
		obj_line_txt.style.transform = "rotate(" + -i * 6 + "deg)"; //文字垂直
		obj_line.appendChild(obj_line_txt);
	}

	obj_line.style.transform = "rotate(" + i * 6 + "deg)";
	obj_Clock.appendChild(obj_line);
}

tick();
setInterval(tick, 1000);

function tick () {
	var d   = new Date();
	var ih  = d.getHours(); 
	var im  = d.getMinutes(); 
	var is  = d.getSeconds();

	obj_hour.style.transform = "rotate(" + (ih + im / 60) * 30 + "deg)";
	obj_min.style.transform  = "rotate(" + (im + is / 60) * 6 + "deg)";
	obj_sec.style.transform  = "rotate(" + is * 6 + "deg)";
}
