let temp = 55;

if (temp >= 60 && temp <= 90) {
	console.log("It is very good outside!");
} else if (temp <= 32 || temp >= 110) {
	console.log("It is dangerous to go outside!");
} else {
	console.log("Do as you wish!");
}

// Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
	console.log("Here is your special vegan menu");
} else if (isGuestOneVegan || isGuestTwoVegan) {
	console.log("Please have your one regular and special vegan menu");
} else {
	console.log("Please take your regular menu");
}
