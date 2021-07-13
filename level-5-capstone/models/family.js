const mongoose = require("mongoose")
const Schema = mongoose.Schema

const familySchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	atHome: Boolean,
	estReturnTime: Number,
	location: String,
})

module.exports = mongoose.model("Family", familySchema)
