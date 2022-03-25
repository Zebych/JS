const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

//проверка на массив
// if(Array.isArray(fib)){
//     console.log('true');
// }

// Method
// cars.push('Рено')// добавляет значение в конец массива
// cars.unshift('Волга')// добавляет значение в начало массива
//
// const firstCar = cars.shift()//удаляет первый элемент массива(забрать)
// const lastCar = cars.pop()//удаляет последний элемент массива
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')//находит индекс по значению,если значение не найдено вернет -1
// cars[index] = 'Porsche'//присваивает по индексу новое значение
// console.log(cars)
//.slice(1, -3)// возвращает новый массив, содержащий копию части исходного массива.минус указывает на отсчет с конца

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

// FIND
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)//вернет объект в котором произошло совпадение заданного условия
// const person1 = people.find(person => person.budget === 3500)// упрощенный вариант использования стрелочной ф-ии(лямда ф-ия)
// console.log(person1)

//Функции предекаты(возвращают true/false)
// INCLUDES
// console.log(cars.includes('Мазда!'))// проверяет на наличие значения в массиве возвращает true/false
// SOME
// console.log(cars.some(c=>c==='Мазда!'))// проверяет на наличие значения в массиве или объекте возвращает true/false
// EVERY
// console.log(cars.every(с=>c.length>2))// проверяет на заданное условие все элементы массива возвращает true/false,
// если хоть один элемент не соответствует вернет false


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

//SET- возвращает объект индивидуальных данных массива(если были дублирующиеся данные в массиве возвращает их один раз)
// const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]
// function set(array){
//     return new Set(array)
// }
//
// console.log(set(arr))//Set { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

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

//перекинуть элементы массива с добавлением свойств в объект
let names = ['tanya', 'valera', 'lena']
let a1 = names.reduce((acc, el) => {
    acc[el] = 'hey'
    return acc// чтобы прошел по всем элементам массива
}, {})
console.log(a1)//{tanya:'hey',valera:'hey',lena:'hey'}

//forEach
//перекинуть элементы массива с добавлением свойств в объект
let a = {}
let names1 = ['tanya', 'valera', 'lena']
names1.forEach((el) => {
    a[el] = 'hey'
})
console.log(a)//{tanya:'hey',valera:'hey',lena:'hey'}

// FLAT -На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1
// Упрощение вложенных массивов
let arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// добавить элемент объекта находящегося в массиве другому объекту находящемуся в другом массиве
const state = {
    data: [],
    imgArr: [
        {id: 1, photo: 'mug1'},
        {id: 2, photo: 'mug2'},
        {id: 3, photo: 'mug3'},
        {id: 4, photo: 'mug4'},
        {id: 5, photo: 'mug5'},
        {id: 6, photo: 'mug6'},
        {id: 7, photo: 'mug7'},
    ],
};
let dataAxios = [
    {
        name: 'mug1',
        id: 1,
        price: 50,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug3',
        id: 3,
        price: 90,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug2',
        id: 2,
        price: 70,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug4',
        id: 4,
        price: 100,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug5',
        id: 5,
        price: 110,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug6',
        id: 6,
        price: 120,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug7',
        id: 7,
        price: 130,
        toPurchase: 1,
        inStock: 10
    },
]
const pushObj = () => {
    state.data = dataAxios.map((d) => {
        const index = state.imgArr.find(i => i.id === d.id)
        return (d = {...d, photo: index.photo})
    })
    console.log(state.data)

}
pushObj(state, dataAxios)

//посчитать укладывается ли в сутки
function determineTimeArray(durations) {
    let sec = 0;
    let str = [];
    for (let i = 0; i < durations.length; i++) {
        str = durations[i].split(":");
        console.log(str)
        sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
    }
    return sec / 3600 <= 24;
}

console.log(determineTimeArray(["06:00:00", "12:00:00", "06:30:00"]))

