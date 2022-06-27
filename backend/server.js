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

// serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`.inverse)
});
