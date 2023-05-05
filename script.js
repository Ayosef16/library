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
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        read.textContent = book.read
        console.log(row);
    });
}

function clearTable(){
    tbody.innerHTML = '';
}

// function addRows() {
//     let trow = document.createElement('tr');
//     for (let i=0 ; i<4; i++) {
//         let tdata = document.createElement('td');
//         trow.appendChild(tdata);
//     }
//     tbody.appendChild(trow);
// }

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
