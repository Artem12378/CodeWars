/* Задание 1

6 kyu
Unique In Order
Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и сохранением первоначального порядка элементов.

Например:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */


let uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
    let result
    if(typeof(iterable) === 'string' ){
        result = iterable.split('')
    }
    if (Array.isArray(iterable)) {   
        result = iterable.slice(); 
    }
    const newIterableFilter = 
        result.filter((filt,i) =>{ 
            return filt != result[i-1] 
        })
        return newIterableFilter
    
    

}
console.log(uniqueInOrder([1,2,3,4,5,5,5,66,66,66,66]));





/* 
7 kyu Beginner Series #3 Sum of Numbers
Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b.

Примечание: a и b не упорядочены!

Примеры (a, b) --> выходные данные (пояснение) 

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b)
{
    //Good luck!
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let total = 0
    
     if(a===b){
        return `${a} since both are same`
    } else{
       for(let i=start; i<= end ;i++){
        
        total += i
       }
    }
    return total
}

console.log(getSum(1,0))
console.log(getSum(1,2))
console.log(getSum(0,1))
console.log(getSum(1,1))
console.log(getSum(-1,0))
console.log(getSum(-1,2))

/*You have passed all of the tests! :) */



/* Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных в массиве минимум из 4 положительных целых чисел. Никакие числа с плавающей точкой или неположительные целые числа передаваться не будут.

Например, при передаче массива типа [19, 5, 42, 2, 77], результатом должно быть 7.

[10, 343445353, 3453445, 3453545353453] должен возвращать 3453455. */

function sumTwoSmallestNumbers(numbers) {
    // Code here

    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

/* You have passed all of the tests! :) */

/* 

Банкоматы допускают PIN-коды из 4 или 6 цифр. PIN-коды не должны содержать ничего, кроме ровно 4 цифр или ровно 6 цифр.

Если функции передан корректный PIN-код в виде строки, верните true, иначе верните false.

Примеры (Вход --> Выход):
"1234" --> true
"12345" --> false
"a234" --> false */

function validatePIN(pin) {
    //return true or false
    if (pin.length !== 4 && pin.length !== 6) return false;
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') return false;
    }
    return true;
}

console.log(validatePIN('1234'))


/* You have passed all of the tests! :) */




/*
 6 kyu  Sum of Digits / Digital Root
 
Цифровой корень — это рекурсивная сумма всех цифр числа.

Дано число n, вычислите сумму его цифр. Если полученное значение имеет более одной цифры, продолжайте этот процесс до тех пор, пока не получится однозначное число. На вход подаётся неотрицательное целое число.

Примеры:

text
16  →  1 + 6 = 7
942  →  9 + 4 + 2 = 15  →  1 + 5 = 6
132189  →  1 + 3 + 2 + 1 + 8 + 9 = 24  →  2 + 4 = 6
493193  →  4 + 9 + 3 + 1 + 9 + 3 = 29  →  2 + 9 = 11  →  1 + 1 = 2
 */


function digital_root(n) {
  //TODO
  while (n >= 10) {
    let sum = 0;
    for (let digit of String(n)) sum += +digit;
    n = sum;
  }
  return n;

  
  result = numArr.reduce((sum,n) => Number(sum) +Number(n))
  result +=''
  result = result.split('')
  console.log(result)
  if(result.length >1){
    return result = result.reduce((sum,n) => Number(sum) +Number(n))
  }
 

}
console.log(digital_root(493193))



/* You have passed all of the tests! :) */



