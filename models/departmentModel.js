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
  curriculum: {
    type: Array,
    required: [true, '']
  }
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;
