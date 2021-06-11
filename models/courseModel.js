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
  preRequisite:{
    type : Array,
    type: mongoose.Schema.ObjectId,
    ref:"courses",
    required: [false, '']
  },
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
  isPublicCourse: {
    type: Boolean,
    required: [true, '']
  },
  belongTo: [{
    type:String,
    enum:['All', 'SECJ', 'SECV', 'SECPH', 'SECR']
  }],
});

const Course = mongoose.model('Courses', courseSchema);

module.exports = Course;
