
$(document).ready(function() {


var display = $("#screen");
var number = 0;
var newNumber = "";
var numberArray = [];
var operator = "";

function calculation() {
	switch (operator) {
		case "+":
			number += newNumber;
			console.log(number);
			break;
		case "-":
			number -= newNumber;
			console.log(number);
			break;
		case "*":
			number *= newNumber;
			console.log(number);
			break;
		case "/":
			number /= newNumber;
			console.log(number);
			break;
	}
	if (number.length > 30) {
		display.html('Beep boop..err..too large..boop beep');
	} else {
		display.html(number);
	}
	return number;
}

	//determine which key is pressed
	$(".input-key").click( function() {
		//get the data value of that key 
		var value = $(this).data("value");
		
		//removes 0 when first number entered
		if (display.html() === "0" && (!isNaN(value) || value === ".")) {
			display.html("");
		}

		//sets screen briefly to "" in order to enter a new number
		if (numberArray.length === 0) {
			display.html("");
		}

		//Clears all data
		if (value === "clear") {
			number = 0;
			newNumber = "";
			numberArray = [];
			operator = "";
			display.html("0");
			console.log('cleared');
			return;
		}

		//Just deletes the last number entered
		if (value === "delete") {
			numberArray.pop();
			display.html(numberArray);
			console.log('deleted');
			return;
		}


		//if the key pressed is a number or '.' show it on the screen and store the value in an array 
		if (!isNaN(value) || value === ".") {
			display.append(value);
			numberArray.push(value);

		} else {
			
			number = newNumber; //equal to first number entered

			//join the values of the array, and return the complete number
			numberArray = numberArray.join("");
			newNumber = parseFloat(numberArray);
			console.log(newNumber);
			numberArray = []; //reset numberArray to empty array to await new numbers

				
			//if a number has been stored and a previous operator has been set, perform calculation
			if ( (newNumber !== "") && (operator !== "") ) {
				console.log('operator pressed, calculating...');
				calculation();
				newNumber = number;
			}

			//when an operation key is pressed, store the value in the operator variable
			operator = value;
		}

	});
				



}); //end document.ready




