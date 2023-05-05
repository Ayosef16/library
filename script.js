const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
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

function updateTable(library) {
    library.forEach(book => {
        let row = tbody.insertRow();
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if ( book.read === true) {
            checkbox.checked = true;
        }
        else if ( book.read === false) {
            checkbox.checked = false;
        }
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        read.appendChild(checkbox);
    });
}

function clearTable(){
    tbody.innerHTML = '';
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    title = e.currentTarget.title.value;
    author = e.currentTarget.author.value;
    pages = e.currentTarget.pages.value;
    read = e.currentTarget.read.checked;
    addBookToLibrary(title, author, pages ,read);
    clearTable();
    updateTable(myLibrary);
    console.log(myLibrary);
})
