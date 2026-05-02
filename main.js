/* Задание 1
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