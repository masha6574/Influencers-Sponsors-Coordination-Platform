require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const InfluencerModel = require('./models/Influencer');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("MongoDB Atlas Connection Error:", err));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    InfluencerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Password is incorrect!")
                }
            } else {
                res.json("No record exists!")
            }
        })
})

app.post('/register', (req, res) => {
    InfluencerModel.create(req.body)
        .then(influencers => res.json(influencers))
        .catch(err => res.json(err))
})

app.listen(5500, () => {
    console.log("Server is running!!!");
})
