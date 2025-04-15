import Review from "../models/Review.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return res.status(200).json(reviews);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    console.log("GET all reviews request handled");
  }
};

export const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    console.log("GET review by ID request handled");
  }
};

export const createReview = async (req, res) => {
  const { movieTitle, review, rating, reviewer } = req.body;

  const newReview = new Review({
    movieTitle,
    review,
    rating,
    reviewer,
  });

  try {
    const savedReview = await newReview.save();
    return res.status(201).json(savedReview);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  } finally {
    console.log("POST create review request handled");
  }
};

export const updateReview = async (req, res) => {
  try {
    const updated = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ message: "Review not found" });

    return res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  } finally {
    console.log("PUT update review request handled");
  }
};

export const deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "Review not found" });

    return res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } finally {
    console.log("DELETE review request handled");
  }
};
