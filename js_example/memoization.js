/**
 * Created by jinshengjie on 2016/10/19.
 *
 * ========================================================
 * Memoization ensures that a function doesn't run for the same inputs more than once
 * by keeping a record of the results for given inputs (usually in an object).
 *
 * Memoization is a common strategy for dynamic programming problems, which are problems where the solution is composed
 * of solutions to the same problem with smaller inputs (as with the fibonacci problem, above). The other common strategy
 * for dynamic programming problems is going bottom-up, which is usually cleaner and often more efficient.
 * ========================================================
 */



// bad
function fibRecursive(n) {
	if (n === 0 || n === 1) {
		return n;
	}
	console.log('computing fibRecursive(' + n + ')');
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

/*
 fibRecursive(6);
 computing fibRecursive(6)
 computing fibRecursive(5)
 computing fibRecursive(4)
 computing fibRecursive(3)
 computing fibRecursive(2)
 computing fibRecursive(2)
 computing fibRecursive(3)
 computing fibRecursive(2)
 computing fibRecursive(4)
 computing fibRecursive(3)
 computing fibRecursive(2)
 computing fibRecursive(2)
 8
 */

//***************************************************************************************************************
// good
function Fibber() {
	this.memo = {};
}

Fibber.prototype.fib = function (n) {

	// edge case
	if (n < 0) {
		throw new Error('Index was negative. No such thing as a negative index in a series.');

		// base cases
	} else if (n === 0 || n === 1) {
		return n;
	}

	// see if we've already calculated this
	if (this.memo.hasOwnProperty(n)) {
		console.log('grabbing memo[' + n + ']');
		return this.memo[n];
	}

	console.log('computing fib(' + n + ')');
	var result = this.fib(n - 1) + this.fib(n - 2);

	// memoize
	this.memo[n] = result;

	return result;
};

/*
 new Fibber().fib(6);
 computing fib(6)
 computing fib(5)
 computing fib(4)
 computing fib(3)
 computing fib(2)
 grabbing memo[2]
 grabbing memo[3]
 grabbing memo[4]
 8
 */
