const table = document.querySelector('#table');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    title = prompt("Enter book title")
    author = prompt("Enter book author")
    pages = prompt("Enter book pages")
    read = prompt("Enter book read")
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


console.log(table);
console.log(myLibrary);