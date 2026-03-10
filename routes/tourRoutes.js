const express = require('express');
const {
  getAllTours,
  createTour,
  updateTour,
  getTourById,
  deleteTour,
  checkID,
  checkPost,
} = require('./../controllers/tourController');

const router = express.Router();

router.param('id', checkID);

router.route('/').get(getAllTours).post(checkPost, createTour);

router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
