const express = require("express")
const mongoose = require("mongoose")
const loginRoutes = require("./routes/login.routes.js")


const app = express()
const port = 3000
const dbUrl = "mongodb://localhost/testLogin" 
mongoose.connect(dbUrl, {useNewUrlParser : true})

app.use(express.static("public"))

app.set("views", "views")
app.set("view engine", "pug")


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/login", loginRoutes)

app.get("/", (req, res) => {
	res.send("hello")
})

app.listen(port, () => console.log(`server is listening on port ${port}`))