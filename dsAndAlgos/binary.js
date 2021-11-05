let nums =[];

// creating our array
// 
for(let i = 0; i <= 1000000; i++){ 
  nums.push(i);
}

console.log(nums)

// O(n^2)
// for(let i = 0; i < nums.length; i++) {
//   console.log("THis is round " + i)
//   if (nums[i] == 800000) {
//     console.log("Student object found " + nums[i]);
//   }
// }

// O(logn)
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length-1;
  let i = 0;
  while(min <= max) {
    console.log("this is round " + i)
    let mid = (min + max) / 2;
    if (arr[mid] == target) {
      console.log("Found " + arr[mid])
      return arr[mid];
    // where target = 67 & mid = 50
    } else if (arr[mid] < target) {
      min = mid +1;
    } else {
      max = mid-1;
    }
    i++;
  }
}

let arr1 = [1,2,3,4,5,6,7];

binarySearch(nums, 800000);