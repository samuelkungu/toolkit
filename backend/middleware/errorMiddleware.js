const errorHandler = (err, req, res, next) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)
        .json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        })
}
<<<<<<< HEAD

module.exports = {
    errorHandler
}
=======

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
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
