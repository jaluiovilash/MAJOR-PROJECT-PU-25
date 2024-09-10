const Donor = require('../models/Donor');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Register a new donor
const registerDonor = async (req, res) => {
    const { name, email, password, bloodType, location } = req.body;
    const donorExists = await Donor.findOne({ email });

    if (donorExists) {
        return res.status(400).json({ message: 'Donor already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const donor = new Donor({
        name,
        email,
        password: hashedPassword,
        bloodType,
        location,
    });

    await donor.save();
    res.status(201).json({
        _id: donor._id,
        name: donor.name,
        email: donor.email,
        bloodType: donor.bloodType,
        token: generateToken(donor._id),
    });
};

// Donor login
const loginDonor = async (req, res) => {
    const { email, password } = req.body;
    const donor = await Donor.findOne({ email });

    if (donor && (await bcrypt.compare(password, donor.password))) {
        res.json({
            _id: donor._id,
            name: donor.name,
            email: donor.email,
            bloodType: donor.bloodType,
            token: generateToken(donor._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = { registerDonor, loginDonor };
