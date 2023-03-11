'strict mode'
//global variables
let myLibrary =[];
let newBook;


//cache the dom
const addBookBtn = document.getElementById('add-book-btn');
const modalContainer = document.getElementById('modal-container');
const isReadToggle = document.getElementById('is-read-toggle');
const bookForm = document.getElementById('book-form');
modalContainer.style.display = 'none';




//The constructor that will get the user info and store them in myLibrary array.

 
const Book = function(author, tittle, pages){
  this.author = author,
  this.tittle= tittle,
  this.pages = pages;
  
 };
  addBookBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block';
    addBookBtn.style.visibility ='hidden';
   
   
  });

const displayBook = function (){
 const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML ='';
  
 
  ;
  // to loop through the array and create Html element for each book object.
  myLibrary.forEach((book) =>{

   const  bookItem =document.createElement('div');
    const bookContainerHeader = document.createElement('h3');
    bookContainerHeader.classList.add('book-container-header');
    bookContainerHeader.textContent ="Book";
    bookItem.appendChild(bookContainerHeader);


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

    bookContainer.append(bookItem)
    });
}

 
const addBookToLibrary = function(){
  bookForm.addEventListener('submit', (event) => event.preventDefault())
  const authorValue = document.getElementById('author').value;
const tittleValue = document.getElementById('tittle').value;
const pagesValue = document.getElementById('pages').value;


  let newBook = new Book(authorValue,tittleValue,pagesValue);
   myLibrary.push(newBook);
   console.log(myLibrary[0]);
   
   
   displayBook();
   
  addBookBtn.style.visibility = 'visible';
  document.getElementById('author').value = '';
  document.getElementById('tittle').value = '';
  document.getElementById('pages').value = '';
  modalContainer.style.display ='none'
   return myLibrary;

}

document.querySelector('#submit-btn').addEventListener('click', addBookToLibrary,);

