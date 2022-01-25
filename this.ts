// function-constructor-для создания однотипных объектов
// в строгом режиме 'use strict'  this всегда указывает на undefined/ в нестрогом на window
/*function Person(name, age) {
    this.name = name
    this.age = age
    // return 'dfg'- при наличии явного return в ф-ии конструктор:
    // return примитивных данных игнорируется
    //return [] объектов игнорирует this  и возвращает то что ретурним
}
let evgenObj = new Person('Evgen', 33)// ключевое слово new формирует новый объект
console.log(evgenObj)

// отличие ф-ии конструктора от обычной функции в том что конструктору можно добавлять
//методы не засоряя объект- каждый объект будет иметь возможность обратиться к методу по
// ссылке, тогда как при использовании обычной ф-ии каждый получившийся объект имел бы свою ф-ию

Person.prototype.sumFunc=function(){}*/

//function constructor in TS
/*type PersonType = {
    name: string,
    age: number
}
function Person(this:PersonType,name: string, age: number) {
    this.name = name
    this.age = age
}
let evgenObj = new (Person as any)('Evgen', 33)

console.log(evgenObj)*/


//  THIS    -ссылка на какой то объект,в строгом режиме работает только в функциях
/*let obj={name:'Evgen',}
function f(){
    console.log('this:',this)
    console.log('my name is',this.name)
}
f()//this указывает на window или undefined  в зависимости от нестрого или строгого режима
    // т.к. слева от точки при вызове ничего нет

obj.f=f
obj.f()//this указывает на объект от имени которого его вызывали-то что слева от точки*/

// 1
/*let obj={name:'Evgen',}
let obj2={name:'sasha',}
let obj3={
    name:'someName',
innerObj:{
        name:'InnerName'
}}
function f(){
    console.log('this:',this)
}*/
// 1.1
/*obj2.f=f
obj2.f()//obj2
obj3.innerObj.f=obj2.f
obj3.innerObj.f()//innerObj*/

// 1.2
/*obj2.f=f
let objFunc=obj2.f
objFunc()// window -так как слува от вызова ничего нет*/

//2
let obj = {
    name: 'Evgen',
    f() {
        //здесь obj.f() имеет наследование this от obj
        //this никгода не берется из замыкания, оно рассчитывается каждый раз когда к нему происходит обращение
        function inner() {
            console.log('this:', this)
        }

        inner()// ф-ия вызывается от имени window так как слева от точки ничего нет
    }
}

obj.f()//window


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

/*type someObjType = {
    name: string;
    age: number;
}*/

let someObj = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    return `My name is ${this.name}. I am ${this.age}`
}

