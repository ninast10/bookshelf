/* eslint-disable linebreak-style */
const {
  addBooks, getAllBooksbyId, editBooks, deleteBooks, getAllBooks,
} = require('./handler');

const route = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getAllBooksbyId,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooks,
  },
];

module.exports = route;
