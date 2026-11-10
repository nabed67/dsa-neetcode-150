const height = [1, 7, 2, 5, 4, 7, 3, 6];

/**
 * Brute force approach
 */

// function maxArea(heights: number[]): number {
//   let max = 0;

//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i; j < heights.length; j++) {
//       const curr = (j - i) * Math.min(heights[i], heights[j]);
//       if (curr > max) max = curr;
//     }
//   }

//   return max;
// }

/**
 * Two pointer approach
 */

function maxArea(heights: number[]): number {
  let max = 0;

  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const curr = (r - l) * Math.min(heights[r], heights[l]);
    if (curr > max) max = curr;

    if (heights[l] < heights[r]) l++;
    else r--;
  }

  return max;
}

console.log(maxArea(height));
