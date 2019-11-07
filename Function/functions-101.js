// Function - input(argument), code, output 

let muslim = function () {
    console.log("Assalam Aleikum")
}

muslim()
muslim()
muslim()

//------------------------------------

let ATM = function (dollar) {
    let result = dollar * dollar
    return result
}

let cash = ATM(5)
let check = ATM(100)

console.log(cash)
console.log(check)

//-------------------------------------


let temp = function (Fah) {
    let celsius = (Fah - 32) / 1.8
    return celsius
}

let tempOne = temp(80)
let tempTwo = temp(190)

console.log(tempOne)
console.log(tempTwo)
