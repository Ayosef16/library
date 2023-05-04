const table = document.querySelector('#table');
const form = document.querySelector('.form');
// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const pages = document.querySelector('#pages');
// const read = document.querySelector('#read');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    title = e.currentTarget.title.value;
    author = e.currentTarget.author.value;
    pages = e.currentTarget.pages.value;
    read = e.currentTarget.read.checked;
    addBookToLibrary(title, author, pages ,read);
    console.log(e.currentTarget.author.value);
    console.log(myLibrary);
})
