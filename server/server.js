// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('MongoDB connected');
// }).catch((err) => console.log(err));

// // Define a test route
// app.get('/', (req, res) => {
//     res.send('RaktSetu API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const donorRoutes = require('./routes/donorRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/donors', donorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
