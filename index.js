const express = require('express')
const app = express()
const port = 3000

const postProperty = require('./controllers/Property/postProperty');
const putProperty = require('./controllers/Property/putProperty');
const validatePropertyObject = require('./middlewares/validatePropertyObject/index.js')
const log = require('./middlewares/logging/index.js')

// application level middleware
// express.json()
app.use(express.json())
app.use(log)

app.post('/property', validatePropertyObject, postProperty);
app.put('/property/:propertyId', validatePropertyObject, putProperty);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))