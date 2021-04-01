const mongoose = require('mongoose');
const semsterSchema = new mongoose.Schema({
  RegistrationStart: {
    type: Date,
    required: [true, '']
  },
  RegistrationEnd: {
    type: Date,
    required: [true, '']
  },
  ClassStart: {
    type: Date,
    required: [true, '']
  },
  ClassEnd: {
    type: Date,
    required: [true, '']
  },
  ModaifactionPeriodStart: {
    type: Date,
    required: [true, '']
  },
  ModaifactionPeriodEnd: {
    type: Date,
    required: [true, '']
  },
  Seeison: {
    type: String,
    required: [true, '']
  }
});

const Semster = mongoose.model('Semester', semsterSchema);

module.exports = Semster;

// const testSemster = new Semster({
//   RegistrationStart: 2021 / 03 / 7,
//   RegistrationEnd: 2021 / 03 / 10,
//   ClassStart: 2021 / 03 / 14,
//   ClassEnd: 2021 / 06 / 10,
//   ModaifactionPeriodStart: 2021 / 03 / 14,
//   ModaifactionPeriodEnd: 2021 / 03 / 18,
//   Seeison: 'Summer'
// });

// testSemster
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log(err);
//   });
