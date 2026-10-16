const nums = [1, 2, 2, 3, 3, 3],
  k = 2;

// function topKFrequent(nums: number[], k: number): number[] {
//   const count = new Map<number, number>();

//   for (const num of nums) {
//     count.set(num, (count.get(num) ?? 0) + 1);
//   }

//   return [...count.entries()]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((item) => item[0]);
// }

/**
 * With bucket sort algorithm
 */

function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const [val, key] of count) {
    buckets[key].push(val);
  }

  const res = [];

  for (let i = buckets.length - 1; i > 0 && res.length < k; i--) {
    for (const num of buckets[i]) {
      res.push(num);
      if (res.length === k) break;
    }
  }

  return res;
}

console.log(topKFrequent(nums, k));
