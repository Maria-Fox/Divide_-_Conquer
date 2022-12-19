// With Kwame's help. 
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// SO - review input, view in regular ascending order.

// (ONE ROTAION = MOVING LAST ITEM TO FRONT OF ARR)
// using the above input - 
// 2 3 6 12 15 18 - WOULD BE REGULAR ASC. ORDER
// 18 2 3 6 12 15 - ONE ROTATION 
// 15 18 2 3 6 12 - TWO ROTATIONS - ****WHAT INPUT LOOKS LIKE******
// 12 15 18 2 3 6 - THREE ROTATIONS
// 6 12 15 18 2 3 - FOUR ROTAITONS


function findRotationCount(arr) {
  // get usual pointers
  let upper = arr.length - 1;
  let lower = 0;
  let mid;

  while (upper >= lower) {

    mid = Math.floor((upper + lower) / 2);
    console.log(mid);

    // check if the midpoint value is less than the value before
    if (arr[mid] < arr[mid - 1]) {
      // if so, they're in order, so return the index.
      return mid;
    } else if (arr[mid] > arr[arr.length - 1]) {
      // if array value is greater than the last array value. Add one to lower boundary
      lower = mid + 1;
      console.log("new lower", lower)
    } else {
      upper = mid - 1;
      console.log("new upper", upper)
    }
  }

  // if array values grow 
  return 0;
}


module.exports = findRotationCount


// array input:
// if the first value in array is less than the last index value then return 0. There are no rotations.

// If not, find midpoint. If that midpoint value is less than the value BEFORE it, 