const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Quote', quotesSchema)
