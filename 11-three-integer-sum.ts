const nums = [-1, 0, 1, 2, -1, -4];

/**
 * Brute force approach
 */

// function threeSum(nums: number[]): number[][] {
//   const map = new Map<string, number[]>();

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const key = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join();

//           if (!map.has(key)) {
//             map.set(key, [nums[i], nums[j], nums[k]]);
//           }
//         }
//       }
//     }
//   }

//   return [...map.values()];
// }

/**
 * Two pointer approach
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const map = new Map<string, number[]>();

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        const key = [nums[i], nums[l], nums[r]].join();
        if (!map.has(key)) map.set(key, [nums[i], nums[l], nums[r]]);
      }

      if (sum > 0) r--;
      else l++;
    }
  }

  return [...map.values()];
}

console.log(threeSum(nums));
