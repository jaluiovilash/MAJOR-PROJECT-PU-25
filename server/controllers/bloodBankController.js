const BloodStock = require('../models/bloodStockModel');


// 1. Handle Blood Donations
exports.donateBlood = async (req, res) => {
    const { bloodType, units } = req.body; // assuming 1 unit = 1 litre

    try {
        let stock = await BloodStock.findOne({ bloodType });

        // If blood type is already in stock, update the stock
        if (stock) {
            stock.unitsAvailable += units;
        } else {
            // Else, create a new blood stock entry
            stock = new BloodStock({ bloodType, unitsAvailable: units });
        }

        await stock.save();
        res.status(200).json({ message: `${units} unit(s) of ${bloodType} blood added successfully.` });
    } catch (error) {
        res.status(500).json({ message: 'Error in donating blood.', error });
    }
};


// 2. Handle Hospital Blood Requests
exports.processHospitalRequest = async (req, res) => {
    const { bloodType, unitsRequested } = req.body;

    // Validate unitsRequested is a valid number
    if (!Number.isInteger(unitsRequested) || unitsRequested <= 0) {
        return res.status(400).json({ message: 'Invalid number of units requested.' });
    }

    try {
        const stock = await BloodStock.findOne({ bloodType });

        // Check if stock exists and if unitsAvailable is a valid number
        if (!stock || typeof stock.unitsAvailable !== 'number' || stock.unitsAvailable < unitsRequested) {
            return res.status(400).json({ message: 'Not enough blood units available.' });
        }

        // Subtract the requested units from available stock
        stock.unitsAvailable -= unitsRequested;

        // Validate after subtraction
        if (stock.unitsAvailable < 0) {
            return res.status(400).json({ message: 'Invalid operation, units cannot be negative.' });
        }

        // Save the updated stock
        await stock.save();

        res.status(200).json({ message: `Supplied ${unitsRequested} unit(s) of ${bloodType} blood to hospital.` });
    } catch (error) {
        res.status(500).json({ message: 'Error in processing hospital request.', error: error.message });
    }
};



// 3. Dashboard: View Blood Stock
exports.getBloodStock = async (req, res) => {
    try {
        const bloodStock = await BloodStock.find({});
        res.status(200).json(bloodStock);
    } catch (error) {
        res.status(500).json({ message: 'Error in fetching blood stock data.', error });
    }
};
