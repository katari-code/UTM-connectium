const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '']
  },
  numberSemster: {
    type: String,
    required: [true, '']
  },
  creditsRequired: {
    type: String,
    required: [true, '']
  },
  curriculum:[{
    type: mongoose.Schema.ObjectId,
    ref:"courses",
    required: [true, '']
  }]
  
});

const Department = mongoose.model('Departments', DepartmentSchema);

module.exports = Department;
