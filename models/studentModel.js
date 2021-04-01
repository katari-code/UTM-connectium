const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '']
  },
  email: {
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
  CGPA: {
    type: Number,
    required: [true, '']
  },
  academicAdvisor: {
    type: String,
    required: [true, '']
  },
  dataEnrolled: {
    type: String,
    required: [true, '']
  },
  numberOfSemster: {
    type: Number,
    required: [true, '']
  },
  dateGraduated: {
    type: Date,
    required: [true, '']
  },
  courses: {
    type: Array,
    required: [true, '']
  },
  regestrationSlips: {
    type: Array
  }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
