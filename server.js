const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()

const app = express();

connectDb();
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/contacts', require('./routes/userRoutes'));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})