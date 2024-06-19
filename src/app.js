import express, { json } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const items = [];

app.post('/items', (req, res) => {
    const { name, quantity, type } = req.body;
    if ( !name || !quantity || !type || typeof name !== "string" || 
        typeof quantity !== "number" || quantity % 1 || typeof type !== "string" ) {
            res.sendStatus(422);
            return;
    }
    if (items.find(elm => elm.name === name)) {
        res.sendStatus(409);
        return;
    }
    const item = {
        name, 
        quantity, 
        type,
        id: items.length + 1
    }
    items.push(item);
    res.status(201).send(item); 
});

app.listen(5000, () => console.log('Server is running on port 5000'));