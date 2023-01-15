const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const empty = document.querySelector('.empty_bookstore');
const form = document.querySelector('.book_form');
const tableBody = document.querySelector('.table_body'); 
const storedBooks = JSON.parse(localStorage.getItem('bookstored')); 

export {title, author, empty, form, tableBody, storedBooks}