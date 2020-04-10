function add(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

// 1. Make a function that takes in 2 numbers and returns the larger
function larger(a, b) {
  if ((Number.isNaN(a) || Number.isNaN(b)) || (!a || !b)) {
    throw new Error('larger() requires 2 arguments');
  }
  return Math.max(a, b);
  // if (a > b) { return a } else { return b };

};

// 2. Enhance it so that you can pass a flag to show if you want the larger or smaller number
// 3. Ensure that it throws an error if 2 values aren't passed
function minMax(flag, a, b) {
  if (arguments.length !== 3) thrower('minMax() requires 3 arguments');
  if ((flag !== 'larger') && (flag !== 'smaller')) thrower('minMax() requires a flag \'larger\' or \'smaller\'');
  if (isNaN(a) || isNaN(b)) thrower('minMax() requires numerical arguments');

  if (flag === 'larger') return Math.max(a, b);
  if (flag === 'smaller') return Math.min(a, b);

};

function thrower(message) {
  throw new Error(message);
};


export {
  add,
  larger,
  minMax,
  thrower,
};

// expect(() => {
//   thrower();
// }).toThrow('I\'m an error');