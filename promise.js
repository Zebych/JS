/*let pr = new Promise((resolve, reject) => {
    let a = 10;//можно объявлять переменные,
    console.log(a)//выполнять какие то действия
    setTimeout((response) => {
        if (response.status === 200) {
            resolve(response.value)//принимает либо 0 либо 1 аргумент-все остальные будут проигнорированы
            console.log(response.value)  // код после изменения состояния выполняется
        } else {
            reject(response.error)
        }
    }, 100, {status: 200, value: 100, error: null})
})
console.log(pr)
// resolve,reject- функции которые определяет js движок- определяют какое состояние принимает
// промис,если промис принимает значение то больше ни при каких обстоятельствах его не меняет
// new Promise- функция-конструктор принимает колбэк, выполняемая синхронно до того момента
// пока не случается асинхронная операция

//Цепочка методов promise
pr.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout((response) => {
            if (response.status === 200) {
                resolve(response.value + res)//передаем значение на основе результата res прошлого promise
            } else {
                reject(response.error)
            }
        }, 100, {status: 200, value: 1, error: null})
    })
}).then((res2) => {
    console.log(res2)
})*/

//методы создания промисов
/*let resolvePr = Promise.resolve(11)
resolvePr
    .then((res3) => {
        console.log(res3)
        return res3 * 2// возвращает новый объект promise
    })
    .then(res4 => console.log(res4))
    .then(res5=>console.log(res5))// undefined- потому что предыдущий then ничего не return*/

//отлавливание ошибки
/*let rejectPr = Promise.reject(11)
//каждый обработчик ошибок слушает только ошибки происходящие на предыдущем этапе
// err2 слушает происходящие ошибки на уровне res3/err, err3=>res4/err2, err=>new Promise.т.е на уровне предыдущего then
rejectPr
    .then((res3) => {
        console.log(res3)
    }, err => {
        console.log(err);//11
        throw 5000
    })
    .then(res4 => {
        console.log(res4)
    }, err2 => {
        console.log(err2);//5000
        return 2
    })
    .then(res5 => {
        console.log(res5)//2
    }, err3 => {
        console.log(err3);
        return 3
    })
    .then(null,err4=>{//для отлавливания последней ошибки в res5/err3
    console.log(err4)
})
//альтернатива на catch
rejectPr
    .catch(err=>{
        console.log(err)//11
        throw 222
    })
    .then((res3) => {
        console.log(res3)// при явном или неявном return какого-либо callback всегда формируется
        // новый promise в состоянии resolve
    })
    .catch(err=>{
        console.log(err)//222
    })
    .then(res4 => {
        console.log(res4)
    })
    .catch(err=>{
        console.log(err)
    })
    .then(res5 => {
        console.log(res5)
    })
    .finally(()=>{// никогда ничего не принимает в параметрах колбэка
        console.log('finally')//finally
        throw 555// при возникновении ошибки в методе формирует новый промис,который в
        // дальнейшем будет обрабатываться цепочкой промисов(не использовать)
    })
    .catch(err=>{
        console.log(err)//555 т.к. finally генерит ошибку
    })
    .finally((res=>{// для мутации глобального стейта-не зависит от результата промиса
        console.log('fin',res)//fin undefined
    }))

//Promise.
Promise.all([rejectPr,rejectPr])//срабатывает только когда все переданные промисы получат статус resolve
Promise.any()// вернет объект с данными какой промис resolve какой reject,который можно обрабатывать отталкиваясь от этого*/


//Promise 2
// console.log(async function f(){})// вернет promise  в состоянии resolve
// если в теле функции произойдет неотловленная ошибка вернется promise в состоянии reject

/*console.log('start')
async function f() {
    //если в теле async функции нет асинхронщины, но есть явный return то он оборачивается
    // в promise в состоянии resolve и обрабатывается в очереди микрозадач
    console.log('start function')
    const result = await new Promise((res) => {
        setTimeout(res, 1000, 'Done')
        //если в теле callback произойдет ошибка оставшийся код скипается
    })
    console.log(result)
    console.log('function end')
}
f()
console.log('end')*/
//1 start at promise.js:113:0
//2 start function at promise.js:115:4
//3 end at promise.js:123:0
//4 Done at result promise.js:119:4
//5 function end at promise.js:120:4

// TRY/CATCH-корректно отрабатывает тошлько в теле async function
// основное приемущество: одна область видимости для всех promise в try{}
// благодаря await  promise обрабатываются поочередно(пока не зарезолвится первый не начнет работу второй)
/*console.log('start')
async function f() {
    try{
        console.log('start function')
        const result = await new Promise((res) => {
            setTimeout(res, 1000, 'Done')
            //если в теле callback произойдет ошибка оставшийся код скипается
        })
        const result2 = await new Promise((res) => {
            setTimeout(res, 1000, 'None')
        })
        console.log(result)
        console.log(result2)
        console.log('function end')
    }catch (e){
        console.log('error')
    }
}
f()
console.log('end')*/


// tasks
/*new Promise((res,rej)=>{
    console.log(1)//1// т.к. нет асинхронного кода
})
new Promise((res,rej)=>{
    setTimeout(()=> {
        console.log(2)//2
    },0)
})
Promise.resolve( setTimeout(()=>console.log(3),0 )).then(console.log)//рандомное число т.к. setTimeout возвращает свой id
console.log(4)//4
Promise.reject(console.log(5))//5 так как сначала срабатывает функция console.log  а потом Promise
//1.4.5.рандомное число.2.3*/

/*(function(){
    setTimeout(()=>console.log(1),100)
})()
console.log(2)
new Promise((res,rej)=>{
    setTimeout(()=>console.log(3),50)
})
function f(){
    console.log(4)
}
Promise.resolve(console.log(5))
// 2,5,1,3*/

/*(function (){
    setTimeout(()=>console.log(1),100)
})()
console.log(2)
let i =0
while (i<50000000){
    i++
}
new Promise((res,rej)=>{
    setTimeout(()=>console.log(3),50)
})
function f(){
    console.log(4)
}
Promise.resolve(console.log(5))*/

//2,5,1,3-т.к. пока происходили сложные вычисления время таймаута log(1) уже истекло

/*function f(num) {
    console.log(num)
}

 Promise.resolve(1)
     .then(f)
(function () {
    console.log(2)
})()
console.log(3)
new Promise((res, rej) => {
    console.log(4)
})
setTimeout(f, 0, 5)*/
//

/*console.log(1)
function f(){
    console.log(2)
}
setTimeout(()=>{
    console.log(3)
    let p= new Promise((res,rej)=>{
        console.log(4)
        res()
    })
    p.then(()=>f())
},0)
let l= new Promise((res,rej)=>{
    console.log(5)
    rej()
})
l.then(res=>console.log(res)).catch(()=>console.log(6))
console.log(7)*/
//1,5,7,6,3,4,2

/*setTimeout(()=>console.log(1),0)
console.log(2)
new Promise((res,rej)=>{
    setTimeout(()=>rej(console.log(3)),1000)
}).catch(()=>console.log(4))
console.log(5)*/
//2.5.1.3.4

//переписать функцию таким образом чтобы она возвращала 3 2 1
// async function sleep(ms) {
//     setTimeout(() => {
//         console.log(ms)
//     }, ms * 100)
// }
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
// show()
// show запускает sleep(3)->т.к. sleep асинхронная ф-ия без явного return она возвращает объект
// promise со значением undefined в состоянии resolve, await- получив такой объект заканчивает ожидание и переходит
// к дальнейшему выполнению кода await sleep(2)- так получаем 1,2,3(100ms,200ms,300ms)

// async function sleep(ms) {
//     return new Promise((res) => setTimeout(() => {
//         console.log(ms)
//         res()
//     }, ms * 100))
// }
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
// show()
//теперь sleep возвращает новый promise в состоянии pending и await не переключается на
// выполнение следующих задач пока sleep(3) не вернет promise в состоянии resolve-получаем 3,2,1

/*let pr1 = new Promise((res) => {
    res(10)
})
let pr2 = new Promise((res) => {
    res(0)
})
pr1
    .then((res) => {
        console.log(res)
        return res + 2
    })
    .then((res) => {
        console.log(res)
        return res + 2
    })
    .then(console.log)
pr2
    .then((res) => {
        console.log(res)
        return res + 1
    })
    .then((res) => {
        console.log(res)
        return res + 1
    })
    .then(console.log)*/
//10,0,12,1,14,2

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// new Promise(()=>console.log("Promise is created"))

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// Promise.resolve('Promise Data').then((res)=>console.log(res))

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// Promise.reject('Promise Error').catch((res)=>console.log(res))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*new Promise((res)=>{
    setTimeout(()=>res('Promise Data'),3000)
}).then((res)=>console.log(res))*/

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// new Promise((res)=>{
//     setTimeout(()=>res("My name is"),1000)
// }).then(res=>onSuccess(res)).then(res=>print(res))
//
// function onSuccess(param){
//     return `${param} Alexandr`
// }
//
// function print(printParam){
//     console.log(printParam)
// }

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

/*
const promisesData = {}
const namePromise = new Promise((res) => {
        setTimeout(param => res(param), 2000, {name: "Anna"})
    }
)
const agePromise = new Promise((res) => {
        setTimeout(param => res(param), 3000, {age: 16})
    }
)
const cityPromise = new Promise((res) => {
    setTimeout(param => res(param), 4000, {city: 'Vladimir'})
})
Promise.all([namePromise, agePromise, cityPromise])
    .then((result) => {
        promisesData.name = result.find(obj => obj.name).name
        promisesData.age = result.find(obj => obj.age).age
        promisesData.city = result.find(obj => obj.city).city
        console.log(promisesData)
        Object.values(promisesData).forEach((values) => {
            console.log(values)
        })
    })
*/
