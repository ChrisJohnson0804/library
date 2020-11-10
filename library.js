function Book(title, author, pages, read, index){

    this.title = title
    this.author = author
    this.pageCount = pages
    this.read = read
    this.index = index
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

const It = new Book('It', 'Stephen King', 1138, true, false, 0);
let myLibrary = [];
let shelf = document.querySelector("#container");

function addBookToLibrary(book) {
    myLibrary.push(book);
    book.index = myLibrary.indexOf(book);

}
addBookToLibrary(It);

let deleteButtons = Array.from(document.querySelectorAll('.delete'));
console.log(deleteButtons);

const setDeleteButtons = () => {
    deleteButtons.forEach(button => {
        if(!button.classList.contains('listening')){
            button.classList.add('listening');
            button.addEventListener('click', () => {
                myLibrary.splice(parseInt(button.value), 1);
                button.parentElement.remove();
                refreshList();
            });
        }
    });
}

const refreshList = () => {
    myLibrary.forEach(book => {
        book.index = myLibrary.indexOf(book);
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
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove Book";
        deleteButton.setAttribute('class', 'delete');
        deleteButton.setAttribute('value', book.index);
        newBookFrame.appendChild(deleteButton);
        deleteButtons.push(deleteButton);
    })
}

refreshList();


let submitButton = document.querySelector("#addBook");

submitButton.addEventListener('click', () => {
    let formData = Array.from(document.querySelector("#newBook"));
    let title = formData[0].value;
    let author = formData[1].value;
    let pageCount = formData[2].value;
    let read = true;
    let index = myLibrary.length;
    if(formData[3].checked == false){
        read = false;
    }
    let newBook = new Book(title, author, pageCount, read, index);
    addBookToLibrary(newBook);
    refreshList();
    setDeleteButtons();
});


