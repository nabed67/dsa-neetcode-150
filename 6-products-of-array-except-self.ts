const nums = [1, 2, 4, 6];

/**
 * Brute force approach
 */

// function productExceptSelf(nums: number[]): number[] {
//   const sumOfNums = nums.reduce((prev, curr) => prev * curr, 1);
//   console.log(sumOfNums);
//   return nums.map((num) => sumOfNums / num);
// }

/**
 * Brute force approach without Division
 */

// function productExceptSelf(nums: number[]): number[] {
//   const count: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 1;

//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         sum *= nums[j];
//       }
//     }

//     count.push(sum);
//   }

//   return count;
// }

function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;

  const prefix = new Array(length).fill(1);
  const suffix = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  return prefix.map((n, i) => n * suffix[i]);
}

console.log(productExceptSelf(nums));
