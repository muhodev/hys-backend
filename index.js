import express from 'express'

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).json({ msg: "Hello world!" })
})

const port = 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})