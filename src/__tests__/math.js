import { add, larger, minMax, thrower } from '../math';

describe('The math module', () => {
  describe('The thrower function', () => {
    test('It throws an error.', () => {
      expect(() => {
        thrower('I am an error');
      }).toThrow('I am an error');
    });
  });

  describe('The add function', () => {
    test('It exists.', () => {
      expect(add).toBeDefined();
    });

    test('It adds two numbers together.', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(7, -2)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    test('It adds multiple numbers', () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 6, -1)).toBe(6);
    });

    test('It returns 0 if no numbers are provided', () => {
      expect(add()).toBe(0);
    });
  });

  describe('The larger function', () => {
    test('It exists.', () => {
      expect(larger).toBeDefined();
    });

    test('It returns the larger of two numbers.', () => {
      expect(larger(1, 2)).toBe(2);
      expect(larger(2, 1)).toBe(2);
      expect(larger(1, -2)).toBe(1);
    });

    test('It throws an error if arguments are missing', () => {
      expect(() => { larger(); }).toThrow('larger() requires 2 arguments');
      expect(() => { larger(1); }).toThrow('larger() requires 2 arguments');
      expect(() => { larger(undefined, 1); }).toThrow('larger() requires 2 arguments');
    });
  })

  describe('The minMax function', () => {
    test('It exists.', () => {
      expect(minMax).toBeDefined();
    });

    test('It returns the requested number.', () => {
      expect(minMax('larger', 1, 2)).toBe(2);
      expect(minMax('smaller', 1, -2)).toBe(-2);
    });

    test('It throws an error against unexpected arguments', () => {
      expect(() => { minMax(1, 2) }).toThrow('minMax() requires 3 arguments');
      expect(() => { minMax('smaller', 2, 3, 4) }).toThrow('minMax() requires 3 arguments');
      expect(() => { minMax('bigger', 1, 2) }).toThrow('minMax() requires a flag \'larger\' or \'smaller\'');
      expect(() => { minMax('larger', 4, 'pickles') }).toThrow('minMax() requires numerical arguments');
    });
  })
});