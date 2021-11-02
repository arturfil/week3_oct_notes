// 1 to 10;
// iteration
// for(let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// recursion
function print(num) { 
  // base case
  if (num == 10) {
    console.log(10);
    return;
  }
  console.log(num);
  print(num+1);
}

// print(1);

// Pseudo Code
// function traverse(node) {
//   if (node.children == null) {
//     console.log("No more nodes")
//   }
//   traverse(node.children[0]);
// }

// 4! =>  4 * 3 * 2 * 1

function factorial(n) {
  // base case
  if (n == 1 ) {
    return 1;
  }
  return factorial(n-1) * n; // 6 * 5 * 4 * 3 * 2 * 1;
}

let num = factorial(4);
console.log(num);