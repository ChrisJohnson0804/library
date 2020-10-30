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

console.log(It.info());