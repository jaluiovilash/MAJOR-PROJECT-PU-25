const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bloodType: { type: String, required: true },
    lastDonationDate: { type: Date },
    location: { type: String },
});

module.exports = mongoose.model('Donor', donorSchema);
