/**
 * Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. 
 * Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.
 */

function randomDelayPrint(message) {
  const letters = message.split('');
  let index = 0;

  function printLetter() {
    if (index < message.length) {
      const letter = letters[index];
      const delay  = Math.random() * 1000;

      setTimeout(() => {
        console.log(letter);

        index++;

        printLetter();
      }, delay);
    }
  }

  printLetter();
}

randomDelayPrint('test str');

/**
 * Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. 
 * Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, 
 * як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.
 */

function debounce(callback, delay) {
  let timeout;

  return function () {
    const thisArg = this;
    const args    = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(thisArg, args);
    }, delay);
  };
}

const expensiveOperation = () => console.log("Виконую складну операцію..."); 

const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

/**
 * Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. 
 * Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. 
 * Коли всі функції виконано, intervalRace має повернути масив із результатами.
 */

function intervalRace(functionsArray, t) {
  let results = [];
  let index   = 0;

  function executeFunction() {
    if (index < functionsArray.length) {
      const curentFunction = functionsArray[index];

      setTimeout(() => {
        const currentResult = curentFunction();
        results[index]      = currentResult;
        
        index++;

        if (index === functionsArray.length) {
          console.log(results);
        } else {
          executeFunction();
        }
      }, t)
    }
  }

  executeFunction();
}

function foo() {
  return 'foo';
}

function boo() {
  return 'boo';
}

intervalRace([foo, boo], 2000);