const express = require('express')
const app = express()

app
.use(express.static(`${__dirname}/build/`))
.use(express.static(`${__dirname}/images/`))
.use('/', express.static(`${__dirname}/images`))
.get('/', (req, res) => res.sendFile(`${__dirname}/build/index.html`))


module.exports = app;