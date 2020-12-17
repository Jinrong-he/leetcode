/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0,
        j = height.length - 1,
        _result = 0
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i)
        _result = Math.max(_result, area)
        if (height[i] <= height[j]) {
            ++i
        } else {
            --j
        }
    }
    return _result;
};
