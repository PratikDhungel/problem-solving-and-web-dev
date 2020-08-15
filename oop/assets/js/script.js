class Rectangle{

    constructor (_width, _height, _color){

        console.log("Create rectangle")

        this.height = _width;
        this.width = _height;
        this.color = _color;
    }

    getArea(){
        return this.height * this.width
    }
    
}

// let rectangle1 = new Rectangle(4, 8, "blue");
// console.log(rectangle1.getArea())
// let rectangle2 = new Rectangle(10, 5, "red");
// console.log(rectangle2.getArea())










// Getters and Setters
class Square{

    constructor (_sideLength){

        this.height = _sideLength;
        this.width = _sideLength;
    }

    get area(){
        return this.width * this.height;
    }

    set area(area){
        this.height = Math.sqrt(area);
        this.width = Math.sqrt(area);
    }
}

let square1 = new Square(4)
// console.log(square1.area)

// Call the setter
square1.area = 49;
// console.log(square1.width);
// console.log(square1.height);










// Static Methods

class NewSquare{

    constructor(_sideLength){
        this.width = _sideLength;
        this.height = _sideLength;
    }

    // a and b are two squares
    // equals() methood compares the side length of the two squares and returns true if they are equal
    static equals(a, b){

        return a.width * a.height === b.width * b.height;
    }
}

let newSquare1 = new NewSquare(8);
let newSquare2 = new NewSquare(10);

// Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects. 
// console.log(NewSquare.equals(newSquare1, newSquare2));


class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called';
    }
    static anotherStaticMethod() {
        console.log(this)
        return this.staticMethod() + ' from another static method';
    }
  }
  StaticMethodCall.staticMethod(); 
  // 'Static method has been called'
  
//   StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'













// Parent and Child Classes (Inheritence)
class Person{

    constructor (_name, _age){
        this.name = _name;
        this.age = _age;
    }

    describe(){

        console.log('I am ', this.name, 'and I am', this.age , 'years old!');
    }
};

// Create a Child Class that inherits the properties from a Parent Class


class Programmer extends Person{

    constructor(_name, _age, _yearsOfExperience){
        // super calls the constructor of the parent class
        super(_name, _age);
        // Custom behavior of the programmer
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.

        this.yearsOfExperience = _yearsOfExperience
    }

    code(){
        console.log(this.name, "is writing code!!")
    }
};


// let person1 = new Person("Jeff, The Dude", 45)
// let programmer1 = new Programmer("Donny", 49, 6)


const programmers = [

    new Programmer("Jeff, The Dude", 45, 3),
    new Programmer("Donny", 49, 6)
];


function developeSoftware(programmers){

    // Develope Software
    for (programmer of programmers){

        programmer.code();
    }
}

// developeSoftware(programmers);







// Polymorphism
// Redfining a method inside a derived child class of a parent


class Animal{

    constructor(_name){

        this.name = _name;
    }

    // Method to override later
    makeSound(){

        console.log("Generic animal sound!!");
    }
}

class Dog extends Animal{
    
    constructor(_name){

        super(_name);
    }

    makeSound(){
        
        // Calls the parent Class makeSound() method
        super.makeSound();
        console.log("Woof! Woof!");
    }
}


const animal1 = new Animal("Doggo");
// animal1.makeSound();

const dog1 = new Dog("Robbo");
// dog1.makeSound();







// JS Classes and DOM Manipulation

const randomList = document.querySelector(".random-list");

// Create a new file for the given Class

class ListBinding{

    constructor(_element){
        this.listElement = _element;
        this.textList = [ ];
    }

    // Create a new li element with text
    static createListItem(text){

        let itemText = document.createTextNode(text);
        let individualItem = document.createElement("li");
        individualItem.appendChild(itemText);
        return individualItem;
    }

    // Insert the list elements into the DOM
    updateAndRenderUI(){

        // Remove all the existing list items
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // Fill the ul while li elements
        let i = 0
        for(const text of this.textList){

            this.listElement.appendChild(ListBinding.createListItem(text));

        }
    }

    addItemToList(text){

        this.textList.push(text);
        this.updateAndRenderUI();
    }

    removeItemAtIndex(index){

        this.textList.splice(index, 1);
        this.updateAndRenderUI();
    }

}

const listBindingElement = new ListBinding(randomList);
console.log("🐔");


listBindingElement.addItemToList("List Item 1");
listBindingElement.addItemToList("List Item 2");
listBindingElement.addItemToList("List Item 3");

listBindingElement.removeItemAtIndex(2);