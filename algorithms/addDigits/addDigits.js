/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 *
 * Author: Frankxin
 * Date: 2015.10.8
 * 
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigitsRecursive = function(num) {
  var s,sArray,i,re = 0;

  s = new String(num)

  sArray = s.split("")

  for (i = 0; i < sArray.length; i++) {
    re += parseInt(sArray[i])
  }

  console.log(re);

  if(re < 10){
    return re
  }else{
    return addDigits(re)
  }
};

//todo non-recursive