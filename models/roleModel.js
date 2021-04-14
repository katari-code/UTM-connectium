const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
  Role: {
    type: int,
    required: [true, '']
  },
  uid: {
    type: String,
    required: [true, '']
  },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;

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
