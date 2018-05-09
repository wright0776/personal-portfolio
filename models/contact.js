const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: String,
    email: String,
    message: String
})

module.exports = mongoose.model('contacts', contactSchema);