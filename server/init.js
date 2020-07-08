import app from './app';
import dotenv from 'dotenv';

import './database/db'
import './database/models/User'

dotenv.config();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on : http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);