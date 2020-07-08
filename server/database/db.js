import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

/* FIX : 로그를 Text로 따로 저장해야할 것 같은데 */

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    }); 

const db = mongoose.connection;

const handleOpen = () => console.log("Database Connection Success");
const handleError = err => console.log("Database Connect Error : ", err);

db.once("open", handleOpen);
db.on("error", handleError);