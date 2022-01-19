// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
/*let promise = () => {
    return new Promise()
}
promise.prototype.message = function () {
    console.log("Promise is created")
}
promise.prototype.message()*/

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*const promiseFunc = () => {
    let promise = Promise.resolve('Promise Data')
    return promise.then((res)=>console.log(res))
}
promiseFunc()*/

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
/*const promiseFunc = () => {
    let promise = Promise.reject('Promise Error')
    return promise.catch((res)=>console.log(res))
}
promiseFunc()*/

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*const promiseRes=()=>{
    let promise= new Promise((res)=>{
        setTimeout(()=> {
            res('Promise Data')
        },3000)
    })
    return promise.then((res)=>{
        console.log(res)
    })
}
promiseRes()*/



