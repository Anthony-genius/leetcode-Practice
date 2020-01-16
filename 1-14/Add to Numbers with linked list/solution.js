/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head, c= head,  one = l1, two = l2, carry = 0;
  

    while(one || two) {
        let x = 0, y = 0, sum = carry, next, tmpNode;
        if(one.val){
            x = one.val;
        }
        if(two.val){
            y = two.val;
        }
        sum += x + y;
        carry = Math.floor(sum / 10);
        next = sum % 10;
        tmpNode = new ListNode(next);
        if(head == null){
            head =  new ListNode(next);
            c = head;
        }else{
            c.next = tmpNode;
            c = c.next;
        }
      if(one.next != null){
        one = one.next;
      }else{
        one = false
      }
      if(two.next != null){
        two = two.next;
      }else{
        two = false
      }
    }
    if(carry > 0){
        let tmpNode= new ListNode(carry);
        c.next = tmpNode;
    }
    return head;
};