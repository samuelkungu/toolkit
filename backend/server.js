const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const colors = require('colors');
const mongoose = require('mongoose');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());


app.use('/api/posts', require('./routes/posts.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/users.routes'));

app.use((err, req, res, next) => {
    console.log("middleware")
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Mongo DB connected")).catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})