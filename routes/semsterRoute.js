const express = require('express');
const semsterController = require('./../controllers/semsterController');

const router = express.Router();

// router.param('id', tourController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(tourController.getTourStats);
// router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(semsterController.getAllSemsters)
  .post(semsterController.createSemster);

router
  .route('/:id')
  .get(semsterController.getSemster)
  .patch(semsterController.updateSemster)
  .delete(semsterController.deleteSemster);

module.exports = router;
