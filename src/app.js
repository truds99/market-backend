import express, { json } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

app.listen(5000, () => console.log('Server is running on port 5000'));