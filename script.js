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
  this.read = this.false;
  
 };
 
  addBookBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block';
    addBookBtn.style.visibility ='hidden';
   Book.prototype.displayConsole = () =>{
    console.log('this is a bookprototype')
   }
   
  });
const ResetUserInput = function(){
  document.getElementById('author').value = '';
  document.getElementById('tittle').value = '';
  document.getElementById('pages').value = '';
}

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
  
    function validateInput(){
    if (authorValue.trim() !==''){
      myLibrary.push(newBook);
    }
    else if (tittleValue.trim() !==""){
      myLibrary.push(newBook);
    }
    else if (pagesValue.trim() !== ""){
      myLibrary.push(newBook)
    }
    else{
      if(authorValue == ''){
        errorMssg
      }
      else if(tittleValue == ''){
        errorMssg
      }
      else if(pagesValue == "" ){
        errorMssg
      }
    }
    
  }
 
 newBook.displayConsole();
  
   
   validateInput();
   displayBook();
   
  addBookBtn.style.visibility = 'visible';
 ResetUserInput();  
  modalContainer.style.display ='none'
   return myLibrary, newBook;

}

document.querySelector('#submit-btn').addEventListener('click', addBookToLibrary,);

