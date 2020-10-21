// Business Logic
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

// User Logic
$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		event.preventDefault();
		const num1 = parseInt($("#add1").val());
		const num2 = parseInt($("#add2").val());
		const result = add(num1, num2);
			$("#output").text(result);

	});
});

	// function toF(celsius) {
	// 	return (celsius * 1.8) + 32;
	// }

	// function toC(degrees) {
	// 	return (degrees - 32) / 1.8;
	// }