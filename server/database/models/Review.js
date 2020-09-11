import mongoose from 'mongoose';

const ReviewPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    password: String,
    time: String,
});

const Review = mongoose.model("Review", ReviewPostSchema);
export default Review;
