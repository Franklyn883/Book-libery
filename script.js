"strict mode";
//global variables
let myLibrary = [];


//cache the dom
const addBookBtn = document.getElementById("add-book-btn");
const modalContainer = document.getElementById("modal-container");
let readStatus = document.getElementById("read-status");
const bookForm = document.getElementById("book-form");
modalContainer.style.display = "none";
const errorMssg = document.getElementById("erorr-mssg");


//The constructor that will get the user info and store them in myLibrary array.

const Book = function (author, tittle, pages, isRead) {
  (this.author = author),
    (this.tittle = tittle),
    (this.pages = pages),
    (this.isRead = isRead);
};

Book.prototype.displayConsole = () => {
  console.log("this is a bookprototype");
};
addBookBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  addBookBtn.style.visibility = "hidden";
  
});

const ResetUserInput = function () {
  document.getElementById("author").value = "";
  document.getElementById("tittle").value = "";
  document.getElementById("pages").value = "";
  errorMssg.textContent = "";
  errorMssg.style.display = "none";
  readStatus.checked = false;
};

const displayBook = function () {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";
  // to loop through the array and create Html element for each book object.
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");
    const bookContainerHeader = document.createElement("h3");
    bookContainerHeader.classList.add("book-container-header");
    bookContainerHeader.textContent = "Book";

    bookItem.appendChild(bookContainerHeader);

    bookItem.classList.add("book-item");
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    bookItem.appendChild(author);

    const tittle = document.createElement("p");
    tittle.textContent = `Tittle: ${book.tittle}`;
    bookItem.appendChild(tittle);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    bookItem.appendChild(pages);
    console.log(book);

    const readCheck = document.createElement("p");

   
    readCheck.textContent = book.isRead ? "Read" : "Not Read";
    console.log(readCheck.textContent);

    bookItem.appendChild(readCheck);

    bookContainer.append(bookItem);
    
  });
};

const addBookToLibrary = function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Perform form validation and submission logic here
  });
  bookForm.addEventListener("submit", (event) => event.preventDefault());
  const authorValue = document.getElementById("author").value;
  const tittleValue = document.getElementById("tittle").value;
  const pagesValue = document.getElementById("pages").value;
  

  let newBook = new Book(
    authorValue,
    tittleValue,
    pagesValue,
    readStatus.checked        
  );

  function validateInput() {
    if (
      authorValue.trim() !== "" &&
      tittleValue.trim() !== "" &&
      pagesValue.trim() !== ""
    ) {
      myLibrary.push(newBook);

      displayBook();
      ResetUserInput();
      addBookBtn.style.visibility = "visible";
     
      modalContainer.style.display = "none";
    } else {
      errorMssg.textContent = "please complete form";
      errorMssg.style.display = "block";
    }
  }
  newBook.displayConsole();
  validateInput();
};

document
  .querySelector("#submit-btn")
  .addEventListener("click", addBookToLibrary);
