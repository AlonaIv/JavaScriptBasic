/**
 * Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. 
 * Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, 
 * а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. 
 * Наприклад, для числа 15 повідомлення має бути FizzBuzz.
 **/

const inputInt      = prompt('Enter number: ');
const parseInputInt = parseInt(inputInt);

if (0 === parseInputInt % 3 && 0 === parseInputInt % 5) {
    console.log('FizzBuzz');
} else if (0 === parseInputInt % 5) {
    console.log('Buzz');
} else if (0 === parseInputInt % 3) {
    console.log('Fizz');
}

/**
 * Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, що вказує, чи є введений рік високосним.
 **/

const inputYear      = prompt('Enter year: ');
const parseInputYear = parseInt(inputYear);

if (0 === parseInputYear % 400 || (0 !== parseInputYear % 100 && 0 === parseInputYear % 4)) {
    console.log(parseInputYear + ' leap year');
} else {
    console.log(parseInputYear + ' isn\'t leap year');
}

/**
 * Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / ріки / років. 
 * Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.
 **/

const inputUserAge         = prompt('Enter your age: ');
const parseInputUserAge    = parseInt(inputUserAge);
const parseInputUserAgeStr = String(parseInputUserAge);
let lastInputNumber        = parseInputUserAgeStr[parseInputUserAgeStr.length - 1];

 if (parseInputUserAgeStr.length >=2 && ['11', '12', '13', '14'].includes(parseInputUserAgeStr.slice(-2))) {
    lastInputNumber = parseInputUserAgeStr.slice(-2);
 }

switch (lastInputNumber) {
    case '1':
        console.log('Вам ' + parseInputUserAgeStr + ' рік');
        break;
    case '2':
    case '3':
    case '4':
        console.log('Вам ' + parseInputUserAgeStr + ' роки');
        break;
    case '11':
    case '12':
    case '13':
    case '14':
    default:
        console.log('Вам ' + parseInputUserAgeStr + ' років');
        break;
}