/**
 * Тест простоты числа
 * метод перебора делителей
 * https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9
 * https://en.wikipedia.org/wiki/Trial_division
 * O(sqrt(n))
 *
 * @param {number} n
 * @returns {boolean}
 */
export default function numberIsPrimeTrialDivision(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false; // This is checked so that we can skip middle five numbers in below loop
  for (let i = 5, sqrtN = Math.sqrt(n); i <= sqrtN; i += 6) {
    // не проверяются чётные делители, кроме числа 2, а также делители, кратные трём, кроме числа 3
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
