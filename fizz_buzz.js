// Write a program that prints numbers from 1 to 100. But for multiples of three print ‘FIZZ’ instead of the number and the multiples of three and five print ‘FIZZBUZZ’.

for(let i = 1; i <= 100; i++){ // loop through 1 - 100
    // if else statement
    if (i%15 === 0) { // check for multiples of 15
        console.log("FIZZBUZZ");
    }
    else if (i%3 === 0) { // check for multiples of 3
        console.log("FIZZ");
    }
    else if (i%5 === 0) { // check for multiples of 5
        console.log("BUZZ");
    }
    else { // print the rest of the numbers
        console.log(i);
    }

    // ternary operator
    // i%15 === 0 ? 
    //     console.log('FIZZBUZZ') : i%3 === 0 ? 
    //         console.log('FIZZ') : i%5 === 0 ? 
    //             console.log('BUZZ') : console.log(i);
}