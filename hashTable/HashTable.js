/**
 * ключи - целые
 *
 * TODO если #limit больше, чем 70% от #size - увеличиваем размер вдвое и все пересчитываем
 */
export default class HashTable {
  #limit = 0;
  #size = 0;
  #keys = [];
  #values = [];

  /**
   *
   * @param {number} size
   */
  constructor(size) {
    this.#size = size;
    this.#keys = this._initArray(size);
    this.#values = this._initArray(size);
  }

  /**
   *
   * @param key
   * @param value
   */
  put(key, value) {
    if (this.#limit >= this.#size) throw new Error("hash table is full");
    const hashedIndex = this.probe({ key });
    this.#keys[hashedIndex] = key;
    this.#values[hashedIndex] = value;
    this.#limit++;
  }

  /**
   *
   * @param key
   * @returns {*}
   */
  get(key) {
    const hashedIndex = this.probe({ key, forGet: true });
    return this.#values[hashedIndex];
  }

  /**
   *
   * @param {number} key
   * @param {boolean} [forGet]
   * @private
   */
  probe({ key, forGet = false }) {
    let initHashedIndex = this.hash(key);
    let hashedIndex = initHashedIndex;
    const match = forGet ? key : undefined;
    while (this.#keys[hashedIndex] !== match) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.#size;
      if (hashedIndex === initHashedIndex) return undefined; // прошли все по кругу
    }
    return hashedIndex;
  }

  /**
   *
   * @param key
   * @returns {number}
   */
  hash(key) {
    if (!Number.isInteger(key)) throw new Error("must be int");
    return key % this.#size;
  }

  /**
   *
   * @param size
   * @returns {any[]}
   * @private
   */
  _initArray(size) {
    return new Array(size);
  }
}
