// Undefined for variable 
let name
name = "Sultan"
if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value 
let ATM = function (dollar) {
    console.log(dollar)
}

let result = ATM()
console.log(result)

//Null as assigned value

let age = 27

age = null

console.log(age)
