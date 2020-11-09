const mongoose = require("mongoose")

const validator = require("validator")

const CariSchema = new mongoose.Schema({
    isim: {
        type: "String",
        validate: [validator.isAlpha, " "]
    },
    soyisim: {
        type: "String"
    },
    tckn: {
        type: "Number"
    },
    vkn: {
        type: "Number"
    },
    unvan: {
        type: "String"
    },
    adresler: [
        {
            tür: {
                type: "String"
            },
            adresDetay: {
                type: "String"
            },
            il: {
                type: "String"
            },
            ilçe: {
                type: "String"
            },
            isMain: {
                type: "Boolean"
            }
        }
    ],
    tür: {
        type: "String",
        required: true,
        enum: {
            values: ["şahıs", "şirket"]
        }
    },
    cariTürü: {
        type: "String",
        enum: {
            values: ["borçlu", "müvekkil", "vekil", "personel", "üçüncü şahıs", "çözüm ortağı", "kefil"]
        }
    },
    iletisim: [
        {
            tür: {
                type: "String",
            },
            detay: {
                type: "String"
            },
            isMain: {
                type: "String"
            }
        }
    ],
    isDeleted: {
        type: "Boolean",
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Cari", CariSchema)