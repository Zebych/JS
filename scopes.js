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
function positiveSum(arr) {
 return arr.reduce((a,b)=>b>0?a+b:a,0)
}
positiveSum([-1,2,3,4,-5])