/**Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: 
 * Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене. 
 **/

const inputInt      = prompt('Enter number: ');
const parseInputInt = parseInt(inputInt);

let prime = true;

for (i = 2; i < parseInputInt; i++) {
    if (parseInputInt % i === 0) prime = false;
}

if (true === prime && parseInputInt !== 1) {
    console.log(`Число ${parseInputInt} є простим числом`);
} else if (false === prime) {
    console.log(`Число ${parseInputInt} є складеним числом`);
} else {
    console.log(`Число ${parseInputInt} є ні складеним, ні простим числом`);
}

/**Вам необхідно написати програму, 
 * яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами. 
 **/

const inputIntSecondTask      = prompt('Enter number: ');
const parseInputIntSecondTask = parseInt(inputIntSecondTask);

let perfectNumbers = '';

for (i = 1; i <= parseInputIntSecondTask; i++) {
    let divisors = [];
    let sum      = 0;

    for (k = 1; k < i; k++) {
        if (i % k === 0) {
            sum += k;
        }
    }

    if (sum === i) perfectNumbers = perfectNumbers + i + ' ';

}

console.log(perfectNumbers);

/**Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. 
 * Уся ялинка має бути реалізована одним рядком (можна перевірити за допомогою alert у браузері):
   *
  ***
 *****
*******
 */

const inputHeight      = prompt('Enter height: ');
const parseInputHeight = parseInt(inputHeight);

let tree  = '';
let stars ='*';

for (i = 1; i <= parseInputHeight; i ++) {
   for (spaces = 1; spaces <= parseInputHeight - i; spaces++) {
    tree += ' ';
   }

   if (i === 1) {
    stars = '*';
   } else {
    stars += '**';
   }

   tree += stars + '\n';
}

alert(tree);