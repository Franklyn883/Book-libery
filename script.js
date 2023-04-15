"strict mode";
//global variables
let myLibrary = [];

//cache the dom
const addBookBtn = document.getElementById("add-book-btn");
const modalContainer = document.getElementById("modal-container");
let readStatus = document.getElementById("read-status");
const bookForm = document.getElementById("book-form");
modalContainer.style.display = "none";
const overlay = document.getElementsByClassName('overlay')[0];
const body = document.querySelector('body');

//The constructor that will get the user info and store them in myLibrary array.

const Book = function (author, tittle, pages, isRead) {
  (this.author = author),
    (this.tittle = tittle),
    (this.pages = pages),
    (this.isRead = isRead);
};

//To hide and reveal
addBookBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  addBookBtn.style.visibility = "hidden";
  overlay.style.display ="block"
});


//To reset inputs
const ResetUserInput = function () {
  document.getElementById("author").value = "";
  document.getElementById("tittle").value = "";
  document.getElementById("pages").value = "";
  readStatus.checked = false;
  overlay.style.display = 'none'
    modalContainer.style.display = "none";
    addBookBtn.style.visibility = "visible";
};
//EventListener to the window to remove modal container
window.onclick = (event) =>{
  if(event.target == overlay){
    
    ResetUserInput()
  }
}
//adding eventlistener to the esc button to remove modal-container
document.addEventListener('keydown', (event) =>{
  if(event.key == "Escape"){
    ResetUserInput();
  } 
})

//function to delete book
const deleteBook = function (index) {
  myLibrary.splice(index, 1);
  displayBook();
};

const displayBook = function () {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";
  // to loop through the array and create Html element for each book object.
  myLibrary.forEach((book, index) => {
    const bookItem = document.createElement("div");
    const bookContainerHeader = document.createElement("h3");
    bookContainerHeader.classList.add("book-container-header");
    bookContainerHeader.textContent = "Book";

    bookItem.appendChild(bookContainerHeader);
    bookItem.classList.add("book-item");

    const author = document.createElement("p");
    const authorHeader = document.createElement("span");
    authorHeader.classList.add("book-item-tittle");
    authorHeader.textContent = "Author: ";
    author.appendChild(authorHeader);

    const authorName = document.createElement("span");
    authorName.textContent = book.author;
    author.appendChild(authorName);

    bookItem.appendChild(author);

    const tittle = document.createElement("p");
    const tittleHeader = document.createElement("span");
    tittleHeader.classList.add("book-item-tittle");
    tittleHeader.textContent = "Tittle: ";
    tittle.appendChild(tittleHeader);

    const tittleName = document.createElement("span");
    tittleName.textContent = book.tittle;
    tittle.appendChild(tittleName);
    bookItem.appendChild(tittle);

    const pages = document.createElement("p");
    const pagesHeader = document.createElement("span");
    pagesHeader.classList.add("book-item-tittle");
    pagesHeader.textContent = "Pages: ";
    pages.appendChild(pagesHeader);

    const pagesNum = document.createElement("span");
    pagesNum.textContent = book.pages;
    pages.appendChild(pagesNum);

    bookItem.appendChild(pages);

    const readCheck = document.createElement("p");

    const readHeader = document.createElement("span");
    readHeader.classList.add("book-item-tittle");
    readHeader.textContent = "Read: ";
    readCheck.appendChild(readHeader);

    const readName = document.createElement("span");
    readName.textContent = ` ${book.isRead ? "Yes" : "No"}`;
    readCheck.appendChild(readName);
    console.log(readCheck.textContent);

    bookItem.appendChild(readCheck);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("remove-btn");
    deleteBtn.addEventListener("click", () => deleteBook(index));
    bookItem.appendChild(deleteBtn);

    bookContainer.append(bookItem);
  });
};

const addBookToLibrary = function () {
  const form = document.querySelector("form");``
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
      overlay.style.display ="none"
      displayBook();
      ResetUserInput();
      addBookBtn.style.visibility = "visible";
      body.classList.remove('overlay')
      modalContainer.style.display = "none";
    }
  }
  newBook.displayConsole();
  validateInput();
};

document
  .querySelector("#submit-btn")
  .addEventListener("click", addBookToLibrary);
