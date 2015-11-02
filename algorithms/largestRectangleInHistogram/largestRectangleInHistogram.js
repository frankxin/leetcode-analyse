/**
 * Largest Rectangle in Histogram My Submissions Question
 * 
 * Given n non-negative integers representing the histogram's bar height 
 * where the width of each bar is 1, find the area of largest rectangle in the histogram.
 * Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 * 
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 * For example,
 * Given height = [2,1,5,6,2,3],
 * return 10.
 * 
 * Author: Frankxin
 * Date: 2015.10.31
 *
 */

/**
 * @param {number[]} height
 * @return {number}
 * Timeout fuck  = =
 */
var largestRectangleArea = function(height) {
    var i, coreToBack, coreToForward, maxCounter, maxHeight = 0
    for (i = 0; i < height.length; i++) {
        coreToBack = i
        coreToForward = i
        maxCounter = 1
        while (coreToBack) {
            if (height[i] <= height[--coreToBack]) {
                maxCounter++
            } else {
                break
            }
        }
        while (coreToForward < height.length - 1) {
            coreToForward++
            if (height[i] <= height[coreToForward]) {
                maxCounter++
            } else {
                break
            }
        }
        if (maxHeight < height[i] * maxCounter) {
            maxHeight = height[i] * maxCounter
        }
    }
    return maxHeight
};