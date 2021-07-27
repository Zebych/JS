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

/*
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
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
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

const addFriends = (students) => {
    const allName = students.map(s => s.name)

    const newStudents = students.map(st => {
        return {
            ...st,
            friends: allName.filter(name => name !== st.name)
        }
    })

    return newStudents
}
console.log(addFriends(students));*/


//заменить все , на -
/*const replaceDots = (str) => str.replace(/\./g, '-');

replaceDots("one.two.three")*/

// поменять число на противоположное
// function opposite(number) {
//     return (-number)
// }

// вернуть строку указаное число раз
// function repeatStr (n, s) {
//     return s.repeat(n);
// }

/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

    1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

    Note: newlines should be added between rows, but there should be no trailing newline at the end.

    FUNDAMENTALSSTRINGSBASIC LANGUAGE FEATURES*/


/*function multiTable(number) {
   let arrNum=[1,2,3,4,5,6,7,8,9,10]
   console.log   ( arrNum.map(n=>{
      return n+' * '+number+' = '+n*number
   }).join("\n"))
}
multiTable(5)*/


// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное в нее число, а затем суммировала результаты.
/*
function squareSum(numbers){
   console.log (numbers.reduce((acc,el)=>acc+Math.pow(el,2),0))

}
squareSum([18,-4,-10,14,14,-4,-2,20,10])
*/


//DEEP COPY

    // links to watch theory
    // https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
    // https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

    // 1. Simple object
 /*   let man = {
    name: 'John',
    age: 28
};

    let manFullCopy ={...man}	//  your code
    man.age=82
    console.log(man)
    console.log(manFullCopy)


    // 2. Array of primitives
    let numbers = [1, 2, 3];

    let numbersFullCopy =[...numbers] //  your code
    numbers[0]=4
    console.log(numbers)
    console.log(numbersFullCopy)


    // 3. Object inside an object
    let man1 = {
    name: 'John',
    age: 28,
    mother: {
    name: 'Kate',
    age: 50
}
};

    let man1FullCopy={ ...man1,mother:{...man1.mother}}

    man1.mother.age=18
    console.log(man1)
    console.log(man1FullCopy)

    // 4. Array of primitives inside an object
    let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

    let man2FullCopy ={...man2,friends:[...man2.friends]} // your code
    man2.friends[2]="Alex"
    console.log(man2)
    console.log(man2FullCopy)

    // 5 Array of objects
    let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
    ];


    let peopleFullCopy =people.map(p=>({...p})) // your code
    people[2].age=18
    console.log(people)
    console.log(peopleFullCopy)

    // 6 Array of objects inside object
    let man3 = {
    name: 'John',
    age: 28,
    friends: [
{name: "Peter", age: 30},
{name: "Steven", age: 32},
{name: "William", age: 28}
    ]
};

    let man3FullCopy={...man3,friends:man3.friends.map(f=>({...f}))} //  your code
    man3.friends[2].age=18
    console.log(man3)
    console.log(man3FullCopy)

    // 7 Object inside an object, inside an object
    let man4 = {
    name: 'John',
    age: 28,
    mother: {
    name: "Kate",
    age: 50,
    work: {
    position: "doctor",
    experience: 15
}
}
};

    let man4FullCopy={...man4,mother:{...man4.mother,work:{...man4.mother.work}}} //  your code
    man4.mother.work.experience=51
    console.log(man4)
    console.log(man4FullCopy)

    // 8 Array of objects inside object -> object
    let man5 = {
    name: 'John',
    age: 28,
    mother: {
    name: "Kate",
    age: 50,
    work: {
    position: "doctor",
    experience: 15
},
    parents: [
{name: "Kevin", age: 80},
{name: "Jennifer", age: 78},
    ]
}
};

    let man5FullCopy={...man5,mother:{...man5.mother,work:{...man5.mother.work},parents:[man5.mother.parents.map(p=>({...p}))]}} //  your code
    man5.mother.work.experience=51
    man5.mother.parents[1].age=18
    console.log(man5)
    console.log(man5FullCopy)

    // 9 Object inside an object -> array -> object ->  object
    let man6 = {
    name: 'John',
    age: 28,
    mother: {
    name: "Kate",
    age: 50,
    work: {
    position: "doctor",
    experience: 15
},
    parents: [
{
    name: "Kevin",
    age: 80,
    favoriteDish: {
    title: "borscht"
}
},
{
    name: "Jennifer",
    age: 78,
    favoriteDish: {
    title: "sushi"
}
},
    ]
}
};

    let man6FullCopy ={...man6,mother:{...man6.mother,work:{...man6.mother.work},
    parents:man6.mother.parents.map(p=>({...p,favoriteDish:{...p.favoriteDish}}))}} //  your code

    man6.mother.work.experience=51
    man6.mother.parents[0].favoriteDish.title="coffee"

    console.log(man6)
    console.log(man6FullCopy)

    //10 Array of objects inside an object -> object -> array -> object ->  object
    let man7 = {
    name: 'John',
    age: 28,
    mother: {
    name: "Kate",
    age: 50,
    work: {
    position: "doctor",
    experience: 15
},
    parents: [
{
    name: "Kevin",
    age: 80,
    favoriteDish: {
    title: "borscht",
    ingredients: [
{title: "beet", amount: 3},
{title: "potatoes", amount: 5},
{title: "carrot", amount: 1},
    ]
}
},
{
    name: "Jennifer",
    age: 78,
    favoriteDish: {
    title: "sushi",
    ingredients: [
{title: "fish", amount: 1},
{title: "rise", amount: 0.5}
    ]
}
},
    ]
}
};

    let man7FullCopy={...man7,mother:{...man7.mother, work:{...man7.mother.work},
    parents:man7.mother.parents.map(p=>({...p,favoriteDish:{...p.favoriteDish,
    ingredients:p.favoriteDish.ingredients.map(i=>({...i}))}}))}} //  your code

    man7.mother.work.experience=115
    man7.mother.parents[0].favoriteDish.ingredients[0].amount=33

    console.log(man7)
    console.log(man7FullCopy)
*/


