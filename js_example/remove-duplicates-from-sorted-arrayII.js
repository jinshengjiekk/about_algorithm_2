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



function removeDuplicate_1(/*Array*/ arr) {
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		console.error('parameter error!');
		throw new Error('the type of arguments must be Array!');
	}

	if (arguments.length > 1) {
		console.warn("the arguments' length should be only one!");
	}

}