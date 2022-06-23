const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const colors = require('colors');

const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})