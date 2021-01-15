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
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let pre = head;
    let hasCycle = false;
    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow)
        {
            hasCycle = true;
            break;
        }
    }

    if(hasCycle){
        while(pre !== slow){
            pre = pre.next;
            slow = slow.next;
        }
        return pre;
    }
    return null;
};

//快慢指针
