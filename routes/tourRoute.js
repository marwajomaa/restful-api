const express = require('express');

const {
  getAllTours,
  createTour,
  getTour,
  deleteTour,
  updateTour,
  aliasTopTours,
  getTourStats,
} = require('./../controllers/tourController');

const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/:id').get(getTour).delete(deleteTour).patch(updateTour);

module.exports = router;
