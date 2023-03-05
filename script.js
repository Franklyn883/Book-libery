//cache the dom
let hideSection = document.getElementsByClassName('hide-section')[0];
let hiddenContent = document.getElementsByClassName('hidden-content')[0];
console.log(hideSection)
console.log(hiddenContent)

const hideContent = function(){
  if(hideSection.classList.contains('hide-section')){
    hideSection.classList.remove('hide-section');
    hideSection.style.display ='none';
    hiddenContent.classList.remove('hidden-content');
  }
  else{
    hideSection.classList.add('hide-section');
    hideSection.style.display ='block';
    hiddenContent.classList.add('hidden-content')
  }
  
}
document.getElementById("hide-btn").addEventListener('click', hideContent)
let myLibrary = [];


function Book(){
 
}

 
const addBookToLibrary = function(){
  let inputValues = [];
  const inputElements = document.querySelectorAll('input');
  
  inputElements.forEach(function(element){
    inputValues.push(element.value)
  })
  console.log(inputValues);
  hideContent();

  return inputValues;
}

document.querySelector('.btn').addEventListener('click', addBookToLibrary,);


/*
function Book(title,author,pages, isRead){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.isRead = isRead,

  this.info = function (){
    return `${title} by ${author} ${pages} pages ${isRead ? 'read already' : 'not ready yet'}` 
  } 
};
const theHobbit = new Book("Hobbit", "Rihana-joans", 55, false);
console.log(theHobbit);
console.log(theHobbit.info())*/