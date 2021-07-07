const express = require("express")
const app = express()
const mongoose = require("mongoose")

const morgan = require("morgan")

const family = []

mongoose.connect(
	"mongodb+srv://marcus:TRojans3180@@@clock-db.vmkf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		UseFindAndModify: false,
	},
	() => console.log("Connected to the db")
)

app.use("/", express.json())
app.use(morgan("dev")) //logs requests to console

app.use("/familymembers", require("./routes/familyRouter.js"))

app.listen(9000, () => {
	console.log("hello hello, we're in a place called Vertigo.")
})
