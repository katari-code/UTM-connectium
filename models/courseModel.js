const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
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
    default: false
  },
  preRequisiteCodes: [{
    type: mongoose.Schema.ObjectId,
    ref:"courses",
    default:[],
  }],

  isPublicCourse: {
    type: Boolean,
    default: false
  },
  creditNumber: {
    type: Number,
    required: [true, '']
  },
  order: {
    type: Number,
    required: [true, '']
  },
  belongTo: [{
    type:String,
    enum:['All', 'SECJ', 'SECV', 'SECPH', 'SECR']
  }],
  avaliabieFor: {
    type:String,
    enum:['All', 'International', 'Malaysian'],
    default:"All"
  },
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;
