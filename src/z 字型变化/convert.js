/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
 if(numRows===1) return s;
 let list= new Array();
 let currentRow=0;
 let goingDown=false;
 for(let i in s){
     list[currentRow]+=s[i];
     if(currentRow===0||currentRow===numRows-1){
         goingDown=!goingDown;
     }
     currentRow+=goingDown?1:-1;
 }
 let res='';
 list.forEach((i)=>{
     let tempStr=i.split('undefined').join("");
     res+=tempStr;
 })
return res;
};
