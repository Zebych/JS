/*type PersonType={
    name:string
    age:number
    city:string
}
interface IPersonType extends PersonType{
   education:true
}*/

// interface  в отличии от type может наследовать типы и расширять, может наследоваться от других interface
/*interface IPersonClass {//описывает обязательные параметры которые должны быть в классе,но не запрещает расширять
    name: string
    age: number
    city: string
}
class Person implements IPersonClass {
    name: string
    age: number
    city: string
    education: string// расширили параметры за пределы interface
    constructor(name: string, age: number, city: string, education: string) {
        this.name = name
        this.age = age
        this.city = city
        this.education = education
    }
    sayHi() {//попадает не в объек, а в prototype
        console.log('sayHi')
    }
}
const newPerson = new Person('yo', 10, 'Vladimir', 'hight')
console.log(newPerson)
//
interface ISpeakPerson extends IPersonClass {
    greeting:()=>void
}
class AngryPerson extends Person implements ISpeakPerson{
    constructor(name: string, age: number, city: string, education: string) {
        //super()- отдельный метод который вызывает конструктор класса от которого наследуется(extends Person) Person.constructor()
        super(name, age, city, education);
    }
    greeting(){
        console.log('greeting')
    }
    sayHi() {//попадает не в объек, а в prototype
        console.log('AngryPerson sayHi')
        super.sayHi()//есть доступ к родительской функции 'sayHi'
    }
}
const newAngryPerson = new AngryPerson('yo', 10, 'Vladimir', 'hight')
console.log(newAngryPerson)
newAngryPerson.greeting()//'greeting'
newAngryPerson.sayHi()//'AngryPerson sayHi'
//
class PolitePerson extends Person implements ISpeakPerson{
    constructor(name: string, age: number, city: string, education: string) {
        super(name, age, city, education);
    }
    greeting(){
        console.log('PolitePerson greeting')
    }
}
const newPolitePerson = new PolitePerson('yoYo', 100, 'Vladimir', 'hight')
console.log(newPolitePerson)
newPolitePerson.greeting()//'PolitePerson greeting'
newPolitePerson.sayHi()//'PolitePerson greeting'
newAngryPerson.sayHi()//'AngryPerson sayHi'*/


//Статические методы- для ограничения доступа к функциям то есть функции не будет у всех объектов
interface IMan{
    name:string
    superName:string
}
class Test implements IMan{
    static greeting='I am '
    name:string
    superName:string
    constructor(name:string, superName:string) {
        this.name = name
        this.superName = superName
    }
    static getFullName(obj:IMan){
        return this.greeting + obj.name + ' ' +obj.superName
    }
}
let testObj= new Test('Test','Testovich')
console.log(testObj)
console.log(Test.getFullName(testObj))
