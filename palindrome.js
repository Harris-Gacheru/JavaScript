// Given an integer x, return true if x is a palindrome integer.
// NB: split used on an array

const isPalindrome = (x) => {
    // reverse x
    const reverse = x.toString().split('').reverse().join('');
    
    if (x == reverse) {
        return true;
    }
    return false;
}

console.log(isPalindrome(1001));