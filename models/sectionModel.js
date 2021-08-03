const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: [true, ''],
    default: ''
  },
  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: 'courses',
    required: [true, ''],
    default: ''
  },
  departmentCode: {
    type: String,
    required: [true, ''],
    default: ''
  },
  semsterId: {
    type: mongoose.Schema.ObjectId,
    ref: 'semesters',
    default: ''
  },
  students: [
    {
      type: String,
      default: '[]'
    }
  ],
  capacity: {
    type: Number,
    required: [true, '']
  },
  date: [
    {
      type: Object,
      required: [true, '']
    }
  ]
});

const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;
