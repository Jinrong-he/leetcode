/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//  回溯+剪枝
var combinationSum = function(candidates, target) {
    function findAll(sum,arrange){
        if(sum===target){
            res.push(arrange.slice());
        }
        for(let item of candidates){
            //当前选择组合的和加上当前值应该小于target，剪去不合理组合
            //选择的元素都应该比当前选择组合最后一个选择元素大,剪去重复组合
            const last = (arrange[arrange.length-1]||0);
            if(sum+item<=target&&item>=last){
                arrange.push(item);
                findAll(sum+item,arrange);
                arrange.pop();
            }
        }
    }
    let res = [];
    findAll(0,[]);
    return res;
};
