// Write a program that takes a set of numbers and return the sum of all the numbers passed

const printSum = (...nums) => {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];        
    }
    return sum;
}

console.log(printSum(5,4,2));