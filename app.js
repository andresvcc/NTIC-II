/* eslint-disable no-unused-expressions */
/** ******************************************************
    App
*********************************************************
********************************************************* */

const express = require('express');
const cors = require('cors');

const app = express();
const helmet = require('helmet');

// App
const gzipCompress = (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
};

// detention des errors dans le corp des requêtes http
const errorDetection = (error, req, res, next) => {
  error instanceof SyntaxError
    ? res.send({ info: `ERROR DETECTED:${error}` }) : next();
};

app
  .get('*bundle.js', gzipCompress)
  .use(express.static(`${__dirname}/public/`))
  .use('/', express.static(`${__dirname}/public`))
  .use('/images', express.static(`${__dirname}/public/images`))
  .use('/public/images', express.static(`${__dirname}/public/images`))
  .use('/sw.js', express.static(`${__dirname.root}/sw.js`))
  .use(cors({ credentials: true, origin: ['http://localhost:8080', 'http://localhost:3000', /w*/] })) //  Configurer les options d'identification sur true, necesaire pour la detection des session avec une meme cle
  .use(helmet())
  .use(express.json({ limit: '50mb' }))
  .use(express.urlencoded({ extended: true, limit: '50mb' }))
  .set('trust proxy', 1)
  .use(errorDetection);

app.post('/*', (req, res) => {
  console.log('requette perdu');
  res.send(':) jajajajaj');
});

app.put('/*', (req, res) => {
  console.log('requette perdu');
  res.send(':) jajajajaj');
});

module.exports = app;
