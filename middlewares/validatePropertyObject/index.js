const validatePropertyObject = (req, res, next) => {
    const propertyObject = req.body;
    if (propertyObject.price && propertyObject.postcode && propertyObject.title) {
        return next();
    }
    res.send("Sorry, property object must contain price, title, and postcode.")
}

module.exports = validatePropertyObject;