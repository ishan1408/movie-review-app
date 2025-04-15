import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieTitle: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10, required: true },
  reviewer: { type: String, required: true },
},
{timestamps:{createdAt: "createdAt", updatedAt: "updatedAt"}});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
