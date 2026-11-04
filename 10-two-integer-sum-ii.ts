const numbers = [1, 2, 3, 4];
const target = 3;

/**
 * Brute force approach using for loop
 */

// function twoSum(numbers: number[], target: number): number[] {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }

//   return [];
// }

/**
 * Optimal approach using two pointer
 */

function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (target < sum) r--;
    else l++;
  }

  return [];
}

console.log(twoSum(numbers, target));
