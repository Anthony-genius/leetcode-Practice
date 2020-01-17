/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let r = 0;
    while (head) {
        r = r*2 + head.val;
        head = head.next;
    }
    return r;
};


// test case
// #1
//     Input: head = [1,0,1]
//     Output: 5

// #2
//     Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
//     Output: 18880