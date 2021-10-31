const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')//  добавить новый элемент в массив находящийся в объекте
// // person['key_4'] = undefined// удалить значение
// delete person['key_4']// удалить из объекта и ключь и значение
//
// console.log(person)
// console.log(person['key_4'])

//получить данные из объекта
// const name = person.name
// const age = person.age
// const languages = person.languages
// ИЛИ  ДЕСТРУКТУРИЗАЦИЯ
// const {name, age: personAge = 10, languages} = person
// console.log(person)


// ПОЛУЧИТЬ ДАННЫЕ ОБЪЕКТА ЧЕРЕЗ ЦИКЛ
// for (let key in person) {// опасен тк бежит не только по ключам но и по прототипам
//   if (person.hasOwnProperty(key)) {// ПРОВЕРКА если объект имеет свое собстенное свойство не находящееся в прототипе
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }
// ПОЛУЧИТЬ ДАННЫЕ ОБЪЕКТА ЧЕРЕЗ МЕТОДЫ
// Object.keys(person).forEach((key) => {// keys- получает ключи объекта в массиве/forEach- проходит по всем элементам массива
//   console.log('key:', key)
//   console.log('value:', person[key])
// })


// Context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))// для вывода в консоль любого объекта благодаря this
    },

    keysAndValues() {
        // "key": value
        // Object.keys(this).forEach(key => {
        //   console.log(`"${key}": ${this[key]}`)
        // })
        // const self = this
        Object.keys(this).forEach(function(key) {// так как не стрелка создает свой контекст по этому нужно биндить
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------- Start -------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })

        if (bottom) {
            console.log('------- End -------')
        }
    }
}

// const bound = logger.keys.bind(person)// bind- создает новую функцию которую можно вызывать
// bound()
// logger.keysAndValues.call(person)// call как и bind но сразу  вызывает созданную ф-ию
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])// тот же call только принимает максимум два параметра