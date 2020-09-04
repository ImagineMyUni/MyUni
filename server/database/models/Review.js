import mongoose from 'mongoose';

const ReviewPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    password: String,
    date: Date,
});

const Review = mongoose.model("Review", ReviewPostSchema);
export default Review;