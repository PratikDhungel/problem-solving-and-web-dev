let toDoList = document.querySelector("ul")
let toDoListElements = document.querySelectorAll("li")
let deleteButtons = document.querySelectorAll("span")
let newToDoInput = document.getElementById("new-to-do")
let addNewToDoButton = document.querySelector("#add-new-todo")
let newToDo


// toDoList.addEventListener("click", function(event){

//     console.log("Inside ul click",event)
//     if(event.target && event.target.nodeName == "LI"){

//         console.log("Inside li click")
//         event.target.classList.toggle("checked-li")
//     }

//     console.log("Target element", event.target)

//     if(event.target && event.target.nodeName == "I"){

//         console.log("Inside span click")
//         console.log("Deleted the to do item")
//         event.target.parentElement.parentElement.remove();
//         event.stopPropagation()
//     }

// })


for(i=0; i<toDoListElements.length; i++){
    toDoListElements[i].addEventListener("click", function(){ 
        document.getElementById("todo-text").classList.toggle("checked-li")
    })
}

// for(i=0; i<deleteButtons.length; i++){

//     deleteButtons[i].addEventListener("click", function(event){
//         console.log("Gone Case!!")
//         this.parentElement.remove();
//         event.stopPropagation()
//     })
// }

let todoListData =[];

newToDoInput.addEventListener("keypress", function(event){

    if(event.keyCode == "13"){

        // get the input text
        console.log("Enter pressed!!")
        newToDo = this.value
        todoListData.push({
            value: this.value,
            isCompleted: false
        });
        this.value = " "

        // add new li element to the ul
        // toDoList.appendChild("<li>This is a new LI</li>")
        // let newDeleteButton = document.createElement("span")
        // newDeleteButton.textContent = "<span>X"
        // newItem.insertBefore(newDeleteButton)
        let newItem = document.createElement("li")
        newItem.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + newToDo
        newItem.addEventListener("click", function() {   
            document.getElementById("todo-text").classList.toggle("checked-li")
            console.log(todoList)
        });
        toDoList.append(newItem)
        console.log(todoListData)
    }  
})


addNewToDoButton.addEventListener("click" , function(){

    console.log("Inside plus button listener")
    document.querySelector("#new-to-do").classList.toggle("hidden")
})