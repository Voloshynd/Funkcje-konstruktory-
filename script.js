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


let message = (function(name) {
    return `Hello ${name} !`;
 })('World'); // argument 
 console.log(message); // Immediately invoked function expression


 function sum(a, b) {
    // console.log(this === window); //bedzie true 
    // this.myNumber = 20; // dodaje 'myNumber' do globalnego obiektu 
    return a + b;
 };

 console.log(sum(15, 16));     
console.log(window.myNumber);// bedzie 20 w brauserze 

function showThis(){
    console.log(this)// w brauzerze obiekt window 
}

showThis(); // jezeli mamy use strict to this === undefined 

const obj = {
    a: 10,
    b: 15,
    sum: function(){
        console.log(this) // jezeli wykorzystujemy metod w obiekcie, this bedzie wskazywal na ten obiekt 
        function shout(){
            console.log(this);
        }
        shout(); // undefined, bo funckja shout() nie jest metoda obiektu 
    }
};


obj.sum(); 


function sayName(surname){
    console.log(this);
    console.log(this.name +" " + surname);
};

const user = {
    name: "Dmytro"
};

sayName.call(user, 'Voloshyn');// argumenty przekazujemy po przecinku jako string, ustawia kontekst 
sayName.apply(user, ['Voloshyn']); // argumenty przekazujemy w tablicy, ustawia kontekst 


// bind() tworzy nawa funkcje 

function count(num){
    return this * num; // w this mamy 2 
}; 

const double = count.bind(2); // ma kontekst 2 
console.log(double(12));






const btn = document.querySelector('button');
 btn.addEventListener('click', function(){
    console.log(this);
    this.style.background = "red"; // wykorzystyjemy kontekst iwenta 
});

// arrow funktions nie maja swojego kontekstu, bierze konstekst u swojego rodzica 


const obj1 = {
    num: 10,
    sayNumber: function(){
        console.log(this) 
        const say =()=>{
            console.log(this);
        }
        say(); // => bedzie szukala kontekst u rodzica 
    }
};


obj1.say(); 