/**
 * Попрацюємо з числовим паліндромом) 
 * Числовий паліндром - це натуральне число, яке читається зліва направо і справа наліво однаково. 
 * Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. 
 * Але Паліндром можна отримати як результат операцій над іншими числами. 
 * Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку. 
 * Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. 
 * Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. 
 * Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 
 * У результаті я хочу, щоб ви написали функцію, яка повертатиме об'єкт, 
 * де буде властивість result - і це буде паліндром, і властивість steps - це число викликів до знаходження паліндрома. 
 * Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number - число яке немає поліндрому
 */

function reverseString(str) {
  return  str.split('').reverse().join('');
}

function isPalindrome(number) {
  const str = number.toString();
  
  return str === reverseString(str);
}

function isSumPalindrome(number, steps = 1) {
  if (steps > 6542) {
    return {
      result: 'It\'s Lychrel number or too many steps.',
      steps: steps
    }
  }

  const reverseNumber = parseInt(reverseString(number.toString()));
  const result        = reverseNumber + number;

  if (true === isPalindrome(result)) {
    return {
      result: result,
      steps: steps
    }
  } 

  return isSumPalindrome(result, ++steps);
}

console.log(isSumPalindrome(196));
console.log(isSumPalindrome(45));
console.log(isSumPalindrome(312));
console.log(isSumPalindrome(567));
console.log(isSumPalindrome(485));
console.log(isSumPalindrome(7689));