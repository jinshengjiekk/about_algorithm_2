/**
 * Created by jinshengjie on 2016/10/24.
 *
 * =================================================================================
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 * ==================================================================================
 *
 */

/**
 *
 * @param arr 传入数组
 * @param value 传入需要过滤的参数
 * @returns {number} 数组的长度实际上是没有变化的，实际返回的是过滤后的表象长度。
 */
function removeElement(arr, value) {
	let length = arr.length;
	let i = 0, j = 0;
	for (; i < length; i++) {
		if (arr[i] === value) {
			continue;
		}
		arr[j++] = arr[i];
	}
	return j;
}

//===============================================
const arr = [2, 3, 4, 4, 2, 1, 5, 3, 5, 3, 6];
let value = 3;
console.group("TEST");
console.info(arr);
console.log(removeElement(arr, value));
console.info(arr);
console.groupEnd();


