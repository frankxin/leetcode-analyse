/**
 * 220. Contains Duplicate III
 * Given an array of integers, 
 * find out whether there are two distinct indices i and j in the array , 
 * such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
 * Author: zhaoxin zhang
 * Date: 2016.6.22
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if(!(nums instanceof Array) || nums.length < 2){
    return false;
  }
  var indexArr = new Array(nums.length);
  for(let i = 0;i<indexArr.length;i++){
    indexArr[i] = i;
  }
  indexArr = indexArr.sort(function(a,b){
    return nums[a] - nums[b]
  })
  for(let i = 0;i<indexArr.length;i++){
    var x = indexArr[i];
    for(let j = i+1;j<indexArr.length;j++){
      var y = indexArr[j];
      var diff = nums[y] - nums[x];
      var indexdiff = x > y ? x-y : y-x;

      if(diff > t) break;
      if(indexdiff <= k) return true;
    }
  }
}
