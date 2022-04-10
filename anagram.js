const isAnagram = (a, b) => {
    if (a.length != b.length) return;

    input1 = a.split('').sort().join('');
    input2 = b.split('').sort().join('');
    
    if (input1 == input2) {
        return true;
    } else{
        return false;
    }
}

console.log(isAnagram('india', 'ndyai'));