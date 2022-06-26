const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`.inverse)
});
