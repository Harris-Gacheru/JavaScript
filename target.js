// Given an array of integers nums and an integer target, return indices of the two numbers that add up to target

const sum_target = (nums, target) => {
    const b4Sort = [...nums];   // before sort
    nums.sort((a,b) => a -b);   // sort array
    let index1, index2;
    let indices = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) return indices;

        for (let j = i + 1; j < nums.length; j++) {      
            if ((nums[i] + nums[j]) === target) {
                index1 = b4Sort.indexOf(nums[i]);
                index2 = b4Sort.indexOf(nums[j]);
                
                indices.push([index1, index2]);                    
            }              
        }      
    }
    return indices;
};

console.log(sum_target([0,3,4,5,1,2,6,7], 4));