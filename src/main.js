/**
 * Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, 
 * у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.
 */

function capitalizeStrings(array) {
    let newArray = [];

    array.forEach(element => {
        element = element.toLowerCase();
        element = element.replace(element[0], element[0].toUpperCase());

        newArray.push(element);
    });

    return newArray;
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

/**
 * Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, 
 * що містить елементи, які є в обох вихідних масивах.
 */

function findCommonElements(array1, array2) {
    let commonElements = [];

    array1.forEach(element => {
        if (true === array2.includes(element)) {
            commonElements.push(element);
        }
    });

    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

/**
 * Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
 * 
 * sum - сума всіх елементів масиву
 * average - середнє значення елементів масиву
 * min - мінімальне значення в масиві
 * max - максимальне значення в масиві
 */

function analyzeArray(array) {
    let sum = 0;
    
    array.forEach(element => {
        sum += element;
    });

    let average = sum/array.length;

    return {
        sum: sum,
        average: average,
        min: Math.min(...array),
        max: Math.max(...array)
    };
}

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }