/**
 * Быстрая сортировка
 *
 * Найти опорный элемент в массиве для сравнения с остальными частями, затем сдвигать элементы так, чтобы все части перед опорным элементом были меньше его, а все элементы после опорного были больше его.
 * После этого рекурсивно выполнить ту же операцию на элементы до и после опорного.
 *
 * Используется в V8 как реализация Array.prototype.sort() для массивов с более чем 23 элементами.
 * Для менее чем 23 элемента в V8 используется insertion sort.
 *
 * O(n log n)
 * не устойчивый
 * При использовании O(n) дополнительной памяти, можно сделать сортировку устойчивой.
 *
 * @param {*[]} arr
 * @returns {*[]}
 */
export default function sortQuick(arr) {
  return quickSortHelper(arr, 0, arr.length - 1);
}

/**
 *
 * @param {*[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {*[]}
 */
function quickSortHelper(arr, left, right) {
  if (arr.length <= 1) return arr;
  const index = partition(arr, left, right);
  if (left < index - 1) quickSortHelper(arr, left, index - 1);
  if (index < right) quickSortHelper(arr, index, right);
  return arr;
}

/**
 *
 * @param {*[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function partition(arr, left, right) {
  const middle = Math.floor((right + left) / 2);
  const pivot = arr[middle];
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (pivot < arr[right]) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
