const mongoose = require('mongoose');

const bloodInventorySchema = new mongoose.Schema({
    bloodType: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
});

module.exports = mongoose.model('BloodInventory', bloodInventorySchema);
