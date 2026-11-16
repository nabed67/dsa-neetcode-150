/**
 *  Input: s = "zxyzxyz", "dvdf", " ",
 *  Output: 3
 */

/**
 * Brute force approach
 */

// function lengthOfLongestSubstring(s: string): number {
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     const set = new Set<string>();

//     for (let j = i; j < s.length; j++) {
//       if (set.has(s[j])) break;
//       set.add(s[j]);
//     }

//     max = Math.max(max, set.size);
//   }

//   return max;
// }

/**
 * Brute force approach
 */

function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let best = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    const prev = map.get(s[i]);

    if (prev !== undefined && prev >= l) {
      l = prev + 1;
    }

    map.set(s[i], i);
    best = Math.max(best, i - l + 1);
  }

  return best;
}

console.log(lengthOfLongestSubstring("dvdf"));
