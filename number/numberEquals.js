/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export default function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
