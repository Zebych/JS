//реализовать функцию sum которая суммирует 2 числа  следующим образом sum(3)(6) === 9 -> вторые
// и последующие скобки после вызова функции означают что предыдущий вызов возвращает функцию ->return function(6)
//КОРИРОВАНИЕ-используется для уменьшения количества передаваемых props->сохранить значение в памяти функции
//позволяет передавать только функцию
function sum(n: number) {
    return function (n2: number) {
        let c = n + n2
        return function (n3: number) {
            return n3 + c
        }
    }
}

/*console.log(sum(3)(6)(3))

let param = sum(3)// сохранили в области видимости функции значение n=3
console.log(param(6)(3))*/// использовали замыкание чтобы обработать n=3 переданнымпараметром функции n2=6->9

//счетчик замыканием
function makeCounter() {
    let num = 0
    return function () {
        return num += 1
    }
}

const counter = makeCounter()
const counter2 = makeCounter()

/*console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())
console.log(counter2())*/

function makeCounterArg(startNum: number) {
    let counter = startNum
    return function (action?: string) {
        switch (action){
            case 'increase':
                return counter+=1
            case 'decrease':
                return counter-=1
            case 'reset':
                return counter = 0
            case 'set':
                return counter-=1
            case 'getCounter':
                return counter-=1
            default:
                return counter
        }
/*        return {
            increase: () => ++counter,
            decrease: () => --counter,
            reset: () => {
                counter = 0
                return 0
            },
            set: (num: number) => {
                counter = num
                return counter
            },
            getCounter: () => counter
        }*/
    }
}

const inc=makeCounterArg(5)
/*console.log(inc('increase'))
console.log(inc('decrease'))
console.log(inc('reset'))
console.log(inc('increase'))
console.log(inc())*/
/*console.log(makeCounterArg(5).decrease())
console.log(makeCounterArg(5).reset())
console.log(makeCounterArg(3).set(6))
console.log(makeCounterArg(7).increase())
console.log(makeCounterArg(9).getCounter())
console.log(makeCounterArg(9))*/


//реализовать функцию которая принимает числот в качестве аргумента, которое указывает на количество слогаемых
// и чтобы корректно работали следующие вызовы:
//superSum(0)//10
//superSum(3)(2)(5)(3)//10
//superSum(3)(2)(5,3)//10
//superSum(3)(2,5,3)//10
//superSum(3)(2,5)(3)//10
//superSum(3)(2,5)(3,9)//10

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
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2)(5, 3))
// @ts-ignore
console.log(superSum(3)(2, 5, 3))
// @ts-ignore
console.log(superSum(3)(2, 5)(3))*/
