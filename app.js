const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const cookieParser = require("cookie-parser")
var apiRouter = require('./routes/api/index')
const middleware = require('./bin/middlewares')
const app = express()


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(logger('dev'));
app.use(cookieParser())

app.use('/api',apiRouter)

// error handler
app.use(middleware.errorHandler)

app.get('/', (req, res) => {
	res.json("Smile :)")
})

module.exports = app