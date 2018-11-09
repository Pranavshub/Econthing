// Create variables and assign their values
var win;

win = 0


// Get the element that has an id of stock
var yes = document.getElementById('yes');
// Set class name with value of inStock variable


// Get the element that has an id of shipping
var no = document.getElementById('no');
// Set class name with value of shipping variable

function firstWin(){
	win = 1;
	document.getElementById('statement').src = "../static/images/win1.png"
	document.getElementById('button').onclick = secondWin;
}

function secondWin(){
	win = 1;
	document.getElementById('statement').src = "../static/images/win2.png"
	document.getElementById('button').onclick = thirdWin;
}

function thirdWin(){
	win = 1;
	document.getElementById('statement').src = "../static/images/win3.png"
	document.getElementById('button').onclick = fourthWin;
}

function fourthWin(){
	win = 1;
	document.getElementById('statement').src = "../static/images/win4.png"
	document.getElementById('button').onclick = fifthWin;
}

function fifthWin(){
	win = 1;
	document.getElementById('statement').src = "../static/images/win5.png"
	document.getElementById('button').onclick = loss;
}
function loss(){
	win = 1;
	//document.getElementById('statement').src = "../static/images/win2.png"
	//document.getElementById('button').onclick = thirdWin;
}