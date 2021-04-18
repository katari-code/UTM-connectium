const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({
  instructorId: {
    type: Number,
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
  NumberOfstudent:{
    type:String,
  },
  date: [{  
    type: String,
    required: [true, '']
  }],

});

const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;