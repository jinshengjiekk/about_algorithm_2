/**
 * Created by jinshengjie on 2016/10/25.
 * ===================================================================================================
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 * For example,
 * Given sorted array nums = [1,1,1,2,2,3],
 * Your function should return length = 5,
 * with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
 * ===================================================================================================
 */


/**
 *
 * @param arr
 * @returns {number}  返回的是过滤后的长度，数组长度仍然没有变，后面的元素存在重复现象
 */
function removeDuplicate_1(/*Array*/ arr) {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}

	if (arguments.length > 1) {
		console.warn("the arguments' length should be only one!");
	}

	let i = 0, j = 0, l = arr.length;
	for (; j < l; j++) {
		if (i < 2 || arr[j] != arr[i-2]) {
			arr[i++] = arr[j];
		}
	}
	console.log(arr);
	return i;
}

//##################################################################################
const arr0 = [];
const arr1 = [1, 1, 1, 2, 2, 2, 2, 3];
const arr2 = [54, 32, 31, 31, 23, 23, 23, 23, 23, 23, 23, 21, 21, 10, 10, 10, 2, 1];
const arr3 = [1, 2];
const arr4 = [1];
const arr5 = [1, 2, 3];
console.info(removeDuplicate_1(arr0));
console.info(removeDuplicate_1(arr1));
console.info(removeDuplicate_1(arr2));
console.info(removeDuplicate_1(arr3));
console.info(removeDuplicate_1(arr4));
console.info(removeDuplicate_1(arr5));