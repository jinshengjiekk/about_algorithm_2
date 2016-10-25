/**
 * Created by JINSHENGJIE on 16/10/25 .
 *============================================================================================================================
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 * Subscribe to see which companies asked this question
 * =============================================================================================================================
 */


/**
 *
 * @param arr
 * @returns {number}
 */
function removeDuplicatesFromSortedArray(/*Array*/ arr) {
	let l = arr.length;
	let i = 0, j = 1;
	for (; i < l; i++, j++) {
		if (arr[i] === arr[--j]) {
			continue;
		}
		arr[++j] = arr[i];
	}
	return j;
}


//###################################################################
const arr = [1, 1, 3, 3, 3, 4, 4, 5, 6, 7, 8,];
console.group('removeDuplicatesFromSortedArray');
console.info(arr);
console.log(removeDuplicatesFromSortedArray(arr));
console.info(arr);
console.groupEnd();