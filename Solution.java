
public class Solution {

    public int fixedPoint(int[] arr) {

        int left = 0;
        int right = arr.length - 1;
        int smallestIndex_where_indexEqualsArrayElement = -1;

        while (left <= right) {

            int mid = left + (right - left) / 2;
            if (arr[mid] == mid) {
                smallestIndex_where_indexEqualsArrayElement = mid;
                right = mid - 1;
            } else if (arr[mid] < mid) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return smallestIndex_where_indexEqualsArrayElement;
    }
}
