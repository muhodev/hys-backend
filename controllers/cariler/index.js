const Cari = require('../../models/cari');
const ApiFeatures = require("../ApiFeatutes")

exports.getCariler = async (req, res, next) => {
    try {
        const carilerQuery = new ApiFeatures(Cari.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .pagination()

        const carilerResult = await carilerQuery.query;
        res.status(200).json({ status: "success", data: { carilerResult } })

    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error
        })
    }
}

exports.createCari = async (req, res, next) => {
    try {
        const yeniCari = await Cari.create(req.body)
        res.status(201).json({ status: "success", data: { yeniCari } })
    } catch (error) {
        res.status(404).json({ status: "fail", message: error })
    }
}

exports.getCari = async (req, res, next) => {
    try {
        const cari = await Cari.findById(req.params.id)
        res.status(200).json({ status: "success", data: { cari } })
    } catch (error) {
        res.status(400).json({ status: "fail", message: error })
    }
}

exports.updateCari = async (req, res, next) => {
    try {

        const cari = await Cari.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({ status: "success", data: { cari } })

    } catch (error) {
        res.status(400).json({ status: "fail", message: error })
    }
    res.status(200).json({ status: "success", data: [{ name: "deneme cari" }] })
}

exports.deleteCari = async (req, res, next) => {
    const cari = await Cari.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true, runValidators: true })
    res.status(200).json({ status: "success", data: { msg: "Silinen id: " + cari._id } })
}