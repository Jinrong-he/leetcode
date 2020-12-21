/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min = Math.pow(10,7); //由范围可知sum和target的最大差值为10^7次方
    let len = nums.length;
    nums.sort((a,b)=>a-b); //排序
    let sum = 0;
    let ans = nums[0]+nums[1]+nums[2];
    for(var i=0;i<len-1;i++){
        let L = i+1;
        let R = len-1;
        while(L<R){
            differ = Math.abs(nums[i] + nums[L] + nums[R] - target); //差值，取绝对值
            sum = nums[i] + nums[L] + nums[R];
            if(differ<min){
                min = differ;
                ans = sum;
            }
            if(sum>target){
                R--
            }else if(sum<target){
                L++;
            } else{
                return ans;
            }
        }
    }
    return ans;
};
