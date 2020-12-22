/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits.length === 0) {
        return []
    }

    const dictionary = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    let result = [];

    const dfs = (str, index) => {
        // 当 index 等于 原始字符串时，说明当前分支已经组合完毕
        // 可以结束递归了
        if(index >= digits.length) {
            result.push(str)
            return
        }
        // 获取当前数字对应的 字母集合
        let map = dictionary[digits[index]];
        // 处理 1 、0 等异常边界
        if(map) {
            // 当前字母集合中的每一个元素和上层递归中生成的更多的字符组合
            for(let i of map) {
                // 需要加入组合的位置向后移动
                dfs(str+i, index+1);
            }
        }
    }
    // 从字符串第一个位置开始组合
    dfs('', 0);

    return result

};
