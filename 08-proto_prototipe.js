//__proto__-есть у всех объектов,если обратиться к примитивам через "." формируется proto
//1
// ({}).prototipe===({}).__proto__//false- у объекта нет prototipe
//2
// function jun(){}
// jun.prototype===jun.__proto__// false- jun.__proto__===Function.prototipe
//3
// function jun(){}
// function junior(){}
// jun.__proto__===junior.__proto__//true- (jun.__proto__=Function.prototipe)===(junior.__proto__=Function.prototipe)=>Function.prototipe===Function.prototipe/true
//jun.prototipe===junior.prototipe//false- два prototipe никогда не равны если ссылаются на разные объекты
//4
// let Component=(props)=>{
//     return `<div>don't know Prototipe</div>`
// }
// Component.prototipe===Object.prototype//false- у стрелочных функций нет prototipe
//5
// let age=18
// age.prototipe===Number.prototype//false- prototipe есть только у class и функций объявленных при помощи слова function
// age.__proto__===Number.prototype// true- при обращении к примитиву через "." формируется объект равный Numper.prototipe
//6
// class Hacker{}
// Hacker.__proto__===Function.prototipe//true- class Hacker=== Function.prototipe
//7
// function jun(){}
// jun.__proto__===Function.prototype//true
//8
//const count=12
//count.__proto__===Numper.prototipe//true

class Samurai {
    constructor(name) {
        this.name = name
    }

    hello() {
        alert(this.name)
    }
}
let shogun = new Samurai("Alex")

console.log(shogun.__proto__.__proto__===Function.prototype.__proto__)//true
console.log(shogun.__proto__.constructor.__proto__===Function.prototype.constructor.prototype)//true
console.log(shogun.__proto__.__proto__.__proto__===null)