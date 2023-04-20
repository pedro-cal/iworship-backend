import express from 'express';
import { mongoClient } from './db/mongodb-connection';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/songs', async (req, res) => {
   await mongoClient.connect();
   const db = mongoClient.db("iworshipDB");
   const songsCursor = db.collection('songs').find({});

   const songs = await songsCursor.map((doc) => (doc)).toArray();
   res.json({ songs })
});

app.listen(3030, () => {
   console.log('Server is up and running!')
});