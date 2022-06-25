"use strict"; 


function User(name, age){
    this.name = name;
    this.age = age;
    this.human = true; 
    this.Hello = function(){
        console.log(`Hello ${this.name}`); // funkcja konstruktor przyjmuje metedy - to sa zlykle funkcje 
    }
};

User.prototype.Goodbay = function(){
    console.log(`Goodbay ${this.name}`);// dodawanie nowej metody do funkcji konstruktora 
}

const person1 = new User('David', 33); 
const person2 = new User('Dmytro', 32); 
console.log(person1.Goodbay(), person2.Goodbay());
