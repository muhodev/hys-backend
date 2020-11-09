const express = require("express")
const router = express.Router()
const { getCariler, updateCari, createCari, deleteCari, getCari } = require("../../controllers/cariler")

router
    .route("/")
    .get(getCariler)
    .post(createCari)

router
    .route("/:id")
    .get(getCari)
    .patch(updateCari)
    .delete(deleteCari)

module.exports = router;