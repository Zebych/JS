const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
const people = [
  {name: 'Vladilen', budget: 4200},
  {name: 'Elena', budget: 3500},
  {name: 'Victoria', budget: 1700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Рено')// добавляет значение в конец массива
// cars.unshift('Волга')// добавляет значение в начало массива
//
// const firstCar = cars.shift()//удаляет первый элемент массива
// const lastCar = cars.pop()//удаляет последний элемент массива
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')//находит индекс по значению,если значение не найдено вернет -1
// cars[index] = 'Porsche'//присваивает по индексу новое значение
// console.log(cars)

//поиск с использованием цикла
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
//
// console.log(findedPerson)

//FINDINDEX
// поиск с использованием методов
// const index = people.findIndex(function(person) {//цикл обращающийся к каждому элементу
//   return person.budget === 3500
// })
// console.log(index)// найдет индекс элемента массива в котором произойдет совпадение условия

//FIND
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)//вернет объект в котором произошло совпадение заданного условия
// const person1 = people.find(person => person.budget === 3500)// упрощенный вариант использования стрелочной ф-ии(лямда ф-ия)
// console.log(person1)

//INCLUDES
// console.log(cars.includes('Мазда!'))// проверяет на наличие значения в массиве возвращает true/false

//MAP
// const upperCaseCars = cars.map(car => {// проходит по всем элементам массива и приводит каждый элемент к верхнему регистру
//   return car.toUpperCase()
// })
//
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

//FILTER
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)// возвращает значения соответствующие условиям
// console.log(pow2Fib)
// console.log(filteredNumbers)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//REDUCE
const people1 = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people1
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    }, 0)// суммирует все отфильтрованные бюджеты
console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)