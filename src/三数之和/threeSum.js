/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => { return a - b })
    let res = []
    for (k = 0; k < nums.length; k++) {
        if (nums[k] > 0) break
        if (k > 0 && nums[k] === nums[k - 1]) continue
        let i = k + 1
        let j = nums.length - 1

        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j]
            if (sum === 0) {
                res.push([nums[k], nums[i], nums[j]])
                while (nums[i] === nums[++i]) { }
                while (nums[j] === nums[--j]) { }
            } else if (sum < 0) {
                i++
            } else {
                j--
            }
        }
    }
    return res
};
