// Book Class to Represent a Book

class Book{

    constructor(title, isbn, author){

        this.title = title;
        this.isbn = isbn;
        this.author = author;
    }
}



// UI Class to handle UI Tasks

class UI{

    static displayBooks(){

        const books = Store.getBooks();
        console.log(Store.getBooks);
        books.forEach(UI.addBookToList);
    }

    static addBookToList(book){

        const list = document.querySelector("#book-list");
        
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td>${book.author}</td>
            <td><i class="fa fa-trash" id="delete-book"></td>
        `;

        list.appendChild(row);
    }

    static deleteBookFromList(e){

        if(e.classList.contains("fa-trash")){

            e.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){

        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.innerText = message;
        document.querySelector(".book-entry").insertBefore(div, document.querySelector(".book-form"))

        // Remove alerts after 2 seconds
        setTimeout(function(){

            document.querySelector('.alert').remove();
        }, 2000)
    }
    
    static clearFields(){

        document.querySelector("#book-title").value = '';
        document.querySelector("#book-isbn").value = '';
        document.querySelector("#book-author").value = '';
    }
}


// Store Class to Handle Local Storage

class Store{

    static getBooks(){

        let books = [];
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books')) ;
        }

        return books;
    }


    static addBooks(book){

        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    

    static removeBooks(isbn){

        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }

}




// Event to display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);









// Event to add a book
 let bookForm = document.querySelector(".book-form");

 bookForm.addEventListener("submit", function(e){

    e.preventDefault();

    // Get form values
    const title = document.querySelector("#book-title").value;
    const isbn = document.querySelector("#book-isbn").value;
    const author = document.querySelector("#book-author").value;

    const errorMessage = "Field(s) cannot be empty.";
    const successMessage = "New Book added successfully.";

    // Validate form content
    if (title === '' || isbn === '' || author === ''){

        // alert('Field(s) cannot be empty');
        UI.showAlert(errorMessage, "error");
    }
    else{

        // Create a new instance of Book class
        const book = new Book(title, isbn, author);
    
        // Add book to table, show message and clear input fields
        UI.addBookToList(book);

        // Add book to Store
        Store.addBooks(book);
        UI.showAlert(successMessage, "success");
        UI.clearFields();
    }
 });






// Event to remove a book

const singleTableRow = document.querySelector('#book-list');
console.log(singleTableRow)

singleTableRow.addEventListener("click", function(e){

    UI.deleteBookFromList(e.target);

    const deleteBookMessage = "Book removed from list."
    UI.showAlert(deleteBookMessage, "success")
})