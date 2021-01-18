/**
 * @param {string} S
 * @return {number}
 */

var scoreOfParentheses = function(S) {
    let stack = [0];
    for(let item of S){
        if(item === '(')
            stack.push(0);
        else{
            let first = stack.pop();
            let second = stack.pop();
            stack.push(second + Math.max(2*first, 1));
        }
    }
    return stack.pop();
};
