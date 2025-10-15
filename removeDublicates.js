export function removeDuplicates(arr) {
  const seen = new Set();
  const unique = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      unique.push(item);
      seen.add(item);
    }
  }

  return unique;
}