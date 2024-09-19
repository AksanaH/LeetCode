// https://leetcode.com/problems/two-sum/


var twoSum = function (nums, target) {
    let indexObj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let difference = target - num;
        if (difference in indexObj) {
            return [indexObj[difference], i]
        }
        indexObj[num] = i;
    }

};

console.log(twoSum([1, 2, 3], 4));