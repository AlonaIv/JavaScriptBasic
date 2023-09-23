/**
 * Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, 
 * що містить тільки ті числа, які є простими числами.
 */

function chekIfPrimeNumber(number)
{
    if (number === 1 || number === 0) {
        return false;
    }

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimeNumbers(numbers) {
    let simpleNumbers = [];

    numbers.forEach(element => {
        if (true === chekIfPrimeNumber(element)) {
            simpleNumbers.push(element);
        }
    });

    return simpleNumbers;
}

numbersArray = [1, 3, 2, 5, 6, 18, 19, 23, 13, 16, 25, 0];

console.log('Task1', getPrimeNumbers(numbersArray));

/**
 * Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, 
 * де кожен об'єкт описує сповіщення та має поля source / text / date. 
 * Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, 
 * а значенням - масив сповіщень із цього джерела.
 */

function getNotificationsForEachSource(notifications) {
    let notificationsGroups = {};

    notifications.forEach(element => {
        let curentSource = element.source;

        if (false === curentSource in notificationsGroups) {
            notificationsGroups[curentSource] = [];
        }

        notificationsGroups[curentSource].push(element);
    });

    return notificationsGroups;
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

console.log('Task2', getNotificationsForEachSource(notifications));

/**
 * Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group (якби він був)
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

// console.log('Task3, notifications group by source',group(notifications, ({source}) => source));
// console.log('Task3, notifications group by date', group(notifications, ({date}) => date));

const people = [
    {name: 'Alona', lastName: 'Ivanova', age: 23},
    {name: 'Kyrylo', lastName: 'Bohachov', age: 23},
    {name: 'Alona', lastName: 'Chelepis', age: 22},
    {name: 'Kyrylo', lastName: 'Ivanov', age: 21},
    {name: 'Alina', lastName: 'Ivanova', age: 22},
    {name: 'Oleg', lastName: 'Bohachov', age: 30},
]

// console.log('Task3, people group by name', group(people, ({name}) => name));
// console.log('Task3, people group by lastName', group(people, ({lastName}) => lastName));
console.log('Task3, people group by age', group(people, ({age}) => age));