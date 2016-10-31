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
		if (i < 2 || arr[j] != arr[i - 2]) {
			arr[i++] = arr[j];
		}
	}
	console.log(arr);
	return i;
}

/**
 *  箭头函数内部没有自己的this， arguments;
 * @param arr
 * @returns {number}  返回的是过滤后的长度，数组长度仍然没有变，后面的元素存在重复现象
 */
let removeDuplicate_2 = (/*Array*/ arr) => {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}
	let i = 1, j = 0, count = 1, l = arr.length;
	for (; i < l; i++) {
		if (arr[i] == arr[j]) {
			if (count < 2) {
				arr[++j] = arr[i];
				count++;
			}
		} else {
			arr[++j] = arr[i];
			count = 1;
		}
	}
	console.log(arr);
	return j + 1;
};

/**
 * 此方法比较难理解，比较绕
 * @param arr
 * @returns {number}  返回的是过滤后的长度，数组长度仍然没有变，后面的元素存在重复现象
 */
let removeDuplicate_3 = (/*Array*/ arr) => {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}
	let i = 0, j, cur = 0, l = arr.length;
	if(!l){
		return 0;
	}
	for(;i < l; ){
		for(j=i; j < l; j++){
			if(arr[i] != arr[j]){
				break;
			}
			if(j - i < 2){
				arr[cur++] = arr[j];
			}
		}
		i = j;
	}
	console.log(arr);
	return cur;
};

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

const arr00 = [];
const arr11 = [1, 1, 1, 2, 2, 2, 2, 3];
const arr22 = [54, 32, 31, 31, 23, 23, 23, 23, 23, 23, 23, 21, 21, 10, 10, 10, 2, 1];
const arr33 = [1, 2];
const arr44 = [1];
const arr55 = [1, 2, 3];
console.info(removeDuplicate_2(arr00));
console.info(removeDuplicate_2(arr11));
console.info(removeDuplicate_2(arr22));
console.info(removeDuplicate_2(arr33));
console.info(removeDuplicate_2(arr44));
console.info(removeDuplicate_2(arr55));

const arr000 = [];
const arr111 = [1, 1, 1, 2, 2, 2, 2, 3];
const arr222 = [54, 32, 31, 31, 23, 23, 23, 23, 23, 23, 23, 21, 21, 10, 10, 10, 2, 1];
const arr333 = [1, 2];
const arr444 = [1];
const arr555 = [1, 2, 3];
console.info(removeDuplicate_3(arr000));
console.info(removeDuplicate_3(arr111));
console.info(removeDuplicate_3(arr222));
console.info(removeDuplicate_3(arr333));
console.info(removeDuplicate_3(arr444));
console.info(removeDuplicate_3(arr555));