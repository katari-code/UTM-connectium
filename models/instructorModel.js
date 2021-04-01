const mongoose = require('mongoose');
const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '']
  },
  email: {
    type: String,
    required: [true, '']
  },
  Password: {
    type: String,
    required: [true, '']
  },
  profilePhoto: {
    type: String,
    required: [true, '']
  },
  ACID: {
    type: String,
    required: [true, '']
  },
  department: {
    type: String,
    required: [true, '']
  },
  mentees: {
    type: Array,
    required: [true, '']
  },
  officeInfo: {
    type: Array
  }
});

const Instructor = mongoose.model('Instructor', InstructorSchema);

module.exports = Instructor;
