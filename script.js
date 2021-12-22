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

function test() {
  for (let key of myLibrary) {
    let append = document.querySelector('div');
    append.textContent += key.title;
    append.textContent += key.author;
    append.textContent += key.pages;
    append.textContent += key.read;
  }
}