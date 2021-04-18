const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  user:{
     type:mongoose.Schema.ObjectId,
     ref:"Users"
  },
  matricNumer: {
    type: String,
    required: [true, '']
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: 'Departments',
   required: [true, '']
  },
  CGPA: {
    type: Number,
    required: [true, '']
  },
  academicAdvisor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Instructors',
    required: [true, '']
  },
  dataEnrolled: {
    type: Date,
    // required: [true, '']
    default: Date.now(),
  },
  numberOfSemster: {
    type: Number,
    required: [true, ''],
    default: 3
  },
  dateGraduated: {
    type: Date,
    default: Date.now(),
  },
  courses: [{
    type:mongoose.Schema.ObjectId,
    ref:"Courses",
    required: [true, '']
  }],
  regestrationSlips: {
    type: Array,
    default:[]
  }
});

const Student = mongoose.model('Students', studentSchema);

module.exports = Student;
