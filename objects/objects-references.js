let myAccount = {
	name: "Sultan Ali",
	income: 0,
	expenses: 0
};

let addIncome = function(account, income) {
	account.income = account.income + income;
};

let addExpense = function(account, amount) {
	account.expenses = account.expenses + amount;
};

let resetAccount = function(account) {
	account.expenses = 0;
	account.income = 0;
};

let getAccountSummary = function(account) {
	let balance = account.income - account.expenses;
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`;
};

addIncome(myAccount, 500);
addExpense(myAccount, 59);
addExpense(myAccount, 35);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
