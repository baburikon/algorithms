/**
 * Сортировка выбором
 *
 * за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с первым элементом
 * O(N²)
 * Сортировка выбором является неустойчивой
 *
 * @param {[]} arr
 * @returns {[]}
 */
export default function sortSelection(arr) {
  for (let i = 0, l = arr.length, lastI = l - 1; i < lastI; i++) {
    let indexMin = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j;
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}
