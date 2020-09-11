import app from './app';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';

import './database/db'
import './database/models/User'
import './database/models/Video';
import './database/models/University'; 
import './database/models/Board'; 

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log(`Listening on : ${PORT}`);
};

app.listen(PORT, handleListening);

