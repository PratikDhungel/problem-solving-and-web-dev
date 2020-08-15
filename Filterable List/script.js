const $titleContainer = document.querySelector(".title-container");
const $searchBarContainer = document.querySelector(".search-bar-container")
const $contactsListContainer = document.querySelector(".contacts-list-container");

let contactListData = {
    A : ["Abe", "Adam", "Alan", "Anna"],
    B : ["Beth", "Bill", "Brad"],
    C : ["Carrie", "Cathy", "Curtis"]
}

// Create Contact List Dat
// let contactListData = [

//     ["A", "Abe", "Adam", "Alan", "Anna"],
//     ["B", "Beth", "Bill", "Brad"],
//     ["C", "Carrie", "Cathy", "Curtis"]
// ];

// Method to display the page Title
function displayHeader(){

    let title = document.createElement("h1");
    let pageTitle = "My Contacts";
    title.innerText = pageTitle;
    $titleContainer.appendChild(title);
}

// Method to display the search bar above the contact list
function displaySearchBar(){

    let searchBar = document.createElement("input");
    searchBar.classList.add("search-bar");
    searchBar.setAttribute("placeholder", "Search Contact...")
    $searchBarContainer.appendChild(searchBar);
}

// Method to create a new list (li) element
function generateNewListElement(listValue){

        
    let newListElement = document.createElement("li");
    newListElement.innerText = listValue;
    return newListElement;
}

// Method to render the contacts list
function displayContactLists(contactListData){

    let listData = contactListData;
    let contactTitleList = Object.keys(listData);
    let contactValueList = Object.values(listData);

    for(let i = 0; i < contactTitleList.length; i++){

        let currentList = contactValueList[i];
        let newList = document.createElement("ul");

        if(currentList.length <= 0){
                
            continue;
        }

        let newElement = generateNewListElement(contactTitleList[i]);
        newList.appendChild(newElement);
        newElement.classList.add("contact-title");

        for(let j = 0; j < currentList.length; j++){

            // Create a new li element for contact list
            let newElement = generateNewListElement(currentList[j]);
            newElement.classList.add("contact-value");
            
            // Append the li element to the parent ul element
            newList.appendChild(newElement);
        }
        // Append ul element to the parent div
        $contactsListContainer.appendChild(newList);
    }
}

// Method to return a filtered list based on the search Value
function getFilteredContactList(searchValue){

    let contactTitleList = Object.keys(contactListData);
    let contactValueList = Object.values(contactListData);


    contactListData = {
        A : ["Abe", "Adam", "Alan", "Anna"],
        B : ["Beth", "Bill", "Brad"],
        C : ["Carrie", "Cathy", "Curtis"]
    }

    // Change serachValue to UpperCase
    searchValue = searchValue.toUpperCase();
    let filteredList = [];

    let newObject = {};

    for(let i = 0; i < contactTitleList.length; i++){

        let currentList = contactValueList[i]
        let newList = [];

        console.log("Current List is:",currentList);
        newList = currentList.map(function(listItem){

            // Check if the item is the contact title (i.e. A,B,C...) by checking the index
            // And
            // Check if the item is filterd by the searchValue

            let isItemFiltered = listItem.toUpperCase().indexOf(searchValue) > -1

            // Return the item if any one of the flag of true or else return null
            if(isItemFiltered){
                return listItem
            }
            else{
                return null
            }
        }).filter(value => value);

        console.log("New List is:", newList);
        newObject[contactTitleList[i]] = newList;

        filteredList.push(newList);
    }
    console.log(newObject);
    return newObject;
}

// Method to render the list based on filtered data
function renderView(newObject){

    $contactsListContainer.innerHTML = '';
    displayContactLists(newObject);
}

// Method to initalize view
function initializeView(){

    displayHeader();
    displaySearchBar();
    displayContactLists(contactListData);
}

// Method to search items in the list
function searchItem(){
    
    const $searchBar = document.querySelector(".search-bar");
    $searchBar.addEventListener("keyup", function(){
        let searchValue = $searchBar.value;
        let newObject =  getFilteredContactList(searchValue);
        renderView(newObject);
    })
}

initializeView();
searchItem();