const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Instructors',
    // required: [true, '']
    default:""
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Courses',
    default:""
    // required: [true, '']
  },
  semster: {
    type: mongoose.Schema.ObjectId,
    ref: 'Semesters',
    // required: [true, '']
    default:""
  },
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Studnets',
      default:""
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
    required: [true,""],
    default: 'Open for registration'
  },
  capacity: {
    type: Number,
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
