function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length /2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array))
}

let test = [3 , 6, 2, 56, 32, 5, 89, 33, 100, 200, 500, 230, 133, 423, 123];
let result = mergeSort(test);

console.log(result);