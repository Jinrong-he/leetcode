/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (! head || ! head.next) {
        return head;
    }
let curr = head;
let res = head;
let len = 1;
while(curr.next)
{
    len++;
    curr=curr.next;
}
curr.next = head;
let step=k % len
while(++step<len)
{
    res = res.next;
}
let temp = res;
res = res.next;
temp.next = null;
return res;

};
