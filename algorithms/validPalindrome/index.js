/**
 * 125. Valid Palindrome 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Author: zhaoxin zhang
 * Date: 2016.6.23
 * 
 * @param {string} s
 * @return {boolean}
 */

/**
 * 这种方式过于思路化，用了过多的内部方法实现，导致执行效率变得很低
 */
var isPalindrome = function(s) {
    //cut string or pick string
    var sArr = s.split("");
    if(!sArr.length){
        return true;
    }
    sArr = sArr.filter(function(v,i){
        if(('a' <= v && v <= 'z') || ('A'<=v && v<='Z') || ('0'<=v && v<='9')){
            return true;
        }else{
            return false;
        }
    });
    
    var orinalStr = sArr.join("").toLowerCase();
    if(sArr.reverse().join("").toLowerCase() === orinalStr){
        return true;   
    }else{
        return false;
    }
};

/**
 * 修改后此版本的效率提升了，但是比较字符串位置的时候应该比较耗时，此处可以继续优化，直接比较charcode.
 * 但是此时，变换大小写的函数要重写，因为不支持charcode参数
 */
var isPalindrome = function(input) {
    var start = 0;
    var end = input.length - 1;
    while (start < end) {
        var s = input.charAt(start);
        var e = input.charAt(end);

        if (!isLetter(s)) {
            start++;
            continue;
        }
        if (!isLetter(e)) {
            end--;
            continue;
        }

        if (s.toLowerCase() !== e.toLowerCase()) {
            return false ;
        } 
        start++;
        end--;
  }
  return true;
}

var isLetter = function(code) {
    if (('a' <= v && v <= 'z') || ('A'<=v && v<='Z') || ('0'<=v && v<='9')) { 
        return true
    } else {
        return false
    }
}
