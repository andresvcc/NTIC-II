/* eslint-disable no-unused-expressions */
/** ******************************************************
    App
*********************************************************
********************************************************* */
const express = require('express');
const cors = require('cors');

const app = express();
const helmet = require('helmet');
const libraryArr = require('./database/ownerApp');
const { cities } = require('./database/citiesApp');
const { manus } = require('./database/manus');

const library = libraryArr.owner;

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

const findOwner = (valposs) => {
  const i = 0;
  if (valposs.owner.id !== -1) return { id: valposs.owner.id, type: 'library', name: library[valposs.owner.id].name };

  const resultat = library.filter((valG) => valG.name === valposs.owner.name);
  if (resultat.length > 0) return { id: resultat[0].id, type: 'library', name: resultat[0].name };

  // eslint-disable-next-line camelcase
  const { is_in } = valposs.owner;
  // eslint-disable-next-line camelcase
  if (is_in !== null) {
    const resultatCity = cities.filter((valG) => valG.name === valposs.owner.is_in.name);
    if (resultatCity.length > 0) return { id: resultatCity[0].id, type: 'city', name: resultatCity[0].name };
  }

  return { id: valposs.owner.id, type: 'undefined', name: 'undefined' };
};

app.get('/manuscrits', (req, res) => {
  const temp2 = [...manus];
  const temp1 = temp2; // .splice(0, 5);

  const temp = temp1.map((val, i) => {
    const filterList = val.possessions;
    return {
      index: i,
      anderson_id: val.anderson_id,
      ms_name: `${val.anderson_id}_${i}`,
      possessions: filterList.map((valposs) => {
        const owner = findOwner(valposs);
        return {
          ...valposs.production ? { production: valposs.production } : {},
          start: valposs.interval === null ? 2020 : (valposs.interval.start || 0),
          end: valposs.current ? 'current' : (valposs.interval.end || 0),
          owner: owner.id,
          ownerData: owner,
          nameOwner: owner.name,
          type: owner.type,
          ...owner.id === -1 ? { nameOwner: valposs.owner.name } : {},
        };
      }).sort((a, b) => a.start - b.start)
    };
  });

  res.send(temp);
});

app.post('/*', (req, res) => {
  console.log('requette perdu');
  res.send(':) jajajajaj');
});

app.put('/*', (req, res) => {
  console.log('requette perdu');
  res.send(':) jajajajaj');
});

module.exports = app;
