const express = require('express');
const sectionController = require('./../controllers/sectionController');

const router = express.Router();

// router.param('id', tourController.checkID);

// router
//   .route('/top-5-cheap')
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(tourController.getTourStats);
// router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(sectionController.getAllSections)
  .post(sectionController.createSection);

router
  .route('/:id')
  .get(sectionController.getSection)
  .patch(sectionController.updateSection)
  .delete(sectionController.deleteSection);

module.exports = router;
