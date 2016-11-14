var micCheck = function() {
	console.log("hell yeah"); 
};

var xTurn;
var oTurn;
var turnArray = ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o"];

/*
if (turnArray[i] = "x") {
	return xTurn === true;
	return oTurn === false;
}
else {
	return xTurn === false
	return oTurn === true;
}

var whosTurn = function() {
	xTurn = true;
}
*/


var squarePick2 = function() {
	if (xTurn === true) {
		this.setAttribute("class", "xSquare");
		//move one in turn array
	}
	else if (oTurn === true) {
		this.setAttribute("class", "oSquare")
		//move one in turn array
	}
	else {
		console.log("We've got problems");
	}
}

var squarePick = function() {
	this.setAttribute("class", "xSquare");
//	var newH2 = this.createElement('h2');
//	newH2.textContent = 'X';
//	this.appendChild(newH2);
}



var bigDiv = document.getElementById('bigDiv');

var square1 = document.getElementById('square1');
square1.addEventListener("click", squarePick);

var square2 = document.getElementById('square2');
square2.addEventListener("click", squarePick);

var square3 = document.getElementById('square3');
square3.addEventListener("click", squarePick);

var square4 = document.getElementById('square4');
square4.addEventListener("click", squarePick);

var square5 = document.getElementById('square5');
square5.addEventListener("click", squarePick);

var square6 = document.getElementById('square6');
square6.addEventListener("click", squarePick);

var square7 = document.getElementById('square7');
square7.addEventListener("click", squarePick);

var square8 = document.getElementById('square8');
square8.addEventListener("click", squarePick);

var square9 = document.getElementById('square9');
square9.addEventListener("click", squarePick);

//CONSOLIDATE


var clearTheBoard = function() {
	square1.removeAttribute('class', 'xSquare');
	square1.setAttribute('class', 'square');
	square2.removeAttribute('class', 'xSquare');
	square2.setAttribute('class', 'square');
	square3.removeAttribute('class', 'xSquare');
	square3.setAttribute('class', 'square');
	square4.removeAttribute('class', 'xSquare');
	square4.setAttribute('class', 'square');
	square5.removeAttribute('class', 'xSquare');
	square5.setAttribute('class', 'square');
	square6.removeAttribute('class', 'xSquare');
	square6.setAttribute('class', 'square');
	square7.removeAttribute('class', 'xSquare');
	square7.setAttribute('class', 'square');
	square8.removeAttribute('class', 'xSquare');
	square8.setAttribute('class', 'square');
	square9.removeAttribute('class', 'xSquare');
	square9.setAttribute('class', 'square');
}


var clearButton = document.getElementById('clearBoard');
clearButton.addEventListener("click", clearTheBoard);

//bigDiv.appendChild(square1);


	//textContent = "Awwww yeahhhh";
//
micCheck();