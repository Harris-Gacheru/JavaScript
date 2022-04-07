// Given an array of integers nums and an integer target, return indices of the two numbers that up to target

const sum_target = (nums, target) => {
    // loop through nums to select the first operand
    for(let i = 0; i < nums.length; i++){
        // get second operand
        for(let j = 0; j < nums.length; j++){
            // check if sum of the two operands equals the target
            if ((nums[i] + nums[j]) === target) {
                console.log(`[${i}, ${j}]`);
            }
        }
    }
}

sum_target([1,2,1,5,7], 7);