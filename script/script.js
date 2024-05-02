//1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function task1(a, b) {
//     if (a<b) {
//         return a; 
//     }
//     else{
//         return b;
//     }
// }
// let num1 = +prompt("Write a number1")
// let num2 = +prompt("Write a number2")
// console.log(task1(num1, num2));

//===========================================

//2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function task2(a, b){
//     let min, max 
//     if(a>b){
//         max = a;
//         min = b;
//     }
//     else{
//        max = b;
//        min = a
//     }
    
//     for(let i=max; i>=min; i--){
//         if(i%2 ===0){
//             console.log(i);
//         }               
//     }
// }
// let num1 = +prompt("Write a number1")
// let num2 = +prompt("Write a number2")
// console.log(task2(num1, num2));

//================================================

//3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power(a, b=2) {
//     return a**b
// }
// let num = +prompt("Write a number")
// console.log(power(num));

//================================

//4.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function task4(n) {
//     let sum = 0
//     for (let i=1; i<=n; i++){
//        sum = sum+i;
//     }      
//     return sum
// }
// let num = +prompt("Write a number")
// console.log(task4(num));


//============================

//5.Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function task5(n, m) {
//     let sum1 = 0
//     let sum2 = 0
    
//     for (let i = n; i<=m; i++) {
//         if(i%2 ===0){
//             sum1 = sum1+i;            
//         }
//         else{
//             sum2 = sum2+i;           
//         }
       
//     }
//                                              // return [sum1, sum2]
//     console.log(sum1,sum2)
// }
// let num1 = +prompt("Write a number1")
// let num2 = +prompt("Write a number2")
//                                              // console.log(task5(num1, num2))
// task5(num1, num2)

//==========================================

//6.Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

function task6(arr){
    if(arr.length===0){
        return null
    }
    let symbols = arr[0]
    
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>symbols.length){
            symbols = arr[i]
        }
    }
    return symbols
}

let arr = ['one', 'two', 'three', 'four', 'five']
console.log(task6(arr))

// не знаю я как это делать:(