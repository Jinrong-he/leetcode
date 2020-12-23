/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    help(res, "", 0, 0, n);
    return res;
};

function help(res, cur, open, close, n) {
    if (cur.length === 2 * n) {
        res.push(cur);
        return;
    }

    if (open < n) {
        help(res, cur + "(", open+1, close, n)
    }
    if (close < open) {
        // 为保证括号有效，闭合括号的出现次数必须比开始括号的次数少
        help(res, cur + ")", open, close+1, n);
    }
}
