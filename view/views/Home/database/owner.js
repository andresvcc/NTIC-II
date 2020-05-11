import axios from 'axios';

const countries = ['Bélgica', 'france'];

const villes = [
  {
    name: 'Antwerpen',
    id: 0,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.219448, 4.402464],

  },
  {
    name: 'Ascoli Piceno',
    id: 1,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [42.855400, 13.574980]
  },
  {
    name: 'Augsburg',
    id: 2,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.370544, 10.897790]
  },
  {
    name: 'Baltimore MD',
    id: 3,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [39.290386, -76.612190]
  },
  {
    name: 'Bergamo',
    id: 4,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [45.698265, 9.677270]
  },
  {
    name: 'Berlin',
    id: 5,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.520008, 13.404954]
  },
  {
    name: 'Bern',
    id: 6,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [46.947975, 7.447447]
  },
  {
    name: 'Bologna',
    id: 7,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.494888, 11.342616]
  },
  {
    name: 'Bruxelles',
    id: 8,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [50.850346, 4.351721]
  },
  {
    name: 'Bryn Mawr PA',
    id: 9,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [40.023026, -75.315178]
  },
  {
    name: 'Cambridge',
    id: 10,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.205338, 0.121817]
  },
  {
    name: 'Carpentras',
    id: 11,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.052368, 5.047320]
  },
  {
    name: 'Cesena',
    id: 12,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.138760, 12.239120]
  },
  {
    name: 'Chicago IL',
    id: 13,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [41.878113, -87.629799]
  },
  {
    name: 'Colmar',
    id: 14,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.080620, 7.359950]
  },
  {
    name: 'Cologny',
    id: 15,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [46.215851, 6.180890]
  },
  {
    name: 'Darmstadt',
    id: 16,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [49.872826, 8.651193]
  },
  {
    name: 'Dijon',
    id: 17,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [47.327209, 5.044040]
  },
  {
    name: 'Dresden',
    id: 18,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.050407, 13.737262]
  },
  {
    name: 'Düsseldorf',
    id: 19,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.227741, 6.773456]
  },
  {
    name: 'Erfurt',
    id: 20,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [50.984768, 11.029880]
  },
  {
    name: 'El Escorial',
    id: 21,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [40.585079, -4.129520]
  },
  {
    name: 'Eton',
    id: 22,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [34.824162, -84.761726]
  },
  {
    name: 'Eugene OR',
    id: 23,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.052071, -123.086754]
  },
  {
    name: 'Evanston IL',
    id: 24,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [42.052158, -87.687866]
  },
  {
    name: 'Firenze',
    id: 25,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [43.769562, 11.255814]
  },
  {
    name: 'Genova',
    id: 26,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.407059, 8.933990]
  },
  {
    name: 'Göteborg',
    id: 27,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [57.708870, 11.974560]
  },
  {
    name: 'Gravenhage',
    id: 28,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.080189, 4.310130]
  },
  {
    name: 'Helsinki',
    id: 29,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [60.169857, 24.938379]
  },
  {
    name: 'Holkham Hall',
    id: 30,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.431990, 0.781410]
  },
  {
    name: 'Karlsruhe',
    id: 31,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [49.006889, 8.403653]
  },
  {
    name: 'Konstanz',
    id: 32,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [47.661942, 9.172430]
  },
  {
    name: 'Kraków',
    id: 33,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [50.064651, 19.944981]
  },
  {
    name: 'Leiden',
    id: 34,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.160114, 4.497010]
  },
  {
    name: 'Lincoln',
    id: 35,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [37.346134, -95.262955]
  },
  {
    name: 'London',
    id: 36,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.507351, -0.127758]
  },
  {
    name: 'Mainz',
    id: 37,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [49.992863, 8.247253]
  },
  {
    name: 'Milano',
    id: 38,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [39.082520, -94.582306]
  },
  {
    name: 'Modena',
    id: 39,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.647129, 10.925227]
  },
  {
    name: 'München',
    id: 40,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.135124, 11.581981]
  },
  {
    name: 'Napoli',
    id: 41,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [40.839981, 14.252540]
  },
  {
    name: 'Nottingham',
    id: 42,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.954784, -1.158109]
  },
  {
    name: 'Oldenburg',
    id: 43,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [53.136719, 8.216540]
  },
  {
    name: 'Oxford',
    id: 44,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.752022, -1.257726]
  },
  {
    name: 'Padova',
    id: 45,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [45.406433, 11.876761]
  },
  {
    name: 'Palma de Mallorca',
    id: 46,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [38.924549, -0.220690]
  },
  {
    name: 'Paris',
    id: 47,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.856613, 2.352222]
  },
  {
    name: 'Parma',
    id: 48,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [44.801483, 10.327904]
  },
  {
    name: 'Perugia',
    id: 49,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [43.110718, 12.390828]
  },
  {
    name: 'Poppi',
    id: 50,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [43.732769, 11.764030]
  },
  {
    name: 'Praha',
    id: 51,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [50.075539, 14.437800]
  },
  {
    name: 'Princeton NJ',
    id: 52,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [40.351978, -74.660744]
  },
  {
    name: 'Roma',
    id: 53,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [41.902782, 12.496365]
  },
  {
    name: 'Salamanca',
    id: 54,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [40.970104, -5.663540]
  },
  {
    name: 'Sankt Florian',
    id: 55,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.205660, 14.379550]
  },
  {
    name: 'Schlägl',
    id: 56,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.646260, 13.971210]
  },
  {
    name: 'Stuttgart',
    id: 57,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.775845, 9.182932]
  },
  {
    name: 'Torino',
    id: 58,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [45.068371, 7.683070]
  },
  {
    name: 'Trier',
    id: 59,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [49.749992, 6.637143]
  },
  {
    name: 'Città del Vaticano',
    id: 60,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [41.902229, 12.458100]
  },
  {
    name: 'Venezia',
    id: 61,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [45.434341, 12.338780]
  },
  {
    name: 'Warsawa',
    id: 62,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.234982, 21.008490]
  },
  {
    name: 'Wien',
    id: 63,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [48.208176, 16.373819]
  },
  {
    name: 'Wolfenbüttel',
    id: 64,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [52.164040, 10.540848]
  },
  {
    name: 'Worcester',
    id: 65,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [42.262592, -71.802292]
  },
  {
    name: 'Wroclaw',
    id: 66,
    type: 'city',
    country: 1,
    start: null,
    end: null,
    pos: [51.107883, 17.038538]
  }
];


const Owner = [{
  type: 'library',
  id: 0,
  name: 'Archivio Storico Civico e Biblioteca Trivulziana',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 1,
  name: 'Badische Landesbibliothek',
  pos: [0, 0],
  city: 31,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 2,
  name: 'Bayerische Staatsbibliothek',
  pos: [0, 0],
  city: 40,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 3,
  name: 'Biblioteca Ambrosiana',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 4,
  name: 'Biblioteca Angelica',
  pos: [0, 0],
  city: 53,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 5,
  name: 'Biblioteca Apostolica Vaticana',
  pos: [0, 0],
  city: 60,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 6,
  name: 'Biblioteca Civica "Angelo Mai"',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 7,
  name: 'Biblioteca Comunale "Giulio Gabrielli"',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 8,
  name: 'Biblioteca Comunale Augusta',
  pos: [0, 0],
  city: 49,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 9,
  name: 'Biblioteca Comunale Rilliana',
  pos: [0, 0],
  city: 50,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 10,
  name: 'Biblioteca del Museo Correr',
  pos: [0, 0],
  city: 61,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 11,
  name: 'Biblioteca Durazzo Giustiniani',
  pos: [0, 0],
  city: 26,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 12,
  name: 'Biblioteca Estense Universitaria',
  pos: [0, 0],
  city: 39,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 13,
  name: 'Biblioteca Malatestiana',
  pos: [0, 0],
  city: 12,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 14,
  name: 'Biblioteca Medicea Laurenziana',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 15,
  name: 'Biblioteca Nazionale "Vittorio Emanuele III"',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 16,
  name: 'Biblioteca Nazionale Braidense',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 17,
  name: 'Biblioteca Nazionale Centrale',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 18,
  name: 'Biblioteca Nazionale Marciana',
  pos: [0, 0],
  city: 61,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 19,
  name: 'Biblioteca Palatina',
  pos: [0, 0],
  city: 48,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 20,
  name: 'Biblioteca privada del Marqués de Campofranco',
  pos: [0, 0],
  city: 46,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 21,
  name: 'Biblioteca Riccardiana',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 22,
  name: 'Biblioteca Universitaria',
  pos: [0, 0],
  city: 54,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 23,
  name: 'Biblioteca Vallicelliana',
  pos: [0, 0],
  city: 53,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 24,
  name: 'Biblioteka Jagiellonska',
  pos: [0, 0],
  city: 33,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 25,
  name: 'Biblioteka Muzeum Narodowego w Krakowie',
  pos: [0, 0],
  city: 33,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 26,
  name: 'Biblioteka Narodowa',
  pos: [0, 0],
  city: 62,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 27,
  name: 'Biblioteka Uniwersytecka',
  pos: [0, 0],
  city: 66,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 28,
  name: 'Bibliotheca Bodmeriana',
  pos: [0, 0],
  city: 15,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 29,
  name: 'Bibliothek des Heinrich-Suso-Gymnasium',
  pos: [0, 0],
  city: 32,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 30,
  name: 'Bibliothèque de l’Université libre',
  pos: [0, 0],
  city: 8,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 31,
  name: 'Bibliothèque Municipale',
  pos: [0, 0],
  city: 17,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 32,
  name: 'Bibliothèque Nationale de France',
  pos: [0, 0],
  city: 47,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 33,
  name: 'Bibliothèque Royale de Belgique',
  pos: [0, 0],
  city: 8,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 34,
  name: 'Bibliothèque-Musée Inguimbertine',
  pos: [0, 0],
  city: 11,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 35,
  name: 'Bodleian Library',
  pos: [0, 0],
  city: 44,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 36,
  name: 'British Library',
  pos: [0, 0],
  city: 36,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 37,
  name: 'Bryn Mawr College, Canaday Library',
  pos: [0, 0],
  city: 9,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 38,
  name: 'Burgerbibliothek',
  pos: [0, 0],
  city: 6,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 39,
  name: 'Cathedral Library',
  pos: [0, 0],
  city: 65,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 40,
  name: 'Corpus Christi College, Parker Library',
  pos: [0, 0],
  city: 44,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 41,
  name: '23 College Library',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 42,
  name: '30 University Library, National Library of Finland',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 43,
  name: 'Herzog August Bibliothek',
  pos: [0, 0],
  city: 64,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 44,
  name: 'Hessische Landes- und Hochschulbibliothek',
  pos: [0, 0],
  city: 16,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 45,
  name: 'Koninklijke Bibliotheek',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 46,
  name: 'Landesbibliothek',
  pos: [0, 0],
  city: 43,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 47,
  name: 'library',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 48,
  name: 'Library of the Earl of Leicester',
  pos: [0, 0],
  city: 30,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 49,
  name: 'Libreria antiquaria Pregliasco',
  pos: [0, 0],
  city: 58,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 50,
  name: '36 College',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 51,
  name: 'Martinus-Bibliothek',
  pos: [0, 0],
  city: 37,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 52,
  name: 'Museum Plantin-Moretus',
  pos: [0, 0],
  city: 0,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 53,
  name: 'Národní Knihovna Ceské Republiky',
  pos: [0, 0],
  city: 51,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 54,
  name: 'Northwestern University Library',
  pos: [0, 0],
  city: 24,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 55,
  name: 'Österreichische Nationalbibliothek',
  pos: [0, 0],
  city: 63,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 56,
  name: 'Real Biblioteca del Monasterio de San Lorenzo',
  pos: [0, 0],
  city: 21,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 57,
  name: 'Sächsische Landesbibliothek – Staats- und Universitätsbibliothek',
  pos: [0, 0],
  city: 18,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 58,
  name: 'Staats- und Stadtbibliothek',
  pos: [0, 0],
  city: 2,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 59,
  name: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 60,
  name: 'Stadtbibliothek',
  pos: [0, 0],
  city: 59,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 61,
  name: 'Stiftsbibliothek',
  pos: [0, 0],
  city: 56,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 62,
  name: 'Universitätsbibliothek (Landes- und Stadtbibliothek)',
  pos: [0, 0],
  city: 19,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 63,
  name: 'Universiteitsbibliotheek',
  pos: [0, 0],
  city: 34,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 64,
  name: 'Universitetsbibliotek',
  pos: [0, 0],
  city: 27,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 65,
  name: 'University Library',
  pos: [0, 0],
  city: 52,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 66,
  name: 'University Library (Wollaton Library Collection)',
  pos: [0, 0],
  city: 42,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 67,
  name: 'University of Oregon, Knight Library',
  pos: [0, 0],
  city: 23,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 68,
  name: 'Walters Art Museum',
  pos: [0, 0],
  city: 3,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 69,
  name: 'Wissenschaftliche Allgemeinbibliothek',
  pos: [45.9638147829382, 6.3122978007208985],
  city: 20,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 70,
  name: 'Württembergische Landesbibliothek',
  pos: [46.33350892647935, 23.636684587922588],
  city: 57,
  start: null,
  end: 2020
}];

const villeX = [];
const ff = Owner.map((value) => {
  villeX.push(value.name);
  return value;
});

console.log(JSON.stringify(villeX));

const manuscrit = [
  {
    type: 'manuscrit',
    anderson_id: 3,
    town: 1,
    ms_name: '3_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [{
      datation: 'XIII', yearMin: 1250, yearMax: 1300, library: Owner[0]
    }, {
      datation: 'XIII-XIV/2', yearMin: 1300, yearMax: 1350, library: Owner[1]
    }, {
      datation: 'XV', yearMin: 1550, yearMax: 1600, library: Owner[2]
    }]
  },
  {
    type: 'manuscrit',
    anderson_id: 3,
    town: 1,
    ms_name: '3_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [{
      datation: 'XIII', yearMin: 1300, yearMax: 1400, library: Owner[1]
    }]
  },
];



export default Owner;
