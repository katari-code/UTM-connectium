const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
  offiredOn: {
    type: String,
    required: [true, '']
  },
  courseTitle: {
    type: String,
    required: [true, '']
  },
  preRequisite: {
    type: String,
    required: [true, '']
  },
  isPublicCourse: {
    type: Boolean,
    required: [true, '']
  },
  creditNumber: {
    type: Number,
    required: [true, '']
  }
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;
