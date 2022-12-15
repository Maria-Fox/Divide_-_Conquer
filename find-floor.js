// function findFloor(arr, target) {

//   let left = 0;
//   let right = arr.length -1;
//   let mid;

//   // if the target is less than the smallest array value floor doesn't exist
//   if(arr[0] > target ){
//     return -1
//   };

//   while(left <= right){
//   // compare target to the midpoint
//   let mid = Math.floor((left + right)/ 2);
//     console.log("mid INDEX is now", mid);

//     if(target <= arr[mid] && target > arr[mid +1]){
//       console.log(target, "is less than ", arr[mid], "&", target,"is less than ", arr[mid+1])
//       return arr[mid];
//     } else if (target >= arr[mid] && target < arr[mid+1]){
//       return arr[mid];
//     } else if(target < arr[mid]){
//       console.log(target, "is less than ", arr[mid])
//       right = mid -1;
//       console.log("right INDEX now", right);
//     } else {
//       left = mid +1;
//       console.log("left INDEX now", left)
//     }
//   }
// }


function findFloor(arr, target) {
  let right = arr.length - 1;
  let left = 0;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    console.log("mid is now: ", mid)

    //  checks for edge case where mid is changed to be last index value and that defaults to the floor.
    if (
      arr[mid] === target ||
      (arr[mid] < target && mid === arr.length - 1) ||
      (arr[mid] < target && arr[mid + 1] > target)
    ) {
      return arr[mid];
    } else if (arr[mid] > target) {
      right = mid - 1;
      console.log("updated right to", right);
    } else {
      left = mid + 1;
      console.log("updated left to", left);
    }
  }

  // if no floor is found return -1
  return -1;
}



module.exports = findFloor

// returns the floor of an array. The floor is the largest element in the array which is smaller than or equal to target.

// In other words, the next smallest number, or equal to target.