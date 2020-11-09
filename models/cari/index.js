const mongoose = require("mongoose")

const CariSchema = new mongoose.Schema({
    isim: {
        type: "String"
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
    },
    cariTürü: {
        type: "String",
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