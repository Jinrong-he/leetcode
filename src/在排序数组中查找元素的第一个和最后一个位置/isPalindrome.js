/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//快慢指针+链表翻转
var isPalindrome = function(head) {
    if(head === null || head.next === null)
        return true;
    let fast =  head;
    let slow = head;
    let pre = head;
    let reversed = null;
    while(fast !== null && fast.next !== null){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
        pre.next = reversed;
        reversed = pre;
    }
    if(fast)
    {
        slow = slow.next;
    }
    while(slow && reversed){
        if(reversed.val !== slow.val)return false;
        reversed = reversed.next;
        slow=slow.next;
    }
    return true;


};
