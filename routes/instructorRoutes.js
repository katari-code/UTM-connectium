const express = require('express');
const instructorController = require('./../controllers/instructorController');

const router = express.Router();

router
  .route('/')
  .get(instructorController.getAllInstructors)
  .post(instructorController.createInstructor);

router
  .route('/:id')
  .get(instructorController.getInstructor)
  .patch(instructorController.updateInstructor)
  .delete(instructorController.deleteInstructor);

module.exports = router;
