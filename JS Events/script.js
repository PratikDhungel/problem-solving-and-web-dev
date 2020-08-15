

// var buttonEvent = document.querySelector("button");
// console.log(buttonEvent);
// var paraEvent = document.querySelector("p");

// buttonEvent.addEventListener("click" , function (){

//     paraEvent.textContent = "This is the new text";
//     this.textContent = "Whoa!! - Kenaue Reeves";

// });


var buttonEvent = document.querySelector("button");
console.log(buttonEvent);


buttonEvent.addEventListener("click" , function(){

    console.log("Inside the listener");
    document.body.classList.toggle("purple");

});