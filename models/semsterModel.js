const mongoose = require('mongoose');
const semsterSchema = new mongoose.Schema({
  labale: {
    type: String
  },
  RStart: {
    type: Date,
    required: [true, '']
  },
  REnd: {
    type: Date,
    required: [true, '']
  },
  MStart: {
    type: Date,
    required: [true, '']
  },
  MEnd: {
    type: Date,
    required: [true, '']
  },
  CStart: {
    type: Date,
    required: [true, '']
  },
  CEnd: {
    type: Date,
    required: [true, '']
  },
  DEnd: {
    type: Date,
    required: [true, '']
  },
  type: {
    type: String,
    enum: ['Planning', 'On going']
  },
  status: {
    type: String,
    enum: ['Summer', 'Running', 'Short Semester']
  }
});

const Semster = mongoose.model('Semesters', semsterSchema);

module.exports = Semster;
