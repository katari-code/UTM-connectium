const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorIds: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semesters',
    // required: [true, '']
  },
  courseIds: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semesters',
    // required: [true, '']
  },
  semsterIds: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semesters',
    // required: [true, '']
  },
  studentIds: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Studnets'
    }
  ],
  sectionNumber: {
    type:Number,
    required: [true,""],
    default:3
  },
  status: {
    type: String,
    enum: ['Open for registration', 'Full', 'Colsed'],
    default: 'Open for registration'
  },
  capacity: {
    type: String,
    required: [true, '']
  },
  numberOfstudent: {
    type: Number,
    default: 28
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
