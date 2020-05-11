import axios from 'axios';

const countries = ['Bélgica', 'france'];

const villes = [
  {
    name: 'Antwerpen',
    id: 0,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.219448, 4.402464],

  },
  {
    name: 'Ascoli Piceno',
    id: 1,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [42.855400, 13.574980]
  },
  {
    name: 'Augsburg',
    id: 2,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.370544, 10.897790]
  },
  {
    name: 'Baltimore MD',
    id: 3,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [39.290386, -76.612190]
  },
  {
    name: 'Bergamo',
    id: 4,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [45.698265, 9.677270]
  },
  {
    name: 'Berlin',
    id: 5,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.520008, 13.404954]
  },
  {
    name: 'Bern',
    id: 6,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [46.947975, 7.447447]
  },
  {
    name: 'Bologna',
    id: 7,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.494888, 11.342616]
  },
  {
    name: 'Bruxelles',
    id: 8,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [50.850346, 4.351721]
  },
  {
    name: 'Bryn Mawr PA',
    id: 9,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [40.023026, -75.315178]
  },
  {
    name: 'Cambridge',
    id: 10,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.205338, 0.121817]
  },
  {
    name: 'Carpentras',
    id: 11,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.052368, 5.047320]
  },
  {
    name: 'Cesena',
    id: 12,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.138760, 12.239120]
  },
  {
    name: 'Chicago IL',
    id: 13,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [41.878113, -87.629799]
  },
  {
    name: 'Colmar',
    id: 14,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.080620, 7.359950]
  },
  {
    name: 'Cologny',
    id: 15,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [46.215851, 6.180890]
  },
  {
    name: 'Darmstadt',
    id: 16,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [49.872826, 8.651193]
  },
  {
    name: 'Dijon',
    id: 17,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [47.327209, 5.044040]
  },
  {
    name: 'Dresden',
    id: 18,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.050407, 13.737262]
  },
  {
    name: 'Düsseldorf',
    id: 19,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.227741, 6.773456]
  },
  {
    name: 'Erfurt',
    id: 20,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [50.984768, 11.029880]
  },
  {
    name: 'El Escorial',
    id: 21,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [40.585079, -4.129520]
  },
  {
    name: 'Eton',
    id: 22,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [34.824162, -84.761726]
  },
  {
    name: 'Eugene OR',
    id: 23,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.052071, -123.086754]
  },
  {
    name: 'Evanston IL',
    id: 24,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [42.052158, -87.687866]
  },
  {
    name: 'Firenze',
    id: 25,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [43.769562, 11.255814]
  },
  {
    name: 'Genova',
    id: 26,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.407059, 8.933990]
  },
  {
    name: 'Göteborg',
    id: 27,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [57.708870, 11.974560]
  },
  {
    name: 'Gravenhage',
    id: 28,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.080189, 4.310130]
  },
  {
    name: 'Helsinki',
    id: 29,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [60.169857, 24.938379]
  },
  {
    name: 'Holkham Hall',
    id: 30,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.431990, 0.781410]
  },
  {
    name: 'Karlsruhe',
    id: 31,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [49.006889, 8.403653]
  },
  {
    name: 'Konstanz',
    id: 32,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [47.661942, 9.172430]
  },
  {
    name: 'Kraków',
    id: 33,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [50.064651, 19.944981]
  },
  {
    name: 'Leiden',
    id: 34,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.160114, 4.497010]
  },
  {
    name: 'Lincoln',
    id: 35,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [37.346134, -95.262955]
  },
  {
    name: 'London',
    id: 36,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.507351, -0.127758]
  },
  {
    name: 'Mainz',
    id: 37,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [49.992863, 8.247253]
  },
  {
    name: 'Milano',
    id: 38,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [39.082520, -94.582306]
  },
  {
    name: 'Modena',
    id: 39,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.647129, 10.925227]
  },
  {
    name: 'München',
    id: 40,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.135124, 11.581981]
  },
  {
    name: 'Napoli',
    id: 41,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [40.839981, 14.252540]
  },
  {
    name: 'Nottingham',
    id: 42,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.954784, -1.158109]
  },
  {
    name: 'Oldenburg',
    id: 43,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [53.136719, 8.216540]
  },
  {
    name: 'Oxford',
    id: 44,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.752022, -1.257726]
  },
  {
    name: 'Padova',
    id: 45,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [45.406433, 11.876761]
  },
  {
    name: 'Palma de Mallorca',
    id: 46,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [38.924549, -0.220690]
  },
  {
    name: 'Paris',
    id: 47,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.856613, 2.352222]
  },
  {
    name: 'Parma',
    id: 48,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [44.801483, 10.327904]
  },
  {
    name: 'Perugia',
    id: 49,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [43.110718, 12.390828]
  },
  {
    name: 'Poppi',
    id: 50,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [43.732769, 11.764030]
  },
  {
    name: 'Praha',
    id: 51,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [50.075539, 14.437800]
  },
  {
    name: 'Princeton NJ',
    id: 52,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [40.351978, -74.660744]
  },
  {
    name: 'Roma',
    id: 53,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [41.902782, 12.496365]
  },
  {
    name: 'Salamanca',
    id: 54,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [40.970104, -5.663540]
  },
  {
    name: 'Sankt Florian',
    id: 55,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.205660, 14.379550]
  },
  {
    name: 'Schlägl',
    id: 56,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.646260, 13.971210]
  },
  {
    name: 'Stuttgart',
    id: 57,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.775845, 9.182932]
  },
  {
    name: 'Torino',
    id: 58,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [45.068371, 7.683070]
  },
  {
    name: 'Trier',
    id: 59,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [49.749992, 6.637143]
  },
  {
    name: 'Città del Vaticano',
    id: 60,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [41.902229, 12.458100]
  },
  {
    name: 'Venezia',
    id: 61,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [45.434341, 12.338780]
  },
  {
    name: 'Warsawa',
    id: 62,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.234982, 21.008490]
  },
  {
    name: 'Wien',
    id: 63,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [48.208176, 16.373819]
  },
  {
    name: 'Wolfenbüttel',
    id: 64,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [52.164040, 10.540848]
  },
  {
    name: 'Worcester',
    id: 65,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [42.262592, -71.802292]
  },
  {
    name: 'Wroclaw',
    id: 66,
    type: 'city',
    country: 1,
    start: null,
    end: 2020,
    pos: [51.107883, 17.038538]
  }
];


const Owner = [{
  type: 'library',
  id: 0,
  name: 'Archivio Storico Civico e Biblioteca Trivulziana',
  address: 'Piazza Castello, 20121 Milano MI, Italia',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 1,
  name: 'Badische Landesbibliothek',
  address: 'Erbprinzenstraße 17, 76133 Karlsruhe, Alemania',
  pos: [0, 0],
  city: 31,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 2,
  name: 'Bayerische Staatsbibliothek',
  address: 'Ludwigstraße 16, 80539 München, Alemania',
  pos: [0, 0],
  city: 40,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 3,
  name: 'Biblioteca Ambrosiana',
  address: 'Piazza Pio XI, 2, 20123 Milano MI, Italia',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 4,
  name: 'Biblioteca Angelica',
  address: 'Piazza di S. Agostino, 8, 00186 Roma RM, Italia',
  pos: [0, 0],
  city: 53,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 5,
  name: 'Biblioteca Apostolica Vaticana',
  address: 'VA, 00120, Ciudad del Vaticano',
  pos: [0, 0],
  city: 60,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 6,
  name: 'Biblioteca Civica "Angelo Mai"',
  address: 'Piazza Vecchia, 15, 24129 Bergamo BG, Italia',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 7,
  name: 'Biblioteca Comunale "Giulio Gabrielli"',
  address: 'Piazza Arringo, 6, 63100 Ascoli Piceno AP, Italia',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 8,
  name: 'Biblioteca Comunale Augusta',
  address: 'Via delle Prome, 15, 06122 Perugia PG, Italia',
  pos: [0, 0],
  city: 49,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 9,
  name: 'Biblioteca Comunale Rilliana',
  address: 'Piazza della Repubblica, 1, 52014 Poppi AR, Italia',
  pos: [0, 0],
  city: 50,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 10,
  name: 'Biblioteca del Museo Correr',
  address: 'Piazza San Marco, 52, 30170 Venezia VE, Italia',
  pos: [0, 0],
  city: 61,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 11,
  name: 'Biblioteca Durazzo Giustiniani',
  address: 'Via XXV Aprile, 12, 16123 Genova GE, Italia',
  pos: [0, 0],
  city: 26,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 12,
  name: 'Biblioteca Estense Universitaria',
  address: 'Largo Porta Sant\'Agostino, 337, 41121 Modena MO, Italia',
  pos: [0, 0],
  city: 39,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 13,
  name: 'Biblioteca Malatestiana',
  address: 'Via Cesare Montalti, 47521 Cesena FC, Italia',
  pos: [0, 0],
  city: 12,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 14,
  name: 'Biblioteca Medicea Laurenziana',
  address: 'Piazza San Lorenzo, 9, 50123 Firenze FI, Italia',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 15,
  name: 'Biblioteca Nazionale "Vittorio Emanuele III"',
  address: 'Piazza del Plebiscito, 1, 80132 Napoli NA, Italia',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 16,
  name: 'Biblioteca Nazionale Braidense',
  address: 'Via Brera, 28, 20121 Milano MI, Italia',
  pos: [0, 0],
  city: 38,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 17,
  name: 'Biblioteca Nazionale Centrale',
  address: 'Piazza dei Cavalleggeri, 1, 50122 Firenze FI, Italia',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 18,
  name: 'Biblioteca Nazionale Marciana',
  address: 'Piazza San Marco, 7, 30124 Venezia VE, Italia',
  pos: [0, 0],
  city: 61,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 19,
  name: 'Biblioteca Palatina',
  address: 'Piazza della Pilotta, 3, 43121 Parma PR, Italia',
  pos: [0, 0],
  city: 48,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 20,
  name: 'Biblioteca privada del Marqués de Campofranco',
  address: '93010 Caltanissetta, Italia',
  pos: [0, 0],
  city: 46,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 21,
  name: 'Biblioteca Riccardiana',
  address: 'Via de\' Ginori, 10, 50123 Firenze FI, Italia',
  pos: [0, 0],
  city: 25,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 22,
  name: 'Biblioteca Universitaria',
  address: 'Calle Libreros, 30, 37008 Salamanca, España',
  pos: [0, 0],
  city: 54,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 23,
  name: 'Biblioteca Vallicelliana',
  address: 'Via della Chiesa Nuova, 18, 00186 Roma RM, Italia',
  pos: [0, 0],
  city: 53,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 24,
  name: 'Biblioteka Jagiellonska',
  address: 'aleja Adama Mickiewicza 22, 30-059 Kraków, Polonia',
  pos: [0, 0],
  city: 33,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 25,
  name: 'Biblioteka Muzeum Narodowego w Krakowie',
  address: 'Świętego Marka 17, 31-018 Kraków, Polonia',
  pos: [0, 0],
  city: 33,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 26,
  name: 'Biblioteka Narodowa',
  address: 'aleja Niepodległości 213, 02-086 Warszawa, Polonia',
  pos: [0, 0],
  city: 62,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 27,
  name: 'Biblioteka Uniwersytecka',
  address: 'Fryderyka Joliot-Curie 12, 50-383 Wrocław, Polonia',
  pos: [0, 0],
  city: 66,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 28,
  name: 'Bibliotheca Bodmeriana',
  address: 'Route Martin-Bodmer 19-21, 1223 Cologny',
  pos: [0, 0],
  city: 15,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 29,
  name: 'Bibliothek des Heinrich-Suso-Gymnasium',
  address: 'Neuhauser Str. 1, 78464 Konstanz, Alemania',
  pos: [0, 0],
  city: 32,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 30,
  name: 'Bibliothèque de l’Université libre',
  address: 'Bâtiment A, Campus du Solbosch, Avenue F. Roosevelt 50, 1050 Brussel, Bélgica',
  pos: [0, 0],
  city: 8,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 31,
  name: 'Bibliothèque Municipale',
  address: '5 Rue de l\'École de Droit, 21000 Dijon, Francia',
  pos: [0, 0],
  city: 17,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 32,
  name: 'Bibliothèque Nationale de France',
  address: 'Quai François Mauriac, 75706 Paris, Francia',
  pos: [0, 0],
  city: 47,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 33,
  name: 'Bibliothèque Royale de Belgique',
  pos: [0, 0],
  address: 'Boulevard de l\'Empereur 4, 1000 Bruxelles, Bélgica',
  city: 8,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 34,
  name: 'Bibliothèque-Musée Inguimbertine',
  address: '180 Place Aristide Briand, 84200 Carpentras, Francia',
  pos: [0, 0],
  city: 11,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 35,
  name: 'Bodleian Library',
  address: 'Broad St, Oxford OX1 3BG, Reino Unido',
  pos: [0, 0],
  city: 44,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 36,
  name: 'British Library',
  address: '8 Midland Rd, London NW1 2DB, Reino Unido',
  pos: [0, 0],
  city: 36,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 37,
  name: 'Bryn Mawr College, Canaday Library',
  address: '101 N Merion Ave, Bryn Mawr, PA 19010, Estados Unidos',
  pos: [0, 0],
  city: 9,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 38,
  name: 'Burgerbibliothek',
  address: 'Münstergasse 63, 3000 Bern',
  pos: [0, 0],
  city: 6,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 39,
  name: 'Cathedral Library',
  address: '8 College Yard, Worcester WR1 2LA, Reino Unido',
  pos: [0, 0],
  city: 65,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 40,
  name: 'Corpus Christi College, Parker Library',
  address: 'Trumpington St, Cambridge CB2 1RH, Reino Unido',
  pos: [0, 0],
  city: 44,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 41,
  name: 'College Library',
  address: 'Venusstraat 35, 2000 Antwerpen, Bélgica',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 42,
  name: 'University Library, National Library of Finland',
  address: 'Unioninkatu 36, 00170 Helsinki, Finlandia',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 43,
  name: 'Herzog August Bibliothek',
  address: 'Lessingpl. 1, 38304 Wolfenbüttel, Alemania',
  pos: [0, 0],
  city: 64,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 44,
  name: 'Hessische Landes- und Hochschulbibliothek',
  address: 'Magdalenenstraße 8, 64289 Darmstadt, Alemania',
  pos: [0, 0],
  city: 16,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 45,
  name: 'Koninklijke Bibliotheek',
  address: 'Prins Willem-Alexanderhof 5, 2595 BE Den Haag, Países Bajos',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 46,
  name: 'Landesbibliothek',
  address: 'Pferdemarkt 15, 26121 Oldenburg, Alemania',
  pos: [0, 0],
  city: 43,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 47,
  name: 'library',
  address: 'paris',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 48,
  name: 'Library of the Earl of Leicester',
  address: 'Wood St, Earl Shilton, Leicester LE9 7NE, Reino Unido',
  pos: [0, 0],
  city: 30,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 49,
  name: 'Libreria antiquaria Pregliasco',
  address: 'Via Accademia Albertina, 3 bis, 10123 Torino TO, Italia',
  pos: [0, 0],
  city: 58,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 50,
  name: '36 College',
  address: 'Via Faleria, 4, 63100 Ascoli Piceno AP, Italia',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 51,
  name: 'Martinus-Bibliothek',
  address: 'Grebenstraße 8, 55116 Mainz, Alemania',
  pos: [0, 0],
  city: 37,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 52,
  name: 'Museum Plantin-Moretus',
  address: 'Vrijdagmarkt 22-23, 2000 Antwerpen, Bélgica',
  pos: [0, 0],
  city: 0,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 53,
  name: 'Národní Knihovna Ceské Republiky',
  address: 'Klementinum 190, 110 00 Josefov, Chequia',
  pos: [0, 0],
  city: 51,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 54,
  name: 'Northwestern University Library',
  address: '1970 Campus Dr, Evanston, IL 60201, Estados Unidos',
  pos: [0, 0],
  city: 24,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 55,
  name: 'Österreichische Nationalbibliothek',
  address: 'Josefsplatz 1, 1015 Wien, Austria',
  pos: [0, 0],
  city: 63,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 56,
  name: 'Real Biblioteca del Monasterio de San Lorenzo',
  address: 'Av Juan de Borbón y Battemberg, s/n, 28200 San Lorenzo de El Escorial, Madrid, España',
  pos: [0, 0],
  city: 21,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 57,
  name: 'Sächsische Landesbibliothek – Staats- und Universitätsbibliothek',
  address: 'Zellescher Weg 18, 01069 Dresden, Alemania',
  pos: [0, 0],
  city: 18,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 58,
  name: 'Staats- und Stadtbibliothek',
  address: 'Schaezlerstraße 25, 86152 Augsburg, Alemania',
  pos: [0, 0],
  city: 2,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 59,
  name: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz',
  address: 'Potsdamer Straße 33, 10785 Berlin, Alemania',
  pos: [0, 0],
  city: 1,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 60,
  name: 'Stadtbibliothek',
  address: 'Weberbach 25, 54290 Trier, Alemania',
  pos: [0, 0],
  city: 59,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 61,
  name: 'Stiftsbibliothek',
  address: 'Schlägl 1, 4160 Schlägl, Austria',
  pos: [0, 0],
  city: 56,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 62,
  name: 'Universitätsbibliothek (Landes- und Stadtbibliothek)',
  address: '40225 Düsseldorf, Alemania',
  pos: [0, 0],
  city: 19,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 63,
  name: 'Universiteitsbibliotheek',
  address: 'Witte Singel 27, 2311 BG Leiden, Países Bajos',
  pos: [0, 0],
  city: 34,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 64,
  name: 'Universitetsbibliotek',
  address: 'Västra Hamngatan 25, Pedagogen hus A, 411 17 Göteborg, Suecia',
  pos: [0, 0],
  city: 27,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 65,
  name: 'University Library',
  address: 'One Washington Road, Princeton, NJ 08544, Estados Unidos',
  pos: [0, 0],
  city: 52,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 66,
  name: 'University Library (Wollaton Library Collection)',
  address: 'Bramcote La, Nottingham NG8 2NA, Reino Unido',
  pos: [0, 0],
  city: 42,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 67,
  name: 'University of Oregon, Knight Library',
  address: '1501 Kincaid St, Eugene, OR 97403, Estados Unidos',
  pos: [0, 0],
  city: 23,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 68,
  name: 'Walters Art Museum',
  address: '600 N Charles St, Baltimore, MD 21201, Estados Unidos',
  pos: [0, 0],
  city: 3,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 69,
  name: 'Wissenschaftliche Allgemeinbibliothek',
  address: 'Dompl. 1, 99084 Erfurt, Alemania',
  pos: [45.9638147829382, 6.3122978007208985],
  city: 20,
  start: null,
  end: 2020
}, {
  type: 'library',
  id: 70,
  name: 'Württembergische Landesbibliothek',
  address: 'Konrad-Adenauer-Straße 8, 70173 Stuttgart, Alemania',
  pos: [46.33350892647935, 23.636684587922588],
  city: 57,
  start: null,
  end: 2020
}];


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
