const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: [true, ''],
    default: ''
  },
  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Courses',
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
    ref: 'Semesters',
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

sectionSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'instructorId'
  })
    .populate({ path: 'semsterId' })
    .populate({ path: 'courseId' });

  next();
});

const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;
