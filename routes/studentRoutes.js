const express = require('express');
const studentController = require('./../controllers/studentController');

const router = express.Router();

// router.param('id', studentController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(studentController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(studentController.getTourStats);
// router.route('/monthly-plan/:year').get(studentController.getMonthlyPlan);

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
