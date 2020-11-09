function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pageCount = pages
    this.read = read
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

const It = new Book('It', 'Stephen King', 1138, true);

let myLibrary = [];
let shelf = document.querySelector("#container");

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(It);

const refreshList = () => {
    myLibrary.forEach(book => {
        let newBookFrame = document.createElement('div');
        shelf.appendChild(newBookFrame);
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
    })
}

refreshList();