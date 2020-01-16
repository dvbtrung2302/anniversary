// var year = document.getElementById('year');
// var month = document.getElementById('month');
// var day = document.getElementById('day');
// var min = document.getElementById('min');
// var sec = document.getElementById('sec');
moment().format()
var months = moment().diff('2017-01-18', 'month');
var years = moment().diff('2017-01-18', 'year');

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
}

function getSecond() {
	var d = new Date();
	var sec = d.getSeconds();
	sec = checkTime(sec);
	document.getElementById('sec').innerHTML = sec;	
}

function getMinute() {
	var d = new Date();
	var min = d.getMinutes();
	min = checkTime(min);
	document.getElementById('min').innerHTML = min;
}

function getHour() {
	var d = new Date();
	var hour = d.getHours();
	hour = checkTime(hour);
	document.getElementById('hour').innerHTML = hour;
}

function getDay() {
	var d = new Date();
	var currentDay = d.getDate();
	var anniDay = 18;
	var day;
	var daysOfPreviousMonth = moment().subtract(1, 'months').endOf('month').format('DD');
	if (currentDay >= 18) {
		day = currentDay - anniDay;
	} else {
		day = parseInt(daysOfPreviousMonth) + (currentDay - anniDay);
	}

	day = checkTime(day);
	document.getElementById('day').innerHTML = day;
}

function getMonth() {
	var month = months - (12  * years);
	month = checkTime(month);
	document.getElementById('month').innerHTML = month;
}

function getYear() {
	var year = years;
	year = checkTime(year);
	document.getElementById('year').innerHTML = year;
}

setInterval(function() {
	getSecond();
}, 500);

setInterval(function() {
	getMinute();
}, 500);

setInterval(function() {
	getHour();
}, 500);

setInterval(function() {
	getMonth();
}, 500);

setInterval(function() {
	getDay();
}, 500);

setInterval(function() {
	getYear();
}, 500);

//18-1-2017
//16-1-2019 (1 nam - 12 thang - 28 ngay )
//18-1-2019 (2 nam - 12 thang - 10 ngay)
//28-12-2019

// (currentDay - anniDay)  
