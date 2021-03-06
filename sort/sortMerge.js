/**
 * Сортировка слиянием
 *
 * Изначально рандомный массив можно разбить на множество небольших упорядоченных подмассивов.
 * При попарном слиянии количество упорядоченных подмассивов уменьшается, длина каждого из них увеличивается.
 * На последнем шаге массив представляет из себя всего два упорядоченных подмассива, которые сливаются в единую упорядоченную структуру.
 *
 * sortMerge - конкурент sortQuick, аналогично ему он также эффективный и быстрый, но имеет дополнительное преимущество - устойчивость.
 * Поэтому Mozilla и Safari используют его для имплементации Array.prototype.sort()
 *
 * O(n log n)
 * O(n) дополнительной памяти
 * устойчивый
 *
 * @param {[]} arr
 * @returns {[]}
 */
export default function sortMerge(arr) {
  if (arr.length <= 1) return arr;
  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку, сливаем их и возвращаем снова единый массив
  return merge(sortMerge(arrLeft), sortMerge(arrRight));
}

/**
 * Объединить два упорядоченных массива в один очень просто.
 * Нужно двигаться одновременно в обоих массивах слева-направо и сравнивать очередные пары элементов из обоих массивов.
 * Меньший элемент отправляется в общий котёл.
 * Когда в одном из массивов элементы заканчиваются, оставшиеся элементы из другого массива просто по порядку переносятся в главный список.
 *
 * @param arrFirst
 * @param arrSecond
 * @returns {*[]}
 */
function merge(arrFirst, arrSecond) {
	const arrSort = [];
	let j = 0;
	let i = 0;
	// сравниваем два массива, поочередно сдвигая указатели
	while (i < arrFirst.length && j < arrSecond.length) {
		arrSort.push(
			(arrFirst[i] < arrSecond[j])
				? arrFirst[i++]
				: arrSecond[j++]
		);
	}
	// обрабатываем последний элемент при разной длине массивов и возвращаем один отсортированный массив
	return [
		...arrSort,
		...arrFirst.slice(i),
		...arrSecond.slice(j),
	];
}
