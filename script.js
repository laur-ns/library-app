let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  if (this.read) { this.read = false; }
  else { this.read = true }
}

function displayBooks() {
  removeCards();
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
  setPageEventListeners();
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
  this.markCompleteBtn.textContent = 'Mark as complete';
  this.markCompleteBtn.setAttribute('class', 'mark-complete');
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

function removeCards() {
  let cards = document.querySelectorAll('.card.incomplete, .card.complete');
  cards.forEach(e => { // remove all cards except add card
    e.remove();
  });
}

function addBookToLibrary() {
  let title = document.querySelector('#bookTitle').value;
  let author = document.querySelector('#bookAuthor').value;
  let pages = document.querySelector('#numPages').value;
  let read = document.querySelector('#isRead').checked;
  myLibrary.push(new Book(title, author, pages, read));
  displayBooks();
  setPageEventListeners();
  hideForm();
}

function setFormEventListeners() {
  // fires when user clicks the add card
  let cardPlus = document.querySelector('.body .add');
  cardPlus.addEventListener('click', showAddBooksForm);
  // fires when user clicks X or outside of form
  let closeForm = document.querySelectorAll('.close, #blur');
  closeForm.forEach(e => {
    e.addEventListener('click', hideForm);
  });
  // fires when user clicks submit to add a new book
  let newBook = document.querySelector('#new-book button');
  newBook.addEventListener('click', addBookToLibrary);
}

function setPageEventListeners() {
  // toggle read status when user clicks complete
  let completeBtn = document.querySelectorAll('.mark-complete');
  completeBtn.forEach(e => {
    e.addEventListener('click', changeReadStatus);
  })
  // remove book and card when user clicks trash button
  let trashBtn = document.querySelectorAll('.trash');
  trashBtn.forEach(e => {
    e.addEventListener('click', deleteCard);
  })
  // display info popup
  let infoBtn = document.querySelector('#info-button');
  infoBtn.addEventListener('click', showInfoPopup);
}

function deleteCard() {
  let cardId = this.parentNode.parentNode.id;// get index from ID of parent node
  myLibrary.splice(cardId, 1);
  displayBooks();
}

function changeReadStatus() {
  let cardId = this.parentNode.parentNode.id;
  myLibrary[cardId].toggleRead();
  displayBooks();
}

function showAddBooksForm() {
  document.getElementById('add-book').style.display = 'flex';
  document.getElementById('blur').style.display = 'block';
}

function showInfoPopup() {
  document.getElementById('info').style.display = 'flex';
  document.getElementById('blur').style.display = 'block';
}

function showEditForm() {
  document.getElementById('blur').style.display = 'block';
}

function hideForm() {
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('info').style.display = 'none';
  document.getElementById('blur').style.display = 'none';
}
// -- initialize -- //
myLibrary[0] = new Book('The Lord of The Rings', 'J.R.R. Tolkien', '1216', false);
myLibrary[1] = new Book('Travel Team', 'Mike Lupica', '304', true);
displayBooks();
setFormEventListeners();
setPageEventListeners();