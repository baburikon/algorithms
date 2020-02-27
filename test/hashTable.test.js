import HashTable from "../hashTable/HashTable";

const cases = [
  [7, "hi"],
  [0, "hello"],
  [33, "sunny"],
  [46, "weather"],
  [59, "wow"],
  [72, "fourty"],
  [85, "happy"],
  [98, "sad"]
];

describe("HashTable", () => {
  it("получаем существующий 1", () => {
    const hashTable = new HashTable(8);
    cases.forEach(data => {
      hashTable.put(data[0], data[1]);
    });
    expect(hashTable.get(85)).toBe("happy");
  });

  it("получаем существующий 2", () => {
    const hashTable = new HashTable(8);
    cases.forEach(data => {
      hashTable.put(data[0], data[1]);
    });
    expect(hashTable.get(0)).toBe("hello");
  });

  it("не можем получить не существующий 1", () => {
    const hashTable = new HashTable(8);
    cases.forEach(data => {
      hashTable.put(data[0], data[1]);
    });
    expect(hashTable.get(1000)).toBe(undefined);
  });

  it("не можем получить не существующий 2", () => {
    const hashTable = new HashTable(8);
    cases
      .filter(data => data[0])
      .forEach(data => {
        hashTable.put(data[0], data[1]);
      });
    expect(hashTable.get(0)).toBe(undefined);
  });

  it("переполнение", () => {
    const hashTable = new HashTable(7);
    expect(() => {
      cases.forEach(data => {
        hashTable.put(data[0], data[1]);
      });
    }).toThrow("hash table is full");
  });
});
