/**
 * Вам необхідно використовувати масив нотифікацій з минулих занять. 
 * До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, 
 * щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, 
 * немов працюємо з "плоским" масивом.
 */

function group(array, callback) {
    let arrayGroups = {};

    array.forEach(element => {
        let curentParam = callback(element);
    
            if (false === curentParam in arrayGroups) {
                arrayGroups[curentParam] = [];
            }
    
            arrayGroups[curentParam].push(element);
        });
    
        return arrayGroups;
}

let notifications = [
    {source: 'api', text: 'Hello!', date: '2023-01-21T20:34:45P'},
    {source: 'messenger', text: 'Can you help me?', date: '2023-04-23T21:04:05P'},    
    {source: 'api', text: 'Have a question.', date: '2022-07-08T10:05:56P'},
    {source: 'phone', text: 'My phone doesn\'t work', date: '2020-02-05T20:34:45P'},
    {source: 'messenger', text: 'Hello again!', date: '2023-04-23T21:04:05P'},
    {source: 'instagram', text: 'By!', date: '2023-01-03T20:34:45P'},
    {source: 'phone', text: 'Ok', date: '2023-02-01T13:35:39P'},
    {source: 'instagram', text: ':)', date: '2023-01-03T20:34:45P'},
];

let groupedObject = group(notifications, ({source}) => source);

groupedObject[Symbol.iterator] = function() {
    let values     = [];
    let valueIndex = 0;

    for (const key in this) {
        this[key].forEach(element => {
            values.push(element);
        });
    }

    return {
      next() {
        if (valueIndex === values.length) {
            return {done:true}
        }

        return {
            done:false,
            value: values[valueIndex++]
        }
      }
    };
  };

  for (const notification of groupedObject) {
    console.log(notification);
  }

/**
 * Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання, 
 * щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами, 
 * то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
 */

function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
        let key = args.toString();

      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = fn(...args);
        cache.set(key, result);

        return result;
      }
    };
  }
  
  let functionAdd = function add(a, b) {
    console.log("Inside a function");

    return a + b;
  }
    
  let memoizeForFunctionAdd = memoize(functionAdd);

  console.log(memoizeForFunctionAdd(1, 2));
  console.log(memoizeForFunctionAdd(1, 2));
  console.log(memoizeForFunctionAdd(2, 3));
  console.log(memoizeForFunctionAdd(1, 2));
  console.log(memoizeForFunctionAdd(4, 5));
  