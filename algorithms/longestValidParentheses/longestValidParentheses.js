/**
 * Longest Valid Parentheses
 * 
 * Given a string containing just the characters '(' and ')', 
 * find the length of the longest valid (well-formed) parentheses substring.
 * 
 * For "(()", the longest valid parentheses substring is "()", which has length = 2.
 * 
 * Another example is ")()())", where the longest valid parentheses substring is "()()", 
 * which has length = 4.
 *
 * Author: Frankxin
 * Date: 2015.10.26
 */
var longestValidParentheses = function(s) {
  var i,
    last = -1,
    maxLen = 0,
    expArr = [],
    stack = []

    expArr = s.split("")

  for (i = 0; i < expArr.length; i++) {
    if (expArr[i] === '(') {
      stack.push(i)
    } else if (expArr[i] === ')') {
      if (stack.length === 0) {
        last = i
      } else {
        stack.pop()
        if (stack.length === 0) {
          maxLen = Math.max(maxLen, i - last)
        } else {
          maxLen = Math.max(maxLen, i - stack[stack.length - 1])
        }
      }
    }
  }

  return maxLen
}