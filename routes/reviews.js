import express from 'express';
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/get-reviews', getAllReviews);
router.get('/get-reviews/:id', getReviewById);
router.post('/create-review', createReview);
router.put('/update-review/:id', updateReview);;
router.delete('/delete-review/:id', deleteReview);

export default router;
