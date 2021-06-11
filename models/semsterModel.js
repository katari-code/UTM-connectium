const mongoose = require('mongoose');
const semsterSchema = new mongoose.Schema({
  Semster: {
    type: String,
    enum: ['September','February'],
  },
  order: {
    type: Number,
    required: [true, '']
  },
  curriculum:[{
    type: mongoose.Schema.ObjectId,
    ref:"courses",
    required: [true, '']
  }],

});

const Semster = mongoose.model('Semesters', semsterSchema);

module.exports = Semster;
