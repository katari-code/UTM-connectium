const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorId: {
    // type: mongoose.Schema.ObjectId,
    // ref: 'users',
    type: String,
    required: [true, ''],

    // required: [true, '']
    default: ''
  },
  courseId: {
    // type: mongoose.Schema.ObjectId,
    // ref: 'courses',
    type: String,
    required: [true, ''],

    default: ''
    // required: [true, '']
  },
  departmentCode: {
    type: String,
    required: [true, ''],

    default: ''
    // required: [true, '']
  },
  semsterId: {
    // type: mongoose.Schema.ObjectId,
    // required: [true, ''],
    // ref: 'semesters',
    // required: [true, '']
    type: String,
    type: String,
    default: ''
  },
  students: [
    {
      // type: mongoose.Schema.ObjectId,
      // ref: 'users',
      type: String,
      default: '[]'
    }
  ],

  // status: {
  //   type: String,
  //   enum: ['Open for registration', 'Full', 'Closed'],
  //   default: 'Open for registration'
  // },
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
