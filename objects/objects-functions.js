let myBook = {
	title: "2020",
	author: "Sultan Ali",
	pageCount: 999
};

let otherBook = {
	title: "Positive Thinking",
	author: "Mark Twain",
	pageCount: 777
};

let getSummary = function(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount} pages long`
	};
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);

// Challenge - ---- ----- -- - -

let convertFahrenheit = function(fahrenheit) {
	return {
		fahrenheit: fahrenheit,
		celcius: (fahrenheit - 32) * (5 / 9),
		kelvin: (fahrenheit + 459.67) * (5 / 9)
	};
};

let temp = convertFahrenheit(77);

console.log(temp);
