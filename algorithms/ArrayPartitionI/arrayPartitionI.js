/**
 * 
 * https://leetcode.com/problems/array-partition-i/description/
 * 
 * Time complexity of fast sort is nlog(n)
 * 
 * Proof：
 * Assume in each pair i, bi >= ai. (1)
 * Denote Sm = min(a1, b1) + min(a2, b2) + ... + min(an, bn). The biggest Sm is the answer of this problem. Given 1, Sm = a1 + a2 + ... + an.
 * Denote Sa = a1 + b1 + a2 + b2 + ... + an + bn. Sa is constant for a given input.
 * Denote di = |ai - bi|. Given 1, di = bi - ai. Denote Sd = d1 + d2 + ... + dn.
 * So Sa = a1 + a1 + d1 + a2 + a2 + d2 + ... + an + an + dn = 2Sm + Sd => Sm = (Sa - Sd) / 2. To get the max Sm, given Sa is constant, we need to make Sd as small as possible.
 * So this problem becomes finding pairs in an array that makes sum of di (distance between ai and bi) as small as possible. Apparently, sum of these distances of adjacent elements is the smallest. If that's not intuitive enough, see attached picture. Case 1 has the smallest Sd.
 * 
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 */
var arrayPairSum = function(nums) {
    var sum = 0, i=0;
    
    nums.sort(function(a,b){return a-b});
    
    for(i=0; i<nums.length; i = i+2){
        sum += nums[i];
    }
    
    return sum;
};