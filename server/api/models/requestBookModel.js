// const mongoose = require('mongoose');

// const requestBookSchema = new mongoose.Schema({
//   selectedBooks: [{
//     type: mongoose.Schema.Types.ObjectId, // Assuming book IDs are stored as ObjectId in MongoDB
//     ref: 'Book', // Reference to the Book model if needed
//     required: true,
//   }],
//   studentRoll: {
//     type: String, // Assuming roll number is a string
//     required: true,
//   },
//   studentName: {
//     type: String,
//     required: true,
//   },
//   requestedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const RequestBook = mongoose.model('RequestBook', requestBookSchema);

// module.exports = RequestBook;




const mongoose = require('mongoose');

const requestBookSchema = new mongoose.Schema({
  selectedBooks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  }],
  studentRoll: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'taken', 'returned', 'accept', 'reject', 'given', 'received'],
    default: 'pending',
  },
  actionTime: {
    type: Date,
    default: null,
  },
});

const RequestBook = mongoose.model('RequestBook', requestBookSchema);

module.exports = RequestBook;
