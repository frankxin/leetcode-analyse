
/**
 *
 * Summary Ranges
 *
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 *
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 *
 * Author: Frankxin
 * Date: 2015.11.12
 *
 * My runtime beats 13.73% of javascript submissions , so it's needed to be optimized
 *
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var i,start,end,res = [];
  start = nums[0];
  end = nums[0];
  for(i=0;i<nums.length;i++){
    if(nums[i] + 1 === nums[i+1]){
      end = nums[i+1]
    }else{
      if(start === end){
        res.push(nums[i].toString());
      }else if(start < end){
        res.push(start + "->" + end);
      }
      start = nums[i+1];
      end = nums[i+1];
    }
  }
  return res;
};