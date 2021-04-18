const mongoose = require('mongoose');
const InstructorSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: [true, '']
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: 'Departments',
    required: [true, '']
  },
  mentees: [{
    type: mongoose.Schema.ObjectId,
    ref:"Student",
    required: [true, '']
  }],
  officeInfo:[{
    type: Object,
    default:{},
  }],
});

const Instructor = mongoose.model('instructor', InstructorSchema);

module.exports = Instructor;
