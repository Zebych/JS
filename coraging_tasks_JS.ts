// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

/*function sum(num){
    return function (num2){
        return num+num2
    }
}

console.log(sum(3)(6));*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0
    return function () {
        return count += 1
    }
}

/*
const counter = makeCounter()
console.log(counter())
console.log(counter())
const counter2=makeCounter()
console.log(counter2())
console.log(counter())*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2() {
    let count = 0
    return function
        remoteСontroller() {
        return {
            increase: () => count += 1,
            decrease: () => count -= 1,
            reset: () => count = 0,
            set: (num) => count = num
        }

    }
}

const controller = makeCounter2()

/*console.log(controller().set(5))
console.log(controller().increase())
console.log(controller().decrease())
console.log(controller().reset())
console.log(controller().increase())*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n: number) => n

    let _arguments: number[] = []

    function helper(...args: number[]) {//...args прием бесконечного количества аргументов благодаря ...
        _arguments = [..._arguments, ...args]//сохранение всех аргументов функции
        if (_arguments.length >= num) {// >= чтобы функция не стала бесконечной
            _arguments.length = num// обрезать массив на заданную длину
            return _arguments.reduce((acc, el) => acc + el)
        } else {
            return helper
        }
    }

    return helper
}

/*
console.log(superSum(0))
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2)(5,3))
// @ts-ignore
console.log(superSum(3)(2,5,3))
// @ts-ignore
console.log(superSum(3)(2,5)(3,9)  )
// @ts-ignore
console.log(superSum(3)(2,5)(3) )*/

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n){
    if(n===1)return 1
    return n+sumTo(n-1)
}

// console.log(sumTo(100))

// Вычислить факториал
function factorial(n){
    if(n===1)return 1
    return n * factorial(n-1)
}

// console.log(factorial(5))

// Числа Фибоначчи
function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

// console.log(fib(3))

// Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list){

    console.log(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }
}
// printList(list)

// вывод односвязного списка в обратном направлении
function printList2(list){

    if (list.next) {
        printList2(list.next); // делаем то же самое для остальной части списка
    }
    return console.log(list.value)
}
// printList2(list)