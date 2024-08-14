// // var a = 5
// // a = "fd"
// // var x : number = 5
// // x = 5

// // var str :string = "Hello"
// // var test : boolean = true
// // test = false

// let nameH : string = "Hello"

// alert(nameH)
// var a : number = 5
// var str : string = "ff"
// var achref : boolean = false


// var t: object = [1,3,4]

// var t : number[] = [1,3,4,"fdd"]

// var c : string[] = ["fef"]

// var mixt : (number | string | boolean)[] = [1,3,'Hello',true]

// var p : any[]  =  [1,3,'Hello',true,undefined]
// var l : [number,string] = [5,"Hello"]

// const sum : (a :number,b : number)=> number        =(a,b)=>{
//     return a + b
// }

// interface User{
//     name : string,
//     age? : number 
// }

// var nUser : User = {name : "Mahmoud",age : 55}

// var pUser : User = {name :"Achref"}

// var omor : any = pUser.age
// var omor : number = pUser.age!
// var omor : number = pUser.age ?? 0

// var a : string | number = 4
// var b : string | number = "Hello"

// type strinum = string | number

// var c : strinum = 888

// type parfum = {
//     name : string,
//     model? : number
// }

// var t : parfum = {name : "dolce jelbena"}

// var statusCommande = "initial"

// statusCommande = "Accepted"

// if (statusCommande == "Accepted") {
//     console.log("Salingati")
// }

// enum defstatComm {
//     initial = "initial",
//     Accepted = "Accepted"
// }

// var statusCommande : defstatComm = defstatComm.initial

// statusCommande = defstatComm.Accepted

// if (statusCommande == defstatComm.Accepted) {
    
// }

// interface IPerson{
//     goodBye : ()=>void
// }

// class Person implements IPerson{
//     name : string
//     age : number
//     constructor(name : string,age : number){
//         this.name = name
//         this.age = age
//     }
//     goodBye= () => console.log('Samir')
// }

// interface Person{
//     name : string,
//     age : number
// }

// var nPerson : Person = {name : "Achref",age : 88}

// nPerson.birth = "22/22/55"

// var nPerson : {[key : string] : any} = {name : "Achref",age : 88, birth : "22/55/22"}

// interface Person{
//     [key : string] : any
// }

// var nPerson : Person = {name : "Achref",age : 88, birth : "22/55/22"}

interface Person {
    name : string,
    age : number
}

// var nPerson : Person = {name : "Mahmoud"}

interface PersonWithoutAge extends Omit<Person,"age">{

}

// var nPerson : PersonWithoutAge = {name : "Mahmoud"}
interface PersonWithName extends Pick<Person,"age">{

}

// var nPerson : PersonWithName = {age : 55}

interface PersonP extends Partial<Person>{

}

// var nPerson : PersonP = {}

interface PersonR extends Required<Person>{

}
var nPerson : PersonR = {name :"ee",age :5}