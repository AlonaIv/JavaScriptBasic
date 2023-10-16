/** 
 * Вам необхідно написати функцію-декоратор logArguments(fn), 
 * яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.
 */

function logArguments(fn) {
    return function (...args) {
      console.log('Log all args: ', args.join(', '));

      return fn(...args);
    }
}

let fun = (a, b) => a + b;

const funWithLog = logArguments(fun);

console.log('Sum task 1: ', funWithLog(2, 4, 5));

/**
 * Вам необхідно написати функцію-декоратор validate(fn, validator), 
 * яка приймає на вхід функцію і додає можливість перевіряти аргументи, 
 * передані у функцію fn, на відповідність заданому validator.
 * Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
 */

function validate(fn, validator) {
    return function (...args) {
      if (true === validator(args)) {
        return fn(...args);
      } else {
        return 'Incorrect values. Should be a numbers.';
      }
    }
}

function NumberValidator (array) {
  for (const arg of array) {
    if (typeof arg !== 'number') {
      return false;
    }
  }

  return true;
}

const funWithValidator = validate(fun, NumberValidator);

console.log('Sum task 2: ', funWithValidator(3, 5));
console.log('Sum task 2 with incorrect arg: ', funWithValidator(3, '34'));