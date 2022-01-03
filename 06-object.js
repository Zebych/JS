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
//SOME
// console.log(cars.some('Мазда!'))// проверяет на наличие значения в массиве или объекте возвращает true/false
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

//ГЛУБОКОЕ КОПИРОВАНИЕ С ИЗМЕНЕНИЕМ ДАННЫХ
let state={
    address:{
        streets:[
            {name:"yo"},//поменять на {name:"Привет"}
            {name:"yoYoYo"},
        ],
        city:{value:"Vladimir"}
    },
    age:{value:34}
}
let newState={
    ...state,address:{...state.address,streets: state.address.streets.map(s=>{
        if(s.name==="yo")return {...s,name:"Привет"}
        return s
        })}
}

// избавиться от дублированных чисел в массиве-вывести только те что не дублируются
/*const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

function withoutRepeat(array) {
    const testValue = []
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i]
        if (!(currentItem in obj)) {
            obj[currentItem] = 1
        } else {
            obj[currentItem] += 1
        }
    }
    const keys = Object.keys(obj)
    keys.forEach(key => {
        if (obj[key] === 1) {
            testValue.push(key)
        }
    })
    return testValue
}

console.log(withoutRepeat(arr))*/

// посчитать разницу между первыми элементами массива и вторыми
/*
function number(busStops) {
    const passengersAtEachStop = {}
    for (let i = 0; i < busStops.length; i++) {
        const index = busStops[i]
        passengersAtEachStop[index] = index[0]-index[1]
    }
    const values = Object.values(passengersAtEachStop)

    return values.reduce((acc, el) => {
        return acc + Number(el)
    }, 0)
}

console.log(number([[55, 0], [93, 15], [3, 41], [55, 6], [32, 82], [44, 45], [83, 90], [83, 44], [90, 74], [84, 137], [7, 42], [80, 2]]))*/

// посчитать укладывается ли по времени в 24 часа
//через объект
/*function determineTimeObject(durations) {
    const travelTime = {}
    for (let i = 0; i < durations.length; i++) {
        const index = durations[i]
        const splitIndex = index.split(":")
        const timeNum = splitIndex.map((clockValues) => {
            return Number(clockValues)
        })
        const secondsInHours = timeNum[0] * Math.pow(60, 2)
        const secondsToMinutes = timeNum[1] * 60
        travelTime[index] = secondsInHours + secondsToMinutes + timeNum[2]
    }
    const timeValues = Object.values(travelTime)
    const allTime = timeValues.reduce((acc, time) => {
        return acc + time
    }, 0)
    const whatIsDeadline = 24 * Math.pow(60, 2)
    return allTime <= whatIsDeadline;
}

console.log(determineTimeObject(["06:00:00", "12:00:00", "06:30:00"]))*/