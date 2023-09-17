/**
 * Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
 **/

function reverseString(str) {
    let reverseStr = '';

    for (i = str.length - 1 ; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr;
}

// console.log(reverseString('test string'));

/**
 * Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.
 **/

function isPalindrome(str) {
    const reverseStr = reverseString(str);

    return str === reverseStr ? `${str} це паліндромом.` : `${str} це не паліндромом.`
}

// console.log(isPalindrome('wow'));

/**
 * Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
 **/

function findGCD(a, b) {
    let divisorsA  = [];
    let divisorsB  = [];
    let divisorsAB = [];

    for (i = 1; i <= a; i++) {
        if (0 === a % i) {
            divisorsA.push(i);
        }
    }

    for (k = 1; k <= b; k++) {
        if (0 === b % k) {
            divisorsB.push(k);
        }
    }

    for (divisorA of divisorsA) {
        if (true === divisorsB.includes(divisorA)) {
            divisorsAB.push(divisorA);
        }
    }

    return Math.max(...divisorsAB);
}

// console.log(findGCD(8778, 78));
// console.log(findGCD(567, 6789));