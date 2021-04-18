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

const Role = mongoose.model('Roles', roleSchema);

module.exports = Role;

