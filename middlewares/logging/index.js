const log = (req, res, next) => {
    const LOG_MESSAGE = `${new Date()}: ${req.method}:${req.path}`
    console.log(LOG_MESSAGE);
    next();
}

module.exports = log;