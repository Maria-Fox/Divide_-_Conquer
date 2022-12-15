// time complexity = O(log n)

function countZeroes(arr) {
  // create pointers to move throughout the arr
  let left_idx = 0;
  let right_idx = arr.length - 1;
  

  if (arr.length === 0 || arr[arr.length-1] === 1 ){
    // if empty arr or the last item in array is a 1 there are no 0's
    return 0;
  } else if(arr[0] === 0){
    // if we begin w/ Zero there's no need to dividide. The length = 0's
    return arr.length;
  }
  
  // we add one bc we already checked the first index above.
  while(left_idx + 1 < right_idx) {
    // update mid_idx based on pointers moved in if's
    let mid_idx = Math.floor((left_idx + right_idx) / 2);

    if(arr[mid_idx] === 0){
      right_idx = mid_idx;
    } else if (arr[mid_idx] === 1){
      left_idx = mid_idx;
    }
  }

  // subtract the index at which the first zero appears to return the total of 0's in the array
  return arr.length - right_idx;
};

module.exports = countZeroes

// Ex: countZeroes([1,1,1,0,0,0,0,0]);
// 5


// ______________
// linear would be O(n) , for this I would just filter out the 0's and return the length 