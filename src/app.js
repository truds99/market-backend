import express, { json } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const items = [];

app.post('/items', (req, res) => {
    const { name, quantity, type } = req.body;
    const item = {
        name, 
        quantity, 
        type,
        id: items.length + 1
    }
    items.push(item);
    res.send(item); 
});

app.listen(5000, () => console.log('Server is running on port 5000'));