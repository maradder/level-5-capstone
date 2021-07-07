const mongoose = require("mongoose")
const Schema = mongoose.Schema 


const locationSchema = new Schema({
    location: [],
    familyMember: {
    name: {
        type: String,
        unique: true},
    atHome: Boolean,
    estReturnTime: Number,
    location: String
}})




module.exports = mongoose.model("places", locationSchema)