/**
 * Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
 */

function reverseArray(array) {
    let newArray = [];

    for (i = array.length - 1; i >= 0; i-- ) {
        newArray.push(array[i]);
    }

    return newArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]

/**
 * Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
 */

function uniqueValues(array1, array2) {
    let uniqueValuesArray = [];

    for (i = 0; i < array1.length; i++) {
        const curentElement = array1[i];
        
        if (false === uniqueValuesArray.includes(curentElement)) uniqueValuesArray.push(curentElement);
    }

    for (k = 0; k < array2.length; k++) {
        const curentElement = array2[k];

        if (false === uniqueValuesArray.includes(curentElement)) uniqueValuesArray.push(curentElement);
    }

    return uniqueValuesArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

/**
 * Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
 */

function calculateAverageGrade(students) {
    let studentGrades = [];
    let gradesSum     = 0;

    for (i = 0; i < students.length; i++) {
        const currentStudentGrade = students[i]?.grade;

        if (currentStudentGrade !== undefined) {
            studentGrades.push(currentStudentGrade);
        }
    }

    for (k = 0; k < studentGrades.length; k++) {
        gradesSum += studentGrades[k];
    }

    return (gradesSum / students.length).toFixed(1);
}

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4