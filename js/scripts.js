$(document).ready(function() {
	function add(number1, number2) {
		return number1 + number2;
	}

	function subtract(number1, number2) {
		return number1 - number2;
	}

	function mutiply(number1, number2) {
		return number1 * number2;
	}

	function divide(number1, number2) {
		return number1 / number2;
	}

	function toF(celsius) {
		return (celsius * 1.8) + 32;
	}

	function toC(degrees) {
		return (degrees - 32) / 1.8;
	}

	const num1 = parseInt(prompt("What is the first number?"));
	const num2 = parseInt(prompt("What is the second number?"));


	alert(toC(num1));

});