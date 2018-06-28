/**
 * 
 * https://leetcode.com/problems/toeplitz-matrix/description/
 * 
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let i = 0 ; i<matrix.length-1; i++ ){
    	for(let j = 0; j<matrix[i].length-1;j++){
    		if(matrix[i][j]!==matrix[i+1][j+1]) return false;
    	}  	
    }
    return true;
};


/**
 * 
 * @param {number[][]} matrix
 * WTF???
 * Wrong Traversal
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let flag = true
    for(let i=0; i<matrix.length; i++){
        if(!flag)
            break
        let benchMark = matrix[i][0]
        for(let j=i, count=0; j<matrix.length; j++, count++){
            if(!flag)
                break
            let currItem = matrix[j][count]
            if(currItem === undefined)
                break
            flag = (benchMark == currItem)
        }
    }
    for(let i=1; i<matrix[0].length; i++){
        if(!flag)
            break
        let benchMark = matrix[0][i]
        for(let j=0, count=i; j<matrix.length; j++, count++){
            if(!flag)
                break
            let currItem = matrix[j][count]
            if(currItem === undefined)
                break
            flag = (benchMark == currItem)
        }
    }
    return flag
}