const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorId: {
    type: int,
    required: [true, '']
  },
  courseId: {
    type: String,
    required: [true, '']
  },
  semsterId: {
    type: String,
    required: [true, '']
  },
  status: {
    type: String,
    required: [true, '']
  },
  capacity: {
    type: String,
    required: [true, '']
  },
  date: {
    type: String,
    required: [true, '']
  },

});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;