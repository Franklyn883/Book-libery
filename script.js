'strict mode'
//global variables
let myLibrary =[];

//cache the dom
const addBookBtn = document.getElementById('add-book-btn');
const modalContainer = document.getElementById('modal-container');
const isReadToggle = document.getElementById('is-read-toggle')
const bookForm = document.getElementById('book-form')
modalContainer.style.display = 'none';
addBookBtn.addEventListener('click', ()=>{
  modalContainer.style.display = 'block';
})

bookForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  modalContainer.style.display ='none';
})


//The constructor that will get the user info and store them in myLibrary array.
function Book(author, tittle, pages){
 this.author = author,
 this.tittle= tittle,
 this.pages =pages;
}


const displayBook = function (){
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML ='';
  // to loop through the array and create Html element for each book object.
  myLibrary.forEach((book) =>{
    const bookItem =document.createElement('div');
    bookItem.classList.add('book-item');
    const author = document.createElement('p');
    author.textContent=`Author: ${book.author}`;
    bookItem.appendChild(author);

    const tittle = document.createElement('p');
    tittle.textContent = `Tittle: ${book.tittle}`;
    bookItem.appendChild(tittle);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`
    bookItem.appendChild(pages);

    bookContainer.append(bookItem);
   
  })

}

 
const addBookToLibrary = function(){
  const authorValue = document.getElementById('author').value;
const tittleValue = document.getElementById('tittle').value;
const pagesValue = document.getElementById('pages').value;

   let newBook = new Book(authorValue,tittleValue,pagesValue);

   myLibrary.push(newBook);
   console.log(myLibrary[0]);
   displayBook();
 
   return myLibrary;

}

document.querySelector('#submit-btn').addEventListener('click', addBookToLibrary);

