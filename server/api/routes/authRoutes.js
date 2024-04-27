// // authRoutes.js

// const express = require('express');
// const router = express.Router();
// const authControllers = require('../controllers/authController');

// router.post('/user/login', authControllers.userLogin);
// router.post('/admin/login', authControllers.adminLogin);
// // Add other authentication routes as needed

// router.post('/books', authControllers.addBook);
// router.get('/books', authControllers.getBooks);
// router.put('/books/:id', authControllers.updateBook);
// router.delete('/books/:id', authControllers.deleteBook);

// module.exports = router;


const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');


router.post('/user/login', authControllers.userLogin);
router.post('/admin/login', authControllers.adminLogin);

router.post('/books', authControllers.addBook);
router.get('/books', authControllers.getBooks);
router.get('/all-books', authControllers.getAllBooks); 
router.put('/books/:id', authControllers.updateBook);
router.delete('/books/:id', authControllers.deleteBook);
router.post('/request_books', authControllers.requestBooks);
router.get('/requested_books/:roll', authControllers.getRequestedBooksByRoll);

router.delete('/deleteBook/:bookId', authControllers.deleteBook);
router.get('/book-requests', authControllers.getAllBookRequests);
router.put('/accept-request/:requestId', authControllers.acceptBookRequest);
router.put('/reject-request/:requestId', authControllers.rejectBookRequest);
router.put('/given-request/:requestId', authControllers.markBookGiven);
router.put('/received-request/:requestId', authControllers.markBookReceived);

module.exports = router;
