// 1 Функции Function Declaration и Function Expression отличаются тем что к Declaration можно обращаться до объявления ф-ии
// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet() {
    console.log('Привет - ')
}

const arrow = (name, age) => {
    console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет - ', name)

// arrow2('Vladilen')

const pow2 = num => num ** 2

// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b//по умолчанию используются если при вызове ф-ии не переданы значения

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {// ...-спрет оператор формирует копию входящих данных и возвращает массив
    let result = 0
    for (let num of all) {// новый синтаксис цикла for
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания используются для определения приватных данных
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Vladilen')
console.log(logWithLastName)//ƒ (lastName) { console.log(name + lastName)}
console.log(logWithLastName('Minin'))//undefined
console.log(logWithLastName('Kuznezov'))//undefined

//BIND CALL APPLAY 06-object.js(59 const logger = {)

// const bound = logger.keys.bind(person)// bind- создает новую функцию которую можно вызывать
// bound()
// logger.keysAndValues.call(person)// call как и bind но сразу  вызывает созданную ф-ию
// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])// тот же call только принимает максимум два параметра

//забаиндить функцию на объект
let man = {lastName: 'Забиров'}

function hello(firstName, age) {
    console.log(firstName + this.lastName + age)
}

const hello2 = hello.bind(man)
const hello3 = hello.bind(man, "Сашка")
hello2("Cанёк", 34)
hello3(34)

