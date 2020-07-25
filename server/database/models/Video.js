import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
    title: String,
    view: Number,
    url: String
});

const Video = mongoose.model("Video", VideoSchema);

export default Video;