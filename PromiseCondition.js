// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (param) => {
        console.log(`Promise is resolved with data: ${param}`)
    },
    onError: (param) => {
        console.log(`Promise is rejected with error: ${param}`)
    }
}
const PromiseСondition=()=>{
    const onCreateClick=()=>{

    }
    const onResolveClick=()=>{

    }
    const onRejectClick=()=>{

    }
    return(
        <div>
            <button onClick={onCreateClick}>Create Promise</button>
            <button onClick={onResolveClick}>Resolve Promise</button>
            <button onClick={onRejectClick}>Reject Promise</button>
        </div>
    )
}
