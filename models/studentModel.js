const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '']
  },
  email: {
    type: String,
    required: [true, '']
  },
  ACID: {
    type: String,
    required: [true, '']
  },
  department: {
    type: String,
    required: [true, '']
  },
  CGPA: {
    type: int,
    required: [true, '']
  },
  academicAdvisor: {
    type: String,
    required: [true, '']
  },
  dataEnrolled: {
    type: String,
    required: [true, '']
  },
  numberOfSemster: {
    type: int,
    required: [true, '']
  },
  dateGraduated: {
    type: Date,
    required: [true, '']
  },
  courses: {
    type: Array,
    required: [true, '']
  },
  regestrationSlips: {
    type: Array
  }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;

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
