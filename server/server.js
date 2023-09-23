const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;

const User = require('./models/userModel.js');

const app = express();

app.listen(port, () => console.log(`Server running on port ${port}`));
