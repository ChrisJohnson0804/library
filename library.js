function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pageCount = pages
    this.read = read
    this.deleteButton = document.createElement('button')
    this.markButton = document.createElement('button')
    this.info = function() {
        let readtext = "";
        if(read == true){
            readtext += "read.";
        } else {
            readtext += "not read yet."
        }
        return (""+ title + " by " + author + ", " + pages + " pages, " + readtext);
    }
}

let submitButton = document.querySelector("#addBook");
let bookForm = document.querySelector('#bookFormBackground');
bookForm.style.display = "none";

const It = new Book('It', 'Stephen King', 1138, true);
const Fake = new Book('Fake Book', 'Fake Author', 15000, false);
let myLibrary = [];
let shelf = document.querySelector("#container");

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(It);
addBookToLibrary(Fake);

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const setDeleteButton = (book, frame) => {
    book.deleteButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        frame.remove();
    });
}

const setMarkButton = (book, readText) => {
    book.markButton.addEventListener('click', () => {
        if (readText.textContent == "Has been read") {
            readText.textContent = "Has not been read"
        } else if (readText.textContent == "Has not been read") {
            readText.textContent = "Has been read";
        }
    });
}

const refreshList = () => {
    removeAllChildNodes(shelf);
    myLibrary.forEach(book => {

        let newBookFrame = document.createElement('div');
        shelf.appendChild(newBookFrame);
        newBookFrame.setAttribute('class', 'bookFrame');

        let newBook = document.createElement('ul');
        newBookFrame.appendChild(newBook);

        let bookTitle = document.createElement('li');
        newBook.appendChild(bookTitle);
        bookTitle.textContent = ("Title: " + book.title);

        let bookAuthor = document.createElement('li');
        newBook.appendChild(bookAuthor);
        bookAuthor.textContent = ("Author: " + book.author);

        let bookPageCount = document.createElement('li');
        newBook.appendChild(bookPageCount);
        bookPageCount.textContent = ("Page Count: " + book.pageCount);

        let bookRead = document.createElement('li');
        newBook.appendChild(bookRead);
        if(book.read == true){
            bookRead.textContent = ("Has been read");
        } else {
            bookRead.textContent = ("Has not been read");
        }

        book.deleteButton.textContent = "Remove Book";
        book.deleteButton.setAttribute('class', 'delete');
        newBookFrame.appendChild(book.deleteButton);
        setDeleteButton(book, newBookFrame);

        book.markButton.textContent = "Mark as Read/Unread";
        book.markButton.setAttribute('class', 'mark');
        newBookFrame.appendChild(book.markButton);
        setMarkButton(book, bookRead);
    });
}

refreshList();

const closeForm = () => {
    bookForm.style.display = "none";
}

const openForm = () => {
    bookForm.style.display = "block";
}

submitButton.addEventListener('click', () => {
    let formData = Array.from(document.querySelector("#newBook"));
    let title = formData[0].value;
    let author = formData[1].value;
    let pageCount = formData[2].value;
    let read = true;
    if(formData[3].checked == false){
        read = false;
    }
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pageCount').value = '';
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = false;
    let newBook = new Book(title, author, pageCount, read);
    addBookToLibrary(newBook);
    refreshList();
    closeForm();
});


