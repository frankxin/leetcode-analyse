/**
 * Evaluate Reverse Polish Notation
 * 
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 * 
 * Some examples:
 *   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 *   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 *
 * Author: Frankxin
 * Date: 2015.10.24
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var i,
      len = tokens.length,
      stack = []

  for (i=0; i<len; i++) {

    if ("+-*/".indexOf(tokens[i]) === -1) {
      stack.push(tokens[i])
    } else {
      var op1 = stack.pop(),
          op2 = stack.pop()

      switch (tokens[i]) {
        case "+":
          stack.push(parseInt(op1) + parseInt(op2))
          break;
        case "-":
          stack.push(parseInt(op2) - parseInt(op1))
          break;
        case "*":
          stack.push(parseInt(op1) * parseInt(op2))
          break;
        case "/":
          stack.push(parseInt(op2) / parseInt(op1))
          break;
      }
    }
  }
  
  if (stack.length === 1) {
    return parseInt(stack[0])
  }
};