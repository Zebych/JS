//РЕКУРСИЯ
// найти сумму всех чисел
const sumNum = (num) => {
    if (num == 1) return 1
    return num + sumNum(num - 1)
}
console.log(sumNum(10));

//Получить число из ряда фибоначчи//77-подвиснет т.к. есть ограничения вызова ф-ии 10 000 раз
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

console.log(fib(3))

//факториал числа
function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}

console.log(factorial(5))

//ЗАМЫКАНИЕ:
function makeCounter() {
    let currentCount = 1
    return function () {
        return currentCount++
    }
}

let counter = makeCounter()
//каждый вызов функции увеличивает результат
// alert(counter())
// alert(counter())
// alert(counter())
//новый счетчик будет независим от первого
let counter2 = makeCounter()
// alert(counter2())


//BIND/APPLY/CALL
//bind-возвращает другую функцию с навсегда заданным контекстом(не выполняет)
function foo() {
    console.log(this.name)
}

let a = {name: 'Sasha'}
let b = {name: 'Viktor'}
const bindedFooA = foo.bind(a)
const bindedFooB = foo.bind(b)
bindedFooA()//"Sasha"
bindedFooB()//"Viktor"

//Пример с параметрами:
function foo1(age, citi) {
    console.log(`${this.name},${age},${citi}`)
}

let me = {name: "Alex"}
const bindedFooMe = foo1.bind(me, 34)
bindedFooMe("Vladimir")//"Sasha,34,Vladimir"

//apply/call-сразу выполняет созданную функцию,разница в способах передачи параметров
function foo3(age, citi) {
    console.log(`this.name,${age},${citi}`)
}

let myName = {name: "Sasha"}
foo3.call(myName, 34, "Vladimir")
foo3.apply(myName, [34, "Vladimir"])

//МАССИВ
//найти минимальное число в массиве
let numbers = [1, 45, 23, 4, -2, -100, 100]
let minValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
console.log(minValue)
//найти максимальное число
let maxValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > minValue) {
        maxValue = numbers[i]
    }
}
console.log(maxValue)

//методы массивов
//MAP-служит для получения нового массива, на основе обрабатываемого -той же длинны,но с обработанными элементами
let arrString = ["1", "2", "3"]
console.log(arrString.map((el) => +el));//преобразование массива строк в массив чисел
let arrAge = [18, 20, 12]
console.log(arrAge.map((age) => {
    if (age >= 18) {
        return {age: age, adult: true}
    } else {
        return {age, adult: false}
    }
}));//из массива чисел получает массив объектов с полями age и adult:true/false,в зависимости от соблюдения условия

//FILTER-служит для получения нового массива,на основе отсеивания элементов обрабатываемого задавая условия
let cityArr = ["Minsk", "Moscow", "", "London"]
console.log(cityArr.filter(e => e !== ""))//пропускает в массив только не пустые строки
//
let arrPeople = [{age: 18, sex: "f", name: "Sveta"}, {age: 34, sex: "m", name: "Dima"}, {
    age: 25,
    sex: "f",
    name: "Lena"
},]
console.log(arrPeople.filter(el => el.age >= 18 && el.sex === "f"));//пропускаем на вечеринку только девочек("f")18+
//FILTER+MAP+добавить новое свойство
console.log(arrPeople.filter(u => u.age > 18).map(u => ({...u, passed: true})))
//0: {age: 34, sex: 'm', name: 'Dima', passed: true}
// 1: {age: 25, sex: 'f', name: 'Lena', passed: true}


//REDUCE- пробигает по всему массиву и возвращает какое то одно обобщенное значение(примитив,массив,объект)
cityArr.reduce((acc, el) => {
    if (el !== "") {
        acc++
    }
}, 0)//посчитает сколько в массиве не пустых строк
//
let girls = arrPeople.reduce((acc, person) => {
    if (person.age >= 18 && person.sex === "f") {
        acc.push(person)
    }
    return acc
}, [])// вернет массив девочек 18+
console.log(girls)
//
let num = [1, 4, 6, 66, -12]
num.reduce((acc, el) => {
    acc += el
    return acc
}, 0)//вернет сумму всех чисел в массиве

//Пузырьковая сортировка
function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = swap
            }
        }
    }
    return arr
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//вычислить разницу между объемом одного массива и объемом второго
const findDifference = (a, b) => Math.abs(b.reduce((acc, el) => acc * el) - a.reduce((acc, el) => acc * el))
console.log(findDifference([3, 2, 5], [1, 4, 4]));

//заменить букву в строке по заданному принципу
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')// если в строке есть буква 'T' она будет заменена на 'U'
    //или
    // const arr=dna.split('')
    // do{
    //     const index= arr.indexOf('T')
    //     arr[index]='U'
    // } while (arr.some(c=>c==='T'))
    //
    // return arr.join('')
}
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));

//
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}

console.log(array('1,2,3'))//, '2'