import express  from "express";

const app = express();

const port = 5000;

import './dbConnect.js';
import Register from "./models/Register.js";

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hi Walter from express server");
})

app.post("/formcourse", async (req, res) => {
    try {
        const registerdata = new Register(req.body);
        await registerdata.save();
        res.status(200).send("Data saved into Mongo Succesfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("DB Validation Failed");
    }
});

app.get('/registers', (req, res)=>{
    res.send("this route takes the bookings from the db and respond back to the UI");
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})


