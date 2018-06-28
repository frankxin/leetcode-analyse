/**
 * 
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 * 
 * O(n) time, O(n) space
 * This is a solution but it will consume O(n) extra space.
 * We need to find a solution which consume O(1) space
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = {}
    let res = []
    nums.forEach((num)=>{
        if(map[num]){
            map[num]++
        }else{
            map[num]=1
        }
    })
    for(let key in map){
        if(map[key]>1)
            res.push(parseInt(key))
    }
    return res
}

//This is an better answer
//with o(1) space and o(n) time
//Take the advantage of the fact that 
//Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//We need a way to indicate that a number has been accessed
//Use The index of array and corresponding array item as a boolean flag， we can store the information
var findDuplicates = function(nums) {
    let res = []
    nums.forEach((num, i)=>{
        let idx = Math.abs(num)-1
        if(nums[idx]<0)
            res.push(Math.abs(num))
        nums[idx] *= -1
    })
    return res
}

