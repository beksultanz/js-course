let restaurant = {
	name: "Faiza",
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function(partySize) {
		return true;
	}
};

let partySize = restaurant.guestCapacity - restaurant.guestCount;
let status = restaurant.checkAvailability(7);
console.log(partySize);
