/**
 * Created by jinshengjie on 2016/11/1.
 *
 * =========================================
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 * ========================================
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}


// 利用指针移动，遇到相同的时候就将node的后指针跳过一个节点；
let deleteDuplicates;

deleteDuplicates = function (head) {
	if (!head || !head.next) {
		return head;
	}

	let current = head;
	let next = head.next;
	while (next) {
		/*
		 //此方法先判断前后两个节点的数值相不相等再做操作；
		 if (next.val === current.val) {
		 current.next = next.next;
		 } else {
		 current = next;
		 }
		 next = next.next;
		 }
		 */


// 此方法判断前后两个值是否不相等，不相等的话直接移动指针，相等则跳过；
		if (next.val !== current.val) {
			current.next = next;
			current = next;
		}
		next = next.next;

	}
	current.next = null;
	return head;
};