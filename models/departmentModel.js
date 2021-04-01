const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '']
  },
  NumberSemster: {
    type: String,
    required: [true, '']
  },
  CreditsRequired: {
    type: String,
    required: [true, '']
  },
  Curriculum: {
    type: Array,
    required: [true, '']
  }
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;
