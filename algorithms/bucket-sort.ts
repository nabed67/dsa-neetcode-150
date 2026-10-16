const nums = [29, 25, 3, 49, 9, 37, 21, 43];

/**
 *  bucket = floor(number / 8)
 *  29  -> 29/8 = 3 -> Bucket 3
 *  25  -> 25/8 = 3 -> Bucket 3
 *  3   -> 3/8  = 0 -> Bucket 0
 *  49  -> 49/8 = 6 -> Bucket 6
 */

function bucketSort(arr: number[]) {
  const length = arr.length;
  const buckets: number[][] = Array.from({ length }, () => []);

  for (let i = 0; i < length; i++) {
    const no = Math.floor(arr[i] / length);
    buckets[no].push(arr[i]);
  }

  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  console.log(buckets.flat());
}

bucketSort(nums);
