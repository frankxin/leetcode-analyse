/**
 * Created by frankxin on 15/11/3.
 */

/**
 * Two Sum
 *
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 *
 * Author: Frankxin
 * Date: 2015.11.3
 */

var twoSum = function(){
  var i,
      len = nums.length,
      re = [],
      map = {};

  for (i=0;i<len;i++){
    var a = nums[i],
       newTarget = target - a;

    if(map[newTarget] !== undefined){
      var index = map[newTarget] + 1;
      re[0] = Math.min(i+1,index);
      re[1] = Math.max(i+1,index);
      return re
    }
    map[nums[i]] = i
  }
};
