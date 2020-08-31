import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }); 

const db = mongoose.connection;

const handleOpen = () => console.log("Database Connection Success");
const handleError = err => console.log("Database Connect Error : ", err);

db.once("open", handleOpen);
db.on("error", handleError);
