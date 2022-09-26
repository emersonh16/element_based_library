let myLibrary = []

class book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function displayBooks() {
    let display = document.getElementById("bookDisplay")
    let readDisplay = ""
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].readStatus == true) {
            readDisplay = " read."
        }
        else {
            readDisplay = " not read."
        }

        display.innerText += myLibrary[i].title + ", by " + myLibrary[i].author + ", " + myLibrary[i].pages + " pages," + readDisplay
        display.innerHTML += "<br>"
    }
}

function onSubmit(event) {
    event.preventDefault()
    var userInputBooktitle = document.getElementById("bookTitle").value.toString()
    var userInputAuthor = document.getElementById("author").value.toString()
    var userInputPages = document.getElementById("pages").value
    var userInputRead = document.querySelector('input[name="readQuery"]:checked').value;

    let y

    if (userInputRead == true){
        y = true
    }
    else if (userInputRead == false){
        y = false
    }
    

    x = new book(userInputBooktitle, userInputAuthor, userInputPages, y)
    document.getElementById("bookDisplay").innerHTML = ""
    addBookToLibrary(x)
    displayBooks()
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}






closeForm()

jurrassicPark = new book("Jurassic Park", "Michael Criton", 456, true)
harryPotter = new book("Harry Potter", "JKR", 300, false)
taoTeChing = new book("Tao Te Ching", "Lao Tsu", 100, true)

addBookToLibrary(jurrassicPark)
addBookToLibrary(harryPotter)
addBookToLibrary(taoTeChing)
displayBooks()