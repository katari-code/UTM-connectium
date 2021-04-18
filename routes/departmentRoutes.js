const express = require('express');
const courseController = require('./../controllers/departmentController');

const router = express.Router();

// router.param('id', tourController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(tourController.getTourStats);
// router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(courseController.getAllDepartments)
  .post(courseController.createDepartment);

router
  .route('/:id')
  .get(courseController.getDepartment)
  .patch(courseController.updateDepartment)
  .delete(courseController.deleteDepartment);

module.exports = router;
