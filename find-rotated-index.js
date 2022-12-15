function findRotatedIndex(arr, target) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;

  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    console.log("mid is", mid);
    console.log(arr[mid], "id mid array value")

    if (arr[mid] === target) {
      return mid;
    };


    if (arr[mid] < target) {
      if (arr[upper] < target && arr[lower] > target) {
        upper = mid - 1;
        console.log("new upper is ", upper)
      } else {
        lower = mid + 1;
        console.log("new lower is ", lower)
      }
    }

    if (arr[mid] > target) {
      console.log("mid array val is greater than target")
      if (arr[lower] <= target) {
        upper = mid - 1;
        console.log("new upper")
      } else {
        lower = mid + 1;
        console.log("new lower")
      }
    }
  }

  return -1;
}

// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8);
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6

module.exports = findRotatedIndex

// Array input:

// lowest point is in the middle
// test target against the lowest & highest point
// the left side increase from 0 index to mid-point
// the right side decreases from last index to midpoint.

// search according to first target comparrsion 


// first, confirm which way the boundaries should be reassigned.
// Next, wihtin those boundaries & w/ new midpoint ... 