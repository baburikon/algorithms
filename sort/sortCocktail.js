/**
 * Шейкерная сортировка (перемешиванием, двунаправленная сортировка)
 *
 * оптимизированный алгоритм пузырьковой сортировки - в двух направлениях поочередно, постепенно сужая диапазон сортировки.
 * В итоге за один проход в конец массива всплывает максимальный элемент из диапазона, а за следующий проход — в начало массива минимальный (сортировка по возрастанию).
 * Эти элементы можно больше не рассматривать и таким образом диапазон сужается с двух сторон.
 *
 * O(n²)
 * устойчивый
 *
 * @param {[]} arr
 * @returns {[]}
 */
export default function sortCocktail(arr) {
  let firstSwap = 0;
  let left = firstSwap;

  let lastSwap = arr.length - 1;
  let right = lastSwap;

  while (left < right) {
    let wasSwap = false;

    for (let i = left; i < right; i++) {
      const nextI = i + 1;
      if (arr[i] > arr[nextI]) {
        [arr[i], arr[nextI]] = [arr[nextI], arr[i]];
        lastSwap = i;
      }
    }
    right = lastSwap;
    if (!wasSwap) break;

    for (let i = right; i > left; i--) {
      const prevI = i - 1;
      if (arr[i] < arr[prevI]) {
        [arr[i], arr[prevI]] = [arr[prevI], arr[i]];
        firstSwap = i;
      }
    }
    left = firstSwap;
    if (!wasSwap) break;
  }
  return arr;
}
