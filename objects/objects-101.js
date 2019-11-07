let myBook = {
	title: "2020",
	author: "Sultan Ali",
	pageNumber: 999
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Road to Success";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

//name, age, location
//Inscrease age by 1 and print message again

let he = {
	name: "Richard",
	age: 33,
	location: "Mecca"
};

console.log(`${he.name} is ${he.age} and he lives in ${he.location}`);

he.age = he.age + 1;

console.log(`${he.name} is ${he.age} and he lives in ${he.location}`);
