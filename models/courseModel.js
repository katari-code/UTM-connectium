const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
  offiredOn: {
    type: String,
    default: "sep"
  },
  courseTitle: {
    type: String,
    required: [true, '']
  },
  code: {
    type: String,
    required: [true, '']
  },
  preRequisite: {
    type: Boolean,
    default: false,
  },
  isPublicCourse: {
    type: Boolean,
    default: false,
  },
  creditNumber: {
    type: Number,
    required: [true, '']
  }
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;
