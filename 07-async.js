// Event Loop

// const timeout = setTimeout(() => {
//   console.log('After timeout')
// }, 2500)
//
// clearTimeout(timeout)// для остановки работы таймаута
//
// const interval = setInterval(() => {
//   console.log('After timeout')
// }, 1000)
//
// // clearInterval(interval)// для остановки работы таймаута

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
//
// delay(() => {
//   console.log('After 2 seconds')
// }, 2000)// вызов функции содержащей таймаут


const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так. Повторите попытку')
        }, wait)
    })
    return promise
}

//
// delay(2500)
//   .then(() => {
//     console.log('After 2 seconds')
//   })
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()


//react-hook-form
/*const useMyForm=()=>{
    return{
        register:(name)=>{
            return{name}
        },
        handleSubmit:(callBack)=>{
            return (e)=>{
                e.preventDefault()
            }
        }

    }
}
const myReactHookForm=()=>{
    const { register,handleSubmit, formstate:{errors}}=useForm()

        return  <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("email")}/>
    <button> submit</button>

</form>
}*/

/*const { register,handleSubmit, formstate:{errors}}=useForm()
<form onSubmit={handleSubmit(onSubmit)}>

    <input {...register("email")}/>
<button> submit</button>
</form>*/
