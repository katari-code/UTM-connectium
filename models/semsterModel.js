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
    enum: ['Summer', 'ٌRaining', 'Short Semester']
  },
  status: {
    type: String,
    enum: ['Planning', 'On going']
  }
});

const Semster = mongoose.model('Semesters', semsterSchema);

module.exports = Semster;
