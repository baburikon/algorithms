/**
 * Сортировка пузырьком
 *
 * O(n²)
 * устойчивая
 *
 * @param {[]} arr
 * @returns {[]}
 */
export default function sortBubble(arr) {
  for (let i = 0, lastI = arr.length - 1; i < lastI; i++) {
    let wasSwap = false;
    for (let j = 0, lastJ = lastI - i; j < lastJ; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
}
