/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    const n = Math.floor(nums.length / 2);
    for (let i = 0; i<= n; i++) {
        if (nums[i] === nums[i + n]) {
            return nums[i];
        }
    }
    return -1;
};
