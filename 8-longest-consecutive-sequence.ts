/**
 * Brute force appraoch
 */

// const nums = [0, 3, 2, 5, 4, 6, 1, 1];

// function longestConsecutive(nums: number[]): number {
//   let max = 0;

//   for (const num of nums) {
//     let curr = num;
//     let len = 1;

//     while (nums.includes(curr + 1)) {
//       curr++;
//       len++;
//     }

//     max = Math.max(len, max);
//   }

//   return max;
// }

/**
 * Using sorting alogorithm
 */

// const nums = [2, 20, 4, 10, 3, 4, 5];

// function longestConsecutive(nums: number[]): number {
//   if (nums.length === 0) return 0;

//   let max = 1;
//   let len = 1;

//   const sortedNums = nums.sort((a, b) => a - b);

//   for (let i = 1; i < sortedNums.length; i++) {
//     if (sortedNums[i] === sortedNums[i - 1]) continue;

//     if (sortedNums[i] === sortedNums[i - 1] + 1) len++;
//     else len = 1;

//     max = Math.max(max, len);
//   }

//   return max;
// }

/**
 * Using set
 */

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;

    let len = 1;
    while (set.has(num + len)) len++;
    max = Math.max(max, len);
  }

  return max;
}

longestConsecutive(nums);
