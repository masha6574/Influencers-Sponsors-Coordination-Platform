const mongoose = require("mongoose");

const InfluencerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const InfluencerModel = mongoose.model("influencers", InfluencerSchema)
module.exports = InfluencerModel;