/**
 * Single Number
 *
 * Given an array of integers, every element appears twice except for one. 
 * Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. 
 * Could you implement it without using extra memory?
 *
 * Author: Frankxin
 * Date: 2015.10.10
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 利用hashmap数组去重的思路
 */
var singleNumber = function(nums) {

    var hashmap = {},
        i = 0,
        p

    for (i = 0; i < nums.length; i++) {
      if(hashmap[nums[i]] === undefined){
        hashmap[nums[i]] = true
      }else{
        delete hashmap[nums[i]]
      }
    }

    for(p in hashmap) return parseInt(p)

};