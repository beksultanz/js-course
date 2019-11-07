// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 2, 6)
console.log(result)


// Default arguments

let getPriceTag = function (item = 'used', price = 0) {
    return `Item: ${item} , Price: ${price}`

}

let priceTag = getPriceTag("apple", 999)
console.log(priceTag)


// Default arguments

let getTip = function (total, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)

