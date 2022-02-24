
/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {

    let left = 0;
    let right = arr.length - 1;
    let smallestIndex_where_indexEqualsArrayElement = -1;

    while (left <= right) {

        let mid = left + Math.trunc((right - left) / 2);
        if (arr[mid] === mid) {
            smallestIndex_where_indexEqualsArrayElement = mid;
            right = mid - 1;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return smallestIndex_where_indexEqualsArrayElement;
};
