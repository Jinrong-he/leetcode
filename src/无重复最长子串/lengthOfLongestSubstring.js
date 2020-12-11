/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr =[];
    let max =0;
    for(let char of s){
        let index=arr.indexOf(char)
        if(index!=-1){
            arr.splice(0,index+1);
        }
    arr.push(char);
        max=Math.max(arr.length,max);
    }
    return max;

};
