/**
 * Тест простоты числа
 * метод полного перебора
 * O(n)
 *
 * @param {number} n
 * @returns {boolean}
 */
export default function numberIsPrimeBruteForce(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
