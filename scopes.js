// вывести чётные числа от 0 до 100
// for (i = 1; i <= 100; i++) {
//    if (i % 2 === 0) {
//       console.log(i)
//    }
// }

//заполнить массив 10ю 'x'
// let array = [];

// for (i = 0; i < 10; i++) {
//    array[i]='x'
// }
// console.log(array);

// заполнить массив числами от 1до 10
// let arr = []
// for (i = 1; i <= 10; i++) {
//    arr[i] = i
// }
// console.log(arr);

// заполнить массив 10 случайными числами(дробями)
// let arr = []
// for (i = 0; i < 10; i++) {
//    arr[i] = Math.random(i).toFixed(2);
// }
// console.log(arr);

// заполнить массив случайными числами от 1 до 10
// let arr = []
// for (i = 0, min = 1, max = 10; i < 10; i++) {
//    arr[i] = Math.floor(Math.random(i) * (max - min + 1)) + min;
// }
// console.log(arr);

// Дан массив с числами. С помощью цикла 
// выведите только те элементы массива, которые больше нуля и меньше 10-ти
// let arr = [0, 1, 5, 75, 16, 8, 19, 10]
// for (i = 0; i <= arr.length; i++) {
//    if (arr[i] > 0 & arr[i] < 10) {
//       console.log(arr[i]);
//    }
// }

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со 
// значением 5. Как только будет найден первый такой элемент - выведите 'Есть'
//  и оборвите цикл. Если такого элемента нет - ничего не выводите

// let arr = [7, 1, 5, 75, 16, 8, 19, 10, 5]

// const func = (arr) => {
//    for (i = 0; i <= arr.length; i++) {
//       debugger;
//       if (arr[i] === 5) {
//          debugger;
//          return console.log('Есть');
//       }
//    }
// }
// func(arr)
// как надо было решать))
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++) {
// 	if(arr[i] == 5) {
// 		alert('Есть!');
// 		break;
// 	}}


// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
// let arr = [7, 1, 5, 75, 16, 8, 19, 10, 5]
// for (i = 0, sum = 0; i <= arr.length; i++) {
//    sum += arr[i]
//    console.log(sum);
// }

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива
// let arr = [7, 1, 5, 75, 16, 8, 19, 10, 5]
// for (i = 0, sum = 0; i <= arr.length; i++) {

//    sum += arr[i] * arr[i]
//    console.log(sum)
// }

// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [7, 1, 5, 75, 16, 8, 19, 10, 5]
// for (i = 0,sum=0; i < arr.length; i++) {
//    sum += arr[i]
// }
// let average = sum / arr.length
// console.log(average)

// // js lesson 2
// let students = [
//    {
//       name: "Bob",
//       age: 22,
//       isMarried: true,
//       scores: 85
//    },
//    {
//       name: "Alex",
//       age: 21,
//       isMarried: true,
//       scores: 89
//    },
//    {
//       name: "Nick",
//       age: 20,
//       isMarried: false,
//       scores: 120
//    }, {
//       name: "John",
//       age: 19,
//       isMarried: false,
//       scores: 100
//    }
// ];
// // const getName=st=>st.name
// // console.log(students.map(getName))

// // map
// console.log(students.map(st => st.name)) //метод map

// function map(arr, callback) {
//    const newArr = []
//    for (i = 0; i < arr.length; i++) {
//       newArr[i] = callback(arr[i])
//    }
//    return newArr
// }
// console.log(map(students, getName))

// // filter
// const getMarriedSt = st => st.isMarried
// function filter(arr, callback) {
//    const newArr = []
//    for (i = 0; i < arr.length; i++) {
//       if (callback(arr[i])) {
//          newArr.push(arr[i])
//       }
//    }
//    return newArr
// }
// console.log(students.filter(getMarriedSt))//метод filter
// console.log(filter(students, getMarriedSt))

// // метод find для поиска чего то конкретного в массиве

// function find(arr, callback) {
//    for (i = 0; i < arr.length; i++) {
//       if (callback(arr[i])) {
//          return arr[i]
//       }
//    }
//    return undefined// нужно всегда предусматривать вариант если нужный параметр не будет найден
// }
// // если находится необходимый элемент ретурнит ссылку на этот элемент
// const findAlex=st=>st.name==='Alex'
// console.log(find(students,findAlex))
// console.log(students.find(findAlex))//метод find


// удалить первый и последний символ строки
// function removeChar(str) {
//    return str.slice(1, -1);
// }

// ..
// const quarterOf = (month) => {
//    if (month > 0 && month <= 12) {
//       if (month <= 3) {
//          return console.log( '1 quarter')
//       } else if (month > 3 && month <= 6) {
//          return console.log( '2 quarter')
//       } else if (month > 6 && month <= 9) {
//          return console.log( '3 quarter')
//       } else {
//          return console.log('4 quarter')
//       }
//    } else {
//       return undefined
//    }

// }
// quarterOf(3)


//поменять элементы массива местами по возрастанию
// const arr= [34,55,25]

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]>arr[i+1]){
//      [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//   }

// }
// console.log(arr);
//оптимизированный вариант поиска наиболее большого и построения массива от меньшего значения до большего
// const arr = [34, 55, 25]
// for (j = 0; j < arr.length - 1; j++) {
//    for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]// деструктуризирующее присваивание
//       }

//    }
// }
// console.log(arr);


// sort для сортировки строк в массиве

/*
const name=['Bob','Joe','Nick','Mike']

console.log(names.sort())*/


/*Возвращение в среднем данного массива округляется вниз до ближайшего целого числа.
    Массив никогда не будет пустым.*/
/*function getAverage(marks) {
     return Math.floor(marks.reduce((sum, elem) => sum + elem/marks.length, 0))
}
getAverage([2,2,2,1])*/

//check_alive должен возвращать true, если здоровье игрока больше 0, или false, если оно равно 0 или ниже.
/*
function checkAlive (health) {
        return health > 0;
}*/

//Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
/*
function positiveSum(arr) {
 return arr.reduce((a,b)=>b>0?a+b:a,0)
}
positiveSum([-1,2,3,4,-5])*/


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
copyUser.friends[0] = 'Bob'

//Проверка:
console.log(user === copyUser)//false
console.log(user.friends === copyUser.friends)//true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
deepCopyUser.friends[0] = 'Alexandr'

//Проверка:
console.log(user === deepCopyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students];
copyStudents[0].name = 'Alexandr'
console.log(copyStudents)
console.log(students)
//Проверка:
console.log(students === copyStudents)//false
console.log(students[0].name === copyStudents[0].name)//true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}));
deepCopyStudents[0].age = 32
console.log(students)
console.log(deepCopyStudents)
//Проверка:
console.log(students === deepCopyStudents) //false
console.log(students[0].age === deepCopyStudents[0].age) //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = deepCopyStudents.map(d => d.name).sort();
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a, b) => a.scores - b.scores).reverse();
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter((s) => s.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор )
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(n => !n.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(n => n.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(',');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(' ');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => ({...s, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(n => n.name === 'Nick' ? {...n, isMarried: true} : n)

console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name = "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el, 0);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

//не верно решено
const addFriends = (students) => {
        return students.map(s => ({...s, friends: students.map(s => s.name).filter(st => st !== s.name)}))
}
console.log(addFriends(students));
















