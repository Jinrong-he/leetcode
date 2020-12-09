/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p1=l1;
    var p2=l2;
    var dummy = new ListNode(-1);
    var p= dummy;
    var carry=0,newVal=0;
    while(p1!=null ||p2!=null|| carry>0){
     newVal = (p1 ==null ?0:p1.val)+(p2==null?0:p2.val)+carry;
     carry= newVal/10;
     newVal %=10;
     p.next=new ListNode(newVal);
     p1=p1==null?null:p1.next;
     p2=p2==null?null:p2.next;
     p=p.next;
    }
     return dummy.next;
};
