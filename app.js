const express = require("express")
const app = express();

const carilerRoutes = require("./routes/cariler")

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get("/api/v1/", (req, res) => {
    res.status(200).json({ msg: "Hello world!" })
})

app.use("/api/v1/cariler", carilerRoutes)

module.exports = app