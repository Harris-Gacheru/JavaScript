// Given an array of integers nums and an integer target, return indices of the two numbers that add up to target

const sum_target = (nums, target) => {
    const b4Sort = [...nums];   // before sort
    nums.sort((a,b) => a -b);   // sort array
    let index1, index2;
    let indices = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) return;

        for (let j = 0; j < nums.length; j++) {
            if (i != j) {   // avoid repeating the same index       
                if ((nums[i] + nums[j]) === target) {
                    if (nums[i] === nums[j]) {  // if operands have the same value
                        index1 = b4Sort.indexOf(nums[i]);
                        index2 = b4Sort.lastIndexOf(nums[j]);
                        indices.push([index1, index2]);
                    } else {
                        index1 = b4Sort.indexOf(nums[i]);
                        index2 = b4Sort.indexOf(nums[j]);
                        indices.push([index1, index2]);
                    }
                }  
            }
        }      
        // console.log(indices); 
    }
    return indices;
};

// sum_target([3,1,2,2,4,5,8,11], 4);