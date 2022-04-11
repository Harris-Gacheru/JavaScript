// find sum of numbers passed in an array

let numbers = [1,2,3,4,5];

// Reduce array to single value
let sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});

console.log(sum);

let shoppingCart = [
    {
        product: 'watch',
        qty: 1,
        price: 1200
    },
    {
        product: 'wallet',
        qty: 2,
        price: 500
    }
];

let total = shoppingCart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.qty * currentValue.price;
}, 0);

console.log(`Total: ${total}`);