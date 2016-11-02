/**
 * Created by jinshengjie on 2016/11/3.
 *
 * =======================================
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * For example,
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
 * =======================================
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

let deleteDuplicates;

deleteDuplicates = function (head) {
	if(head == null || head.next == null){
		return head;
	}


};