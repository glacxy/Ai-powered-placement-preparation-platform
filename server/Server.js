
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected 🚀");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {

    res.json({
        message: "Backend Running 🚀"
    });

});
app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check user already exists
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save to MongoDB
        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully 🚀"
        });

    } catch(err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});