/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let ganon = {
    name: "Ganondorf",
    age: "over 100"
}

let sword = {
    name: "Doriyah!",
    age: "At least 2000",
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Enemy{
    name = "Zelda"
    age = "1000"
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get name(){
        return this.name
    }
    enemyInfo(){
        return [this.name, this.age];
    }
}
let ene = new Enemy("Zelda", "1000");


console.log(ganon);
console.log(sword);
console.log(ene.name);
console.log(ene.enemyInfo());