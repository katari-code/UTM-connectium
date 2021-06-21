const express = require('express');
const studentController = require('./../controllers/studentController');

const router = express.Router();

router
  .route('/')
  .get(studentController.getAllStudnets)
  .post(studentController.createStudnet);

router
  .route('/:id')
  .get(studentController.getStudnet)
  .patch(studentController.updateStudnet)
  .delete(studentController.deleteStudnet);

module.exports = router;
