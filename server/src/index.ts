

import { config } from 'dotenv'
import cors from 'cors';
config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.set('strictQuery', false);
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
}); 


mongoose.connect(`${process.env.MONGO_URL}, { useNewUrlParser: true }`).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});  

  