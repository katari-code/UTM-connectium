const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '']
  },
  code: {
    type:String,
    enum:['SECJ', 'SECV', 'SECPH', 'SECR']
  },
  numberSemster: {
    type: Number,
    required: [true, '']
  },
  creditsRequired: {
    type: Number,
    required: [true, '']
  },
});

const Department = mongoose.model('Departments', DepartmentSchema);

module.exports = Department;
