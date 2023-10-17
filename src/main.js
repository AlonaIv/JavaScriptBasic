/**
 * Вам необхідно написати функцію summarize(num), 
 * яка приймає на вхід число і повертає функцію, 
 * яка під час виклику додає це число до аргументу і повертає результат. 
 * Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція викликається з аргументом 5, 
 * то функція, що повертається, повинна при виклику з аргументом3повернути8(тому що3 + 5 = 8) або6, якщо аргумент не буде передано.
 */

function summarize(argument) {
  let arg = argument;

  return function (number = 1) {
    arg += number;

    return arg;
  }
}

const sum = summarize(1);

console.log('task1', sum(3)); //4
console.log('task1', sum());  //5
console.log('task1', sum(5)); //10
console.log('task1', sum(7)); //17
console.log('task1', sum(9)); //26

/**
 * Вам необхідно написати функцію counter(startValue, step), 
 * яка приймає на вхід два параметри - стартове значення лічильника і його крок. 
 * Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. 
 * Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на stepі 
 * скидають значення до стартового, відповідно.
 */

function counter(startValue, step) {
  let count = startValue;

  function counChange() {}

  counChange.increment = function () {
    count += step;

    return count;
  }

  counChange.decrement = function () {
    count -= step;

    return count;
  }

  counChange.reset = function () {
    count = startValue;

    return count;
  }

  return counChange;
}

const newCounter = counter(1, 5);

console.log('task2', newCounter.increment()); //6
console.log('task2', newCounter.increment()); //11
console.log('task2', newCounter.decrement()); //6
console.log('task2', newCounter.reset());     //1
console.log('task2', newCounter.increment()); //5