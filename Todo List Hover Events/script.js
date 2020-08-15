
var listItems = document.querySelectorAll("li");
console.log(listItems);


for (i = 0 ; i < listItems.length ; i++){

    listItems[i].addEventListener("mouseover" , function(){

        console.log("Inside event listener for:" , i)
        this.classList.toggle("selected")

    })

    listItems[i].addEventListener("mouseout" , function(){

        this.classList.toggle("selected")

    })

    listItems[i].addEventListener("click" , function(){

        this.classList.toggle("done");

    })
};
