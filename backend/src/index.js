import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

const app = express();

connectDB()
.then( () => {
    app.on('error', (err) => {
        console.error('Express unable to talk to mongoDB');
        throw err;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is listening to port ${port}`);
    });
    
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
});