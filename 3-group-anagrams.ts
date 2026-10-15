const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

/**
 * With sorting string
 */

// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();

//   for (const str of strs) {
//     const sorted = str.split("").sort().join();

//     if (!map.has(sorted)) {
//       map.set(sorted, []);
//     }

//     map.get(sorted)?.push(str);
//   }

//   return [...map.values()];
// }

/**
 * Without sorting string
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const ch of str) {
      count[ch.charCodeAt(0) - 97]++;
    }

    const key = count.join(",");
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)?.push(str);
  }

  return [...map.values()];
}
