const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
const form = document.querySelector('.form');
const addBtn = document.querySelector('#add-btn');


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
        let eliminate = row.insertCell(4);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if ( book.read === true) {
            checkbox.checked = true;
        }
        else if ( book.read === false) {
            checkbox.checked = false;
        }
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                book.read = true;
            }
            else {
                book.read = false;
            }
        })
        createEliminateSVG(eliminate);
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        read.appendChild(checkbox);
    });
}


function createEliminateSVG(cell) {
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconPath.setAttribute('d', 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z')
    iconSvg.appendChild(iconPath);
    iconSvg.classList.add('svg');
    cell.appendChild(iconSvg);
}

// function updateLibraryRead(e) {
//     console.log(e.currentTarget)
//     if (e.currentTarget.checked) {
//         book.read = true;
//     }
//     else {
//         book.read = false;
//     }
// }

function clearTable(){
    tbody.innerHTML = '';
}

function showForm() {
    form.classList.remove('hidden');
    form.classList.add('visible');
}

function hideForm() {
    form.classList.remove('visible');
    form.classList.add('hidden');
}

function escForm(e) {
    if (e.key === 'Escape') {
        hideForm()
    }
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
    hideForm();
    console.log(myLibrary);
})

addBtn.addEventListener('click', showForm);

document.addEventListener('keydown',(e) => {
    escForm(e);
})