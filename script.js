let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt('Enter the title of the book');
  let author = prompt('Enter the author');
  let pages = prompt('Enter number of pages');
  let read = false;
  myLibrary.push(new Book(title, author, pages, read));
}

// -- temp -- //
myLibrary[0] = new Book('Harry Potter', 'JK Rowling', '500', true);
myLibrary[1] = new Book('The Hobbit', 'J.R.R. Tolkien', '349', false);
// --      -- //

function displayBooks() {
  let newCard;
  for (let key in myLibrary) {
    newCard = new CreateElements(key);
    if (myLibrary[key].read) { // checks if book has been read
      newCard.card.setAttribute('class', 'card complete');
      newCard.markCompleteBtn.textContent = 'Completed';
    }
    newCard.title.textContent = myLibrary[key].title;
    newCard.author.textContent = myLibrary[key].author;
    newCard.pages.textContent = `Pages: ${myLibrary[key].pages}`;
    newCard.trashBtn.innerHTML = "<img src='./trash.svg'></img>"
    appendCard(newCard);
  }
}

function CreateElements(index) {
  this.card = document.createElement('div');
  this.card.setAttribute('id', `${index}`); // associates card with book of index
  this.card.setAttribute('class', 'card incomplete');
  this.textArea = document.createElement('div');
  this.textArea.setAttribute('class', 'text-area');
  this.title = document.createElement('h1');
  this.author = document.createElement('h3');
  this.pages = document.createElement('p');
  this.btnsArea = document.createElement('div');
  this.btnsArea.setAttribute('class', 'button-area');
  this.markCompleteBtn = document.createElement('button');
  this.markCompleteBtn.textContent = 'Mark as completed';
  this.trashBtn = document.createElement('button');
  this.trashBtn.setAttribute('class', 'trash');
}

function appendCard(newCard) {
  let body = document.querySelector('.body');
  body.prepend(newCard.card);
  newCard.card.append(newCard.textArea);
  newCard.textArea.append(newCard.title);
  newCard.textArea.append(newCard.author);
  newCard.textArea.append(newCard.pages);
  newCard.card.append(newCard.btnsArea);
  newCard.btnsArea.append(newCard.markCompleteBtn);
  newCard.btnsArea.append(newCard.trashBtn);
}
      // <div class='card incomplete'>
      //   <div class='text-area'>
      //     <h1>Placeholder Text</h1>
      //     <h3>Author Name</h3>
      //     <p>Pages: 34</p>
      //   </div>
      //   <div class='button-area'>
      //     <button>Mark as completed</button>
      //     <button class='trash'><img src='./trash.svg'></img></button>
      //   </div>
      // </div>

// -- initialize -- //
displayBooks();