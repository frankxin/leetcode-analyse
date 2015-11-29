var NumArray = function(nums) {
    this.nums = nums;
    this.st = [];
    this.constructST();
};

//construct segment tree :: start
NumArray.prototype.constructSTUtil = function(segmentStart, segmentEnd, segmentTreeIndex){
  var mid;
  // 如果数组只包含一个元素
  // 将其存储与线段树的当前节点并返回
  if(segmentStart === segmentEnd){
    this.st[segmentTreeIndex] = this.nums[segmentStart];
    return this.st[segmentTreeIndex];
  }

  // 如果有不止一个元素，
  // 则递归计算左右子树，并将两者之和存储与节点内，并返回
  mid = this.getMid(segmentStart,segmentEnd);
  this.st[segmentTreeIndex] = this.constructSTUtil(segmentStart , mid ,segmentTreeIndex*2+1) + 
  this.constructSTUtil(mid+1, segmentEnd ,segmentTreeIndex*2+2);

  return this.st[segmentTreeIndex];
}

NumArray.prototype.constructST = function(){
  var n = this.nums.length;
  if(n === 0){
    return false;
  }
  this.constructSTUtil( 0, n-1, 0);
}
//construct segment tree :: end

//update array and segment tree :: start
NumArray.prototype.update = function(index, value){
  var n = this.nums.length,
      diff = value - this.nums[index]
  this.nums[index] = value;

  this.updateUtil(0,n-1,index,diff,0)
}

NumArray.prototype.updateUtil = function(segmentStart , segmentEnd , index , diff ,segmentTreeIndex){
  if(index < segmentStart || index > segmentEnd){
    return;
  }
  // 如果输入下标在节点范围之内,
  // 则更新节点及其孩子的值
  this.st[segmentTreeIndex] += diff;
  if (segmentStart != segmentEnd){
    var mid = this.getMid(segmentStart, segmentEnd);
    this.updateUtil(segmentStart, mid, index, diff, 2*segmentTreeIndex + 1);
    this.updateUtil(mid+1, segmentEnd, index, diff, 2*segmentTreeIndex + 2);
    }
}
//update array and segment tree :: end

//get sum :: start
NumArray.prototype.sumRange = function(start ,end){

  var self = this,
      n = this.nums.length;

  var getSumUtil = function(segmentStart ,segmentEnd , start, end, segmentTreeIndex){
    var mid;
    // 如果当前节点存储的线段是区间的一部分，
    // 返回当前线段的和
    if(segmentStart >= start && segmentEnd <= end){
      return self.st[segmentTreeIndex];
    }
    if(start > segmentEnd || end < segmentStart){
      return 0;
    }

    mid = self.getMid(segmentStart,segmentEnd);
    return getSumUtil(segmentStart ,mid ,start , end, 2*segmentTreeIndex+1) + 
           getSumUtil(mid+1 ,segmentEnd ,start , end, 2*segmentTreeIndex+2)
  }

  return getSumUtil(0,n-1,start,end,0);

}


NumArray.prototype.getMid = function(start , end){
  return start + Math.floor((end - start)/2);
}
