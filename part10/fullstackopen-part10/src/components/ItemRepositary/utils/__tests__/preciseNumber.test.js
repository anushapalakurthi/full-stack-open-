import preciseNumber from '../preciseNumber';

const TESTS = [
  {
    value: 1,
    result: 1,
  },
  {
    value: 999,
    result: 999,
  },
  {
    value: 1000,
    result: '1.0k',
  },
  {
    value: 1001,
    result: '1.0k',
  },
  {
    value: 1450,
    result: '1.4k',
  },
  {
    value: 1451,
    result: '1.5k',
  },
  {
    value: 1549,
    result: '1.5k',
  },
  {
    value: 1000000,
    result: '1000.0k',
  },
];

describe('preciseNumber', () => {
  for (const { value, result } of TESTS) {
    it(`Should return expect result for value: ${value}`, () => {
      expect(preciseNumber(value)).toBe(result);
    });
  }
});
