// const name = 'Владилен'
// const age = 26
//
// function getAge() {
//   return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`// можно использовать тернарник
// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
// `

// console.log(output)

const name = 'Владилен'
// console.log(name.length)//возвращает  количество элементов в массиве
// console.log(name.toUpperCase())// приводит строку к верхнему регистру
// console.log(name.toLowerCase())//приводит строку к нижнему регистру
// console.log(name.charAt(2))// возвращает элемент под 2м индексом =>а
// console.log(name.indexOf('!'))//находит индекс первого совпадения с искомым элементом,если элемента нет то =>-1
// console.log(name.toLowerCase().startsWith('влад'))//приводит значение к нижнему регистру и проверяет совпадает ли начало строки =>true
// console.log(name.startsWith('влад'))//проверяет совпадает ли начало значения с искомым => false
// console.log(name.endsWith('ен!'))//проверяет совпадает ли конец значения с искомым => true
// console.log(name.repeat(3))// дублирует значение указанное количество раз
const string = '     password      '
// console.log(string.trim())//обрезает пробелы с двух сторон
// console.log(string.trimLeft())//обрезает пробелы слева от значения
// console.log(string.trimRight())//обрезает пробелы с


//написание строк с использованием функции что позволяет изменять строку
function logPerson(s, name, age) {
    console.log(s, name, age)//['Имя: ', ', Возраст: ', '!', raw: Array(3)]'Владилен' 26
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`//передача параметров с использованием обратных
// ковычек `` приводит к формированию массива с строковыми значениями ['Имя: ', ', Возраст: ', '!', raw: Array(3)]
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)

//INDEXOF-вернет индекс первого попавшегося совпадения с которого начинается заданная строка
console.log("SDSSFSD sasha gdfg".indexOf("sasha"));//8