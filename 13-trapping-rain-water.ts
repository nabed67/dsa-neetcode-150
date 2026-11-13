/**
 * Input: height = [0,2,0,3,1,0,1,3,2,1]
 * Output: 9
 */

/**
 * Brute force approach
 */

// function trap(height: number[]): number {
//   let total = 0;

//   for (let i = 0; i < height.length; i++) {
//     let leftMax = 0;
//     let rightMax = 0;

//     for (let j = 0; j <= i; j++) {
//       leftMax = Math.max(leftMax, height[j]);
//     }

//     for (let k = i; k < height.length; k++) {
//       rightMax = Math.max(rightMax, height[k]);
//     }

//     total += Math.min(leftMax, rightMax) - height[i];
//   }

//   return total;
// }

/**
 * Prefix suffix approach
 */

// function trap(height: number[]): number {
//   let total = 0;
//   let len = height.length;

//   let prefix: number[] = new Array(len).fill(0);
//   let suffix: number[] = new Array(len).fill(0);

//   prefix[0] = height[0];
//   for (let i = 1; i < len; i++) {
//     prefix[i] = Math.max(prefix[i - 1], height[i]);
//   }

//   suffix[len - 1] = height[len - 1];
//   for (let j = len - 2; j >= 0; j--) {
//     suffix[j] = Math.max(suffix[j + 1], height[j]);
//   }

//   for (let k = 0; k < len; k++) {
//     total += Math.min(prefix[k], suffix[k]) - height[k];
//   }

//   return total;
// }

/**
 * Two pointer approach
 */

function trap(height: number[]): number {
  let total = 0;

  let leftMax = 0;
  let rightMax = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}

console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
