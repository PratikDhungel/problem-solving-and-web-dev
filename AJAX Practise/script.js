let $button = document.querySelector("#btn");
let $buttonTwo = document.querySelector("#btn-two");
let $cardInterfaceDiv = document.querySelector("#response");
let $responseText = document.querySelector("#response-text");
// $responseText.style.font = "24px"
$button.addEventListener("click", displayMessageTwo);

$buttonTwo.addEventListener("click", function(){

    console.log("Button two clicked");
});

// function displayMessageOne(){
    
//     let newRequest = new XMLHttpRequest();
//     newRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-2.json", true);
    
//     // Optional - On progress, which is used for loaders
//     newRequest.onprogress = function(){

//         console.log("Ready State:", newRequest.readyState);
//         console.log("Loading");
//         $responseText.innerText = "Loading";
//         // displayLoader ();
//     }
    
//     // newRequest.onreadystatechange = function(){

//     //     console.log("Ready State:", newRequest.readyState);
//     // }
    
//     newRequest.send();

//     newRequest.onload = function(){
        
//         console.log("Ready State", newRequest.readyState);
//         if(this.status == 200){
//             console.log(this.responseText);
//             $responseText.innerText = this.responseText;
//         }
//         else if(this.status == 404){
//             $responseText.innerText = "404 NOT FOUND!"
//         }
//     };
// }


// Using github open API
function displayUsersList(responseBody){

    console.log("Inside displayUsersList");
    responseBody = JSON.parse(responseBody);
    // console.log(responseBody);

    responseBody.forEach(element => {
       
        let newCardElement = document.createElement("div");
        newCardElement.classList.add("single-user-details-container")
        let cardElementContent = '\
        <img src="'+ element.avatar_url + '" class="user-profile-pic" width="150px" height="150px">\
        <ul class="user-details">\
            <li> User ID: ' + element.id + '</li>\
            <li> Github User Name: ' + element.login + '</li>\
            <li> User URL: ' + '<a href="' + element.html_url + '" target="_blank">' + element.html_url + '</li>\
        </ul>';
        newCardElement.innerHTML = cardElementContent;
        $cardInterfaceDiv.appendChild(newCardElement);
    });
}


function displayMessageTwo(){

    console.log("Inside method");

    let newGitHubRequest = new XMLHttpRequest();
    newGitHubRequest.open("GET", "https://api.github.com/users", true);
    
    newGitHubRequest.send();

    newGitHubRequest.onload = function(){

        if(this.status == 200){
            
            let responseBody = this.responseText;
            console.log(responseBody);

            displayUsersList(responseBody);
        }
    }
}


