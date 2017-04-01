// plik scripts.js
	var a = 5;
	var b = 6;
		var value = (a * a) + (2 * a * b) - (b * b);
		console.log('Wynik: ' + value);

	if (value => 0) {
		console.log('wynik dodatni');
	}
	else if (value < 0) {
		console.log('wynik ujemny');
	}

	if (value == 0) {
		console.log('wynik równy 0');
	}
	else if (value != 0) {
		console.log('wynik nie jest równy 0');
	}