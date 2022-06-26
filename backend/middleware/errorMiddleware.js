const errorHandler = (err, req, res, next) => {
<<<<<<< HEAD
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)
        .json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        })
}

module.exports = {
    errorHandler
}
=======
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
};

module.exports = {
    errorHandler,
};
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
