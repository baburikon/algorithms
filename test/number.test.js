import numberEquals from "../number/numberEquals";
import numberIsPrimeBruteForce from "../number/numberIsPrimeBruteForce";
import numberIsPrimeTrialDivision from "../number/numberIsPrimeTrialDivision";

describe("Тест простоты числа", () => {
  const primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199
  ];
  const notPrimes = [1, 10, 33];
  [numberIsPrimeBruteForce, numberIsPrimeTrialDivision].forEach(
    primalityTestAlgorithm => {
      describe(primalityTestAlgorithm.name, () => {
        it("подтверждаем простые", () => {
          expect(primes.every(prime => primalityTestAlgorithm(prime))).toBe(
            true
          );
        });
        it("отсекаем не простые", () => {
          expect(
            notPrimes.every(notPrime => !primalityTestAlgorithm(notPrime))
          ).toBe(true);
        });
      });
    }
  );
});

describe("=== и Object.is", () => {
  it("-0 === +0 // true", () => expect(-0 === +0).toBe(true));
  it("Object.is(-0, +0) // false", () => expect(Object.is(-0, +0)).toBe(false));

  it("0 === +0 // true", () => expect(0 === +0).toBe(true));
  it("Object.is(0, +0) // true", () => expect(Object.is(0, +0)).toBe(true));

  it("-0 === 0 // true", () => expect(-0 === 0).toBe(true));
  it("Object.is(-0, 0) // false", () => expect(Object.is(-0, 0)).toBe(false));

  it("Number.NaN === Number.NaN // false", () =>
    expect(Number.NaN === Number.NaN).toBe(false));
  it("Object.is(Number.NaN, Number.NaN) // true", () =>
    expect(Object.is(Number.NaN, Number.NaN)).toBe(true));
});

describe("IEEE-754", () => {
  it("Number.MAX_SAFE_INTEGER === 9007199254740991", () =>
    expect(Number.MAX_SAFE_INTEGER === 9007199254740991).toBe(true));

  // чудеса для целых, больших, чем Number.MAX_SAFE_INTEGER - иногда операция не производится (!!!)
  it("Number.MAX_SAFE_INTEGER + 2 === 9007199254740992", () =>
    expect(Number.MAX_SAFE_INTEGER + 2 === 9007199254740992).toBe(true));
  it("2**68 === 295147905179352830000", () =>
    expect(2 ** 68 === 295147905179352830000).toBe(true));
  it("295147905179352830000 + 1 === 295147905179352830000", () =>
    expect(295147905179352830000 + 1 === 295147905179352830000).toBe(true));
  it("295147905179352830000 - 1 === 295147905179352830000", () =>
    expect(295147905179352830000 - 1 === 295147905179352830000).toBe(true));
  it("2**69 === 590295810358705700000", () =>
    expect(2 ** 69 === 590295810358705700000).toBe(true));
  it("590295810358705700000 + 1 === 590295810358705700000", () =>
    expect(590295810358705700000 + 1 === 590295810358705700000).toBe(true));
  it("590295810358705700000 - 1 === 590295810358705700000", () =>
    expect(590295810358705700000 - 1 === 590295810358705700000).toBe(true));

  // а здесь результат выглядит логичным, но как он получен - не понятно - лучше таким не пользоваться
  it("2**53 - 1 === 9007199254740991", () =>
    expect(2 ** 53 - 1 === 9007199254740991).toBe(true));
  it("2**53 === 9007199254740992", () =>
    expect(2 ** 53 === 9007199254740992).toBe(true));
  it("Number.MAX_SAFE_INTEGER + 1 === 9007199254740992", () =>
    expect(Number.MAX_SAFE_INTEGER + 1 === 9007199254740992).toBe(true));
  it("Number.MAX_SAFE_INTEGER + 3 === 9007199254740994", () =>
    expect(Number.MAX_SAFE_INTEGER + 3 === 9007199254740994).toBe(true));

  // здесь логично
  it("numberEquals(2**70, 1.1805916207174113e+21)", () =>
    expect(numberEquals(2 ** 70, 1.1805916207174113e21)).toBe(true));
  it("numberEquals(2**71, 2.3611832414348226e+21)", () =>
    expect(numberEquals(2 ** 71, 2.3611832414348226e21)).toBe(true));

  it("Number.MAX_SAFE_INTEGER + 1.111 !== Number.MAX_SAFE_INTEGER + 2.022", () =>
    expect(
      Number.MAX_SAFE_INTEGER + 1.111 !== Number.MAX_SAFE_INTEGER + 2.022
    ).toBe(true));

  it("Number.MAX_VALUE + 1 === Number.MAX_VALUE", () =>
    expect(Number.MAX_VALUE + 1 === Number.MAX_VALUE).toBe(true));
  it("Number.MAX_VALUE + 1.111 === Number.MAX_VALUE", () =>
    expect(Number.MAX_VALUE + 1.111 === Number.MAX_VALUE).toBe(true));

  it("Number.MIN_SAFE_INTEGER === -9007199254740991", () =>
    expect(Number.MIN_SAFE_INTEGER === -9007199254740991).toBe(true));

  it("Number.MIN_SAFE_INTEGER - 1.111 !== Number.MIN_SAFE_INTEGER - 2.022", () =>
    expect(
      Number.MIN_SAFE_INTEGER - 1.111 !== Number.MIN_SAFE_INTEGER - 2.022
    ).toBe(true));

  it("((0.1 + 0.2) + 0.3) > (0.1 + (0.2 + 0.3))", () =>
    expect(0.1 + 0.2 + 0.3 > 0.1 + (0.2 + 0.3)).toBe(true));

  it("Number.MIN_VALUE - 1 === -1", () =>
    expect(Number.MIN_VALUE - 1 === -1).toBe(true));
  it("Number.MIN_VALUE + 1 === 1", () =>
    expect(Number.MIN_VALUE + 1 === 1).toBe(true));
  it("Number.EPSILON + 1 > 1", () => expect(Number.EPSILON + 1 > 1).toBe(true));

  it("-Infinity - 2 === -Infinity - 1", () =>
    expect(-Infinity - 2 === -Infinity - 1).toBe(true));

  it("Infinity === Number.POSITIVE_INFINITY", () =>
    expect(Infinity === Number.POSITIVE_INFINITY).toBe(true));
  it("-Infinity === Number.NEGATIVE_INFINITY", () =>
    expect(-Infinity === Number.NEGATIVE_INFINITY).toBe(true));
});
