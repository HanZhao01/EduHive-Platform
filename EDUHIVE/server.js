const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connectToDB, EduUser } = require("./database");

app.use(express.static(__dirname + "/public"));

async function start() {
    await connectToDB();

    return app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}

if (require.main === module) {
    start().catch((err) => console.error(err));
}

///////////////////////

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  institution: String,
  email: String,
  verificationCode: String
});

const User = mongoose.model('User', userSchema);

app.post('/save-user', async (req, res) => {
  try {
    const { name, dateOfBirth, institution, email, verificationCode } = req.body;
    const user = new User({ name, dateOfBirth, institution, email, verificationCode });
    await user.save();
    res.status(200).send('User information saved successfully');
  } catch (error) {
    res.status(500).send('Error saving user information');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
