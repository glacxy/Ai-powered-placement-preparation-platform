const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("🔍 DEBUG: MONGO_URI =", process.env.MONGO_URI);

// MongoDB Connection with proper database name
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "devgenius",
  })
  .then(() => {
    console.log("✅ MongoDB Connected 🚀");
    console.log("📊 Database Name:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend Running 🚀",
  });
});

// Register Route
app.post("/register", async (req, res) => {
  try {
    console.log("\n📝 REGISTER REQUEST RECEIVED");
    console.log("Request Body:", req.body);
    console.log("Database Connected:", mongoose.connection.name);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required"
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    console.log("Saving user...");
    const savedUser = await newUser.save();

    console.log("✅ User saved successfully:", savedUser._id);
    console.log("📊 User data:", { name: savedUser.name, email: savedUser.email, id: savedUser._id });

    res.status(201).json({
      message: "User Registered Successfully 🚀",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (err) {
    console.error("❌ Register Error:", err.message);
    res.status(500).json({ 
      message: "Server Error: " + err.message 
    });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    console.log("\n🔐 LOGIN REQUEST:", req.body.email);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    console.log("✅ Login successful:", email);
    res.status(200).json({
      message: "Login Successful 🚀",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

// GET ALL USERS - Debug endpoint
app.get("/users", async (req, res) => {
  try {
    console.log("\n📋 Fetching users from database:", mongoose.connection.name);
    const users = await User.find();
    
    console.log("✅ Found " + users.length + " users");
    
    res.status(200).json({
      message: "Found " + users.length + " users",
      count: users.length,
      users: users
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({
      message: "Error: " + err.message
    });
  }
});

// GET DATABASE INFO - Debug endpoint
app.get("/db-info", async (req, res) => {
  try {
    const dbName = mongoose.connection.name;
    const userCount = await User.countDocuments();
    
    res.status(200).json({
      database: dbName,
      userCount: userCount,
      connectionState: mongoose.connection.readyState
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({
      message: "Error: " + err.message
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("\n🚀 Server running on port " + PORT);
  console.log("Ready for requests!\n");
});
