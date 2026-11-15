/**
 * Input: prices = [10,1,5,6,7,1]
 * Output: 6
 */

/**
 * Brute force approach
 */
// function maxProfit(prices: number[]): number {
//   let max = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       max = Math.max(max, profit);
//     }
//   }

//   return max;
// }

/**
 * Tracking lower price
 */
// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let minPrice = prices[0];

//   for (let i = 1; i < prices.length - 1; i++) {
//     profit = Math.max(profit, prices[i] - minPrice);
//     minPrice = Math.min(minPrice, prices[i]);
//   }

//   return profit;
// }

/**
 * Sliding window approach
 */
function maxProfit(prices: number[]): number {
  let profit = 0;
  let low = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const el = prices[i];
    if (low > el) low = el;
    else profit = Math.max(profit, el - low);
  }

  return profit;
}

console.log(maxProfit([10, 1, 5, 6, 7, 1]));
