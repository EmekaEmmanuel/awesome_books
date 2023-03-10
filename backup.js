import Book from "./modules/book.js" 
const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const empty = document.querySelector('.empty_bookstore');
const form = document.querySelector('.book_form');
const tableBody = document.querySelector('.table_body');
const storedBooks = JSON.parse(localStorage.getItem('bookstored'));

class AwesomeLibrary {
  constructor() {
    this.storedBooks = storedBooks;
  }

  addBookDetails() {
    const booksData = new Book(title.value, author.value);
    if (!this.storedBooks) {
      this.storedBooks = [];
    }
    this.storedBooks.push(booksData);
    localStorage.setItem('bookstored', JSON.stringify(this.storedBooks));
    this.displayBooks();
  }

  displayBooks() {
    if (!this.storedBooks || !this.storedBooks===0) {
      empty.innerHTML = 'No books in the library';
    } else {
      empty.style.display = 'none';
      let eachTableRow = '';
      for (let i = 0; i < this.storedBooks.length; i += 1) {
        eachTableRow
          += `<tr>
                <td>${this.storedBooks[i].title}</td>
                <td>${this.storedBooks[i].author}</td>
                <td><button type="button" id=${i} class="remove_btn">Remove</button></td>
            </tr>
            `;
      }
      tableBody.innerHTML = eachTableRow;
      const deleteBookBtn = document.querySelectorAll('.remove_btn');
      this.removeBooks(deleteBookBtn);
    }
  }

  removeBooks(deleteBookBtn) {
    deleteBookBtn.forEach((elementBtn) => {
      elementBtn.addEventListener('click', () => {
        const index = elementBtn.getAttribute('id');
        this.storedBooks.splice(index, 1);
        localStorage.setItem('bookstored', JSON.stringify(this.storedBooks));
        this.displayBooks();
      });
    });
  }
}

const newLibrary = new AwesomeLibrary();

window.addEventListener('load', () => {
  newLibrary.displayBooks();
});

function clearInputFields(title, author) {
  title.value = '';
  author.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newLibrary.addBookDetails();
  clearInputFields(title, author);
});