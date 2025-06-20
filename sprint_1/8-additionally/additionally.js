// Код задания 1

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
    let count = n;
    return function () {
        console.log(count++);
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


// Код задания 2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let result = init;
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        result = fn(result, nums[i]); // получается, result + следущее число в массиве. наприме:
        // nums = [1,2,3,4]
        // fn = function sum(accum, curr) { return accum + curr; }
        // init = 0
        // result = 0 + 1 = 1
        // result = 1 + 2 = 3
        // result = 3 + 3 = 6
        // result = 6 + 4 = 10
    }
    return result;
};


// Код задания 3
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    return function(...args) {

    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// Код задания 4
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
        const result = await Promise.all([promise1, promise2]);
        return (result[0] + result[1]);
};


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Код задания 5

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    const result = [];
    let arr2 = [];
    for (const i of arr){
        arr2.push(i);
        if(arr2.length === size){
            result.push(arr2);
            arr2 = [];
        }
    }
    if (arr2.length > 0){
        result.push(arr2);
    }
    return result;
};


// Код задания 6

// Код задания 7

// Код задания 8

// Код задания 9

// Код задания 10
