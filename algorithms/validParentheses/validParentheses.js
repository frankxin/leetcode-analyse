/**
 * Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * The brackets must close in the correct order, 
 * "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * 
 * Author: Frankxin
 * Date: 2015.10.9
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 *
 * should be optimized
 */
var isValid = function(s) {
  var expArr, stack, i, l

  expArr = s.split("")
  stack = []
  for (i = 0, l = expArr.length; i < l; i++) {

    if ("{}[]()".indexOf(expArr[i]) !== -1 && "{[(".indexOf(expArr[i]) !== -1) {

      stack.push(expArr[i])

    } else if ("{}[]()".indexOf(expArr[i]) !== -1 && ")]}".indexOf(expArr[i]) !== -1) {

      switch (expArr[i]) {
        case ')':
          if (stack.pop() === "(") {

          } else {
            return false;
          }
          break;
        case ']':
          if (stack.pop() === "[") {

          } else {
            return false;
          }
          break;
        case '}':
          if (stack.pop() === "{") {} else {
            return false;
          }
          break;
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}