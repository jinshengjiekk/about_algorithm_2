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
 * @returns {number} 返回的仅仅是原数组被删除选定元素后的表象长度，数组的长度仍然不变，元素会有变动，后面的元素会重复。
 */
function removeDuplicatesFromSortedArray_1(/*Array*/ arr) {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}

	if (arguments.length > 1) {
		console.warn("the arguments' length should be only one!");
	}

	let l = arr.length;
	if (!l) {
		return 0;
	}
	let i = 0, j = 1;
	for (; i < l; i++, j++) {
		if (arr[i] === arr[--j]) {
			continue;
		}
		arr[++j] = arr[i];
	}
	return j;
}

/**
 * 此方法相对简单易懂
 * @param arr
 * @returns {number}
 */
function removeDuplicatesFromSortedArray_2(/*Array*/ arr) {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}

	if (arguments.length > 1) {
		console.warn("the arguments' length should be only one!");
	}

	let l = arr.length;
	if (!l) {
		return 0;
	}
	let i = 1, j = 0;
	for (; i < l; i++) {
		if (arr[i] !== arr[j]) {
			arr[++j] = arr[i];
		}
	}
	return j + 1;
}


//###################################################################
const arr = [1, 1, 3, 3, 3, 4, 4, 5, 6, 7, 8,];
console.group('removeDuplicatesFromSortedArray_1');
console.info(arr);
console.log(removeDuplicatesFromSortedArray_1(arr));
console.info(arr);
console.groupEnd();

//------------------------------------------------------------------
const arr2 = [1, 1, 3, 3, 3, 4, 4, 5, 6, 7, 8,];
console.group('removeDuplicatesFromSortedArray_2');
console.info(arr2);
console.log(removeDuplicatesFromSortedArray_2(arr2));
console.info(arr2);
console.groupEnd();