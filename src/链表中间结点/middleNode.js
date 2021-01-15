/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//快慢指针
var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next)
    {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
