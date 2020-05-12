const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const owner = [
  {
    type: 'library',
    id: 0,
    name: 'Archivio Storico Civico e Biblioteca Trivulziana',
    address: 'Piazza Castello, 20121 Milano MI, Italia',
    pos: [
      45.46962,
      9.18043
    ],
    city: 38,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 1,
    name: 'Badische Landesbibliothek',
    address: 'Erbprinzenstraße 17, 76133 Karlsruhe, Alemania',
    pos: [
      49.0084,
      8.3983
    ],
    city: 31,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 2,
    name: 'Bayerische Staatsbibliothek',
    address: 'Ludwigstraße 16, 80539 München, Alemania',
    pos: [
      48.14711,
      11.58006
    ],
    city: 40,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 3,
    name: 'Biblioteca Ambrosiana',
    address: 'Piazza Pio XI, 2, 20123 Milano MI, Italia',
    pos: [
      45.46363,
      9.18603
    ],
    city: 38,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 4,
    name: 'Biblioteca Angelica',
    address: 'Piazza di S. Agostino, 8, 00186 Roma RM, Italia',
    pos: [
      41.90071,
      12.47445
    ],
    city: 53,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 5,
    name: 'Biblioteca Apostolica Vaticana',
    address: 'VA, 00120, Ciudad del Vaticano',
    pos: [
      41.90397,
      12.45755
    ],
    city: 60,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 6,
    name: 'Biblioteca Civica "Angelo Mai"',
    address: 'Piazza Vecchia, 15, 24129 Bergamo BG, Italia',
    pos: [
      45.70437,
      9.66321
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 7,
    name: 'Biblioteca Comunale "Giulio Gabrielli"',
    address: 'Piazza Arringo, 6, 63100 Ascoli Piceno AP, Italia',
    pos: [
      42.85335,
      13.577
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 8,
    name: 'Biblioteca Comunale Augusta',
    address: 'Via delle Prome, 15, 06122 Perugia PG, Italia',
    pos: [
      43.11369,
      12.39053
    ],
    city: 49,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 9,
    name: 'Biblioteca Comunale Rilliana',
    address: 'Piazza della Repubblica, 1, 52014 Poppi AR, Italia',
    pos: [
      43.72262,
      11.7672
    ],
    city: 50,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 10,
    name: 'Biblioteca del Museo Correr',
    address: 'Piazza San Marco, 52, 30170 Venezia VE, Italia',
    pos: [
      45.43373,
      12.33852
    ],
    city: 61,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 11,
    name: 'Biblioteca Durazzo Giustiniani',
    address: 'Via XXV Aprile, 12, 16123 Genova GE, Italia',
    pos: [
      44.40942,
      8.93484
    ],
    city: 26,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 12,
    name: 'Biblioteca Estense Universitaria',
    address: 'Largo Porta Sant\'Agostino, 337, 41121 Modena MO, Italia',
    pos: [
      44.64825,
      10.92104
    ],
    city: 39,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 13,
    name: 'Biblioteca Malatestiana',
    address: 'Via Cesare Montalti, 47521 Cesena FC, Italia',
    pos: [
      44.13888,
      12.23904
    ],
    city: 12,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 14,
    name: 'Biblioteca Medicea Laurenziana',
    address: 'Piazza San Lorenzo, 9, 50123 Firenze FI, Italia',
    pos: [
      43.77527,
      11.2543
    ],
    city: 25,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 15,
    name: 'Biblioteca Nazionale "Vittorio Emanuele III"',
    address: 'Piazza del Plebiscito, 1, 80132 Napoli NA, Italia',
    pos: [
      40.83505,
      14.24845
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 16,
    name: 'Biblioteca Nazionale Braidense',
    address: 'Via Brera, 28, 20121 Milano MI, Italia',
    pos: [
      45.47225,
      9.18768
    ],
    city: 38,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 17,
    name: 'Biblioteca Nazionale Centrale',
    address: 'Piazza dei Cavalleggeri, 1, 50122 Firenze FI, Italia',
    pos: [
      43.76698,
      11.26219
    ],
    city: 25,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 18,
    name: 'Biblioteca Nazionale Marciana',
    address: 'Piazza San Marco, 7, 30124 Venezia VE, Italia',
    pos: [
      45.43424,
      12.33805
    ],
    city: 61,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 19,
    name: 'Biblioteca Palatina',
    address: 'Piazza della Pilotta, 3, 43121 Parma PR, Italia',
    pos: [
      44.80464,
      10.32584
    ],
    city: 48,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 20,
    name: 'Biblioteca privada del Marqués de Campofranco',
    address: '93010 Caltanissetta, Italia',
    pos: [
      37.68308,
      13.83265
    ],
    city: 46,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 21,
    name: 'Biblioteca Riccardiana',
    address: 'Via de\' Ginori, 10, 50123 Firenze FI, Italia',
    pos: [
      43.77555,
      11.25537
    ],
    city: 25,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 22,
    name: 'Biblioteca Universitaria',
    address: 'Calle Libreros, 30, 37008 Salamanca, España',
    pos: [
      40.96157,
      -5.66729
    ],
    city: 54,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 23,
    name: 'Biblioteca Vallicelliana',
    address: 'Via della Chiesa Nuova, 18, 00186 Roma RM, Italia',
    pos: [
      41.89864,
      12.46946
    ],
    city: 53,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 24,
    name: 'Biblioteka Jagiellonska',
    address: 'aleja Adama Mickiewicza 22, 30-059 Kraków, Polonia',
    pos: [
      50.06146,
      19.9231
    ],
    city: 33,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 25,
    name: 'Biblioteka Muzeum Narodowego w Krakowie',
    address: 'swietego Marka 17+31-018 Kraków, Polonia',
    pos: [
      50.06377,
      19.93953
    ],
    city: 33,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 26,
    name: 'Biblioteka Narodowa',
    address: 'aleja Niepodległosci 213, 02-086 Warszawa, Polonia',
    pos: [
      52.21373,
      21.00461
    ],
    city: 62,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 27,
    name: 'Biblioteka Uniwersytecka',
    address: 'Fryderyka Joliot-Curie 12, 50-383 Wrocław, Polonia',
    pos: [
      51.11037,
      17.05294
    ],
    city: 66,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 28,
    name: 'Bibliotheca Bodmeriana',
    address: 'Route Martin-Bodmer 19-21, 1223 Cologny',
    pos: [
      46.21527,
      6.18063
    ],
    city: 15,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 29,
    name: 'Bibliothek des Heinrich-Suso-Gymnasium',
    address: 'Neuhauser Str. 1, 78464 Konstanz, Alemania',
    pos: [
      47.66932,
      9.18717
    ],
    city: 32,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 30,
    name: 'Bibliothèque de l’Université libre',
    address: 'Bâtiment A, Campus du Solbosch, Avenue F. Roosevelt 50, 1050 Brussel, Bélgica',
    pos: [
      50.81172,
      4.38109
    ],
    city: 8,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 31,
    name: 'Bibliothèque Municipale',
    address: '5 Rue de l\'École de Droit, 21000 Dijon, Francia',
    pos: [
      47.31933,
      5.0423
    ],
    city: 17,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 32,
    name: 'Bibliothèque Nationale de France',
    address: 'Quai François Mauriac, 75706 Paris, Francia',
    pos: [
      48.83398,
      2.37751
    ],
    city: 47,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 33,
    name: 'Bibliothèque Royale de Belgique',
    pos: [
      50.84366,
      4.35535
    ],
    address: 'Boulevard de l\'Empereur 4, 1000 Bruxelles, Bélgica',
    city: 8,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 34,
    name: 'Bibliothèque-Musée Inguimbertine',
    address: '180 Place Aristide Briand, 84200 Carpentras, Francia',
    pos: [
      44.05199,
      5.0481
    ],
    city: 11,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 35,
    name: 'Bodleian Library',
    address: 'Broad St, Oxford OX1 3BG, Reino Unido',
    pos: [
      51.75419,
      -1.25812
    ],
    city: 44,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 36,
    name: 'British Library',
    address: '8 Midland Rd, London NW1 2DB, Reino Unido',
    pos: [
      51.56965,
      -0.00711
    ],
    city: 36,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 37,
    name: 'Bryn Mawr College, Canaday Library',
    address: '101 N Merion Ave, Bryn Mawr, PA 19010, Estados Unidos',
    pos: [
      40.02553,
      -75.3133
    ],
    city: 9,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 38,
    name: 'Burgerbibliothek',
    address: 'Münstergasse 63, 3000 Bern',
    pos: [
      46.94735,
      7.44837
    ],
    city: 6,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 39,
    name: 'Cathedral Library',
    address: '8 College Yard, Worcester WR1 2LA, Reino Unido',
    pos: [
      52.18902,
      -2.22153
    ],
    city: 65,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 40,
    name: 'Corpus Christi College, Parker Library',
    address: 'Trumpington St, Cambridge CB2 1RH, Reino Unido',
    pos: [
      52.20078,
      0.11929
    ],
    city: 44,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 41,
    name: 'College Library',
    address: 'Venusstraat 35, 2000 Antwerpen, Bélgica',
    pos: [
      51.22275,
      4.40895
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 42,
    name: 'University Library, National Library of Finland',
    address: 'Unioninkatu 36, 00170 Helsinki, Finlandia',
    pos: [
      60.17033,
      24.94956
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 43,
    name: 'Herzog August Bibliothek',
    address: 'Lessingpl. 1, 38304 Wolfenbüttel, Alemania',
    pos: [
      52.16185,
      10.48335
    ],
    city: 64,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 44,
    name: 'Hessische Landes- und Hochschulbibliothek',
    address: 'Magdalenenstraße 8, 64289 Darmstadt, Alemania',
    pos: [
      49.87677,
      8.65808
    ],
    city: 16,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 45,
    name: 'Koninklijke Bibliotheek',
    address: 'Prins Willem-Alexanderhof 5, 2595 BE Den Haag, Países Bajos',
    pos: [
      52.08125,
      4.32589
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 46,
    name: 'Landesbibliothek',
    address: 'Pferdemarkt 15, 26121 Oldenburg, Alemania',
    pos: [
      53.14686,
      8.21497
    ],
    city: 43,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 47,
    name: 'library',
    address: 'paris',
    pos: [
      48.856613,
      2.352222
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 48,
    name: 'Library of the Earl of Leicester',
    address: 'Wood St, Earl Shilton, Leicester LE9 7NE, Reino Unido',
    pos: [
      52.57524,
      -1.32037
    ],
    city: 30,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 49,
    name: 'Libreria antiquaria Pregliasco',
    address: 'Via Accademia Albertina, 3 bis, 10123 Torino TO, Italia',
    pos: [
      45.0673,
      7.6899
    ],
    city: 58,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 50,
    name: '36 College',
    address: 'Via Faleria, 4, 63100 Ascoli Piceno AP, Italia',
    pos: [
      42.8511,
      13.59647
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 51,
    name: 'Martinus-Bibliothek',
    address: 'Grebenstraße 8, 55116 Mainz, Alemania',
    pos: [
      49.99781,
      8.27431
    ],
    city: 37,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 52,
    name: 'Museum Plantin-Moretus',
    address: 'Vrijdagmarkt 22-23, 2000 Antwerpen, Bélgica',
    pos: [
      51.21862,
      4.39809
    ],
    city: 0,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 53,
    name: 'Národní Knihovna Ceské Republiky',
    address: 'Klementinum 190, 110 00 Josefov, Chequia',
    pos: [
      40.4855,
      -86.20346
    ],
    city: 51,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 54,
    name: 'Northwestern University Library',
    address: '1970 Campus Dr, Evanston, IL 60201, Estados Unidos',
    pos: [
      42.05331,
      -87.67391
    ],
    city: 24,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 55,
    name: 'Österreichische Nationalbibliothek',
    address: 'Josefsplatz 1, 1015 Wien, Austria',
    pos: [
      48.20599,
      16.3673
    ],
    city: 63,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 56,
    name: 'Real Biblioteca del Monasterio de San Lorenzo',
    address: 'Av Juan de Borbón y Battemberg, s/n, 28200 San Lorenzo de El Escorial, Madrid, España',
    pos: [
      40.59037,
      -4.1475
    ],
    city: 21,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 57,
    name: 'Sächsische Landesbibliothek – Staats- und Universitätsbibliothek',
    address: 'Zellescher Weg 18, 01069 Dresden, Alemania',
    pos: [
      51.02867,
      13.73687
    ],
    city: 18,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 58,
    name: 'Staats- und Stadtbibliothek',
    address: 'Schaezlerstraße 25, 86152 Augsburg, Alemania',
    pos: [
      48.36952,
      10.89057
    ],
    city: 2,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 59,
    name: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz',
    address: 'Potsdamer Straße 33, 10785 Berlin, Alemania',
    pos: [
      52.50826,
      13.37141
    ],
    city: 1,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 60,
    name: 'Stadtbibliothek',
    address: 'Weberbach 25, 54290 Trier, Alemania',
    pos: [
      49.75156,
      6.64125
    ],
    city: 59,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 61,
    name: 'Stiftsbibliothek',
    address: 'Schlägl 1, 4160 Schlägl, Austria',
    pos: [
      48.63649,
      13.96777
    ],
    city: 56,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 62,
    name: 'Universitätsbibliothek (Landes- und Stadtbibliothek)',
    address: '40225 Düsseldorf, Alemania',
    pos: [
      51.20263,
      6.78056
    ],
    city: 19,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 63,
    name: 'Universiteitsbibliotheek',
    address: 'Witte Singel 27, 2311 BG Leiden, Países Bajos',
    pos: [
      52.15731,
      4.48145
    ],
    city: 34,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 64,
    name: 'Universitetsbibliotek',
    address: 'Västra Hamngatan 25, Pedagogen hus A, 411 17 Göteborg, Suecia',
    pos: [
      57.70351,
      11.96391
    ],
    city: 27,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 65,
    name: 'University Library',
    address: 'One Washington Road, Princeton, NJ 08544, Estados Unidos',
    pos: [
      40.33982,
      -74.64843
    ],
    city: 52,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 66,
    name: 'University Library (Wollaton Library Collection)',
    address: 'Bramcote La, Nottingham NG8 2NA, Reino Unido',
    pos: [
      52.94841,
      -1.2286
    ],
    city: 42,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 67,
    name: 'University of Oregon, Knight Library',
    address: '1501 Kincaid St, Eugene, OR 97403, Estados Unidos',
    pos: [
      44.04381,
      -123.07857
    ],
    city: 23,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 68,
    name: 'Walters Art Museum',
    address: '600 N Charles St, Baltimore, MD 21201, Estados Unidos',
    pos: [
      39.29656,
      -76.61601
    ],
    city: 3,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 69,
    name: 'Wissenschaftliche Allgemeinbibliothek',
    address: 'Dompl. 1, 99084 Erfurt, Alemania',
    pos: [
      50.97374,
      11.02243
    ],
    city: 20,
    start: 800,
    end: 2020
  },
  {
    type: 'library',
    id: 70,
    name: 'Württembergische Landesbibliothek',
    address: 'Konrad-Adenauer-Straße 8, 70173 Stuttgart, Alemania',
    pos: [
      48.77722,
      9.18533
    ],
    city: 57,
    start: 800,
    end: 2020
  }
];


const manuscrit = [
  {
    anderson_id: 3,
    ms_name: '3_ANTWERPEN',
    library: 53,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 6,
    ms_name: '6_ANTWERPEN',
    library: 53,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 10,
    ms_name: '10_ASCOLIPICENO',
    library: 8,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 15,
    ms_name: '15_3',
    library: 59,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 18,
    ms_name: '18_BALTIMORE',
    library: 69,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 24,
    ms_name: '24_5',
    library: 7,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 35,
    ms_name: '35_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 36,
    ms_name: '36_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 37,
    ms_name: '37_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 44,
    ms_name: '44_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 47,
    ms_name: '47_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 48,
    ms_name: '48_6',
    library: 60,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 54,
    ms_name: '54_7',
    library: 39,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 59,
    ms_name: '59_7',
    library: 39,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 64,
    ms_name: '64_8',
    library: 23,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 66,
    ms_name: '66_8',
    library: 23,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 68,
    ms_name: '68_9',
    library: 31,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 70,
    ms_name: '70_9',
    library: 34,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 77,
    ms_name: '77_9',
    library: 34,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 78,
    ms_name: '78_BRYNMAWR',
    library: 38,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 87,
    ms_name: '87_11',
    library: 66,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 88,
    ms_name: '88_11',
    library: 66,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 92,
    ms_name: '92_12',
    library: 35,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 93,
    ms_name: '93_13',
    library: 14,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 100,
    ms_name: '100_CHICAGO',
    library: 66,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 101,
    ms_name: '101_15',
    library: 32,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 102,
    ms_name: '102_16',
    library: 29,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 105,
    ms_name: '105_17',
    library: 45,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 108,
    ms_name: '108_18',
    library: 32,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 113,
    ms_name: '113_19',
    library: 58,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 121,
    ms_name: '121_DUESSELDORF',
    library: 63,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 122,
    ms_name: '122_DUESSELDORF',
    library: 63,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 126,
    ms_name: '126_21',
    library: 70,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 127,
    ms_name: '127_21',
    library: 70,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 130,
    ms_name: '130_ESCORIAL',
    library: 57,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 134,
    ms_name: '134_23',
    library: 42,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 135,
    ms_name: '135_EUGENE',
    library: 68,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 136,
    ms_name: '136_EVANSTON',
    library: 55,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 139,
    ms_name: '139_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 141,
    ms_name: '141_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 147,
    ms_name: '147_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 150,
    ms_name: '150_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 151,
    ms_name: '151_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 152,
    ms_name: '152_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 158,
    ms_name: '158_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 159,
    ms_name: '159_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 160,
    ms_name: '160_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 161,
    ms_name: '161_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 162,
    ms_name: '162_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 164,
    ms_name: '164_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 167,
    ms_name: '167_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 169,
    ms_name: '169_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 170,
    ms_name: '170_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 172,
    ms_name: '172_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 173,
    ms_name: '173_26',
    library: 15,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 176,
    ms_name: '176_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 179,
    ms_name: '179_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 180,
    ms_name: '180_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 181,
    ms_name: '181_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 183,
    ms_name: '183_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 184,
    ms_name: '184_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 185,
    ms_name: '185_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 186,
    ms_name: '186_26',
    library: 18,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 191,
    ms_name: '191_26',
    library: 22,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 197,
    ms_name: '197_26',
    library: 22,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 198,
    ms_name: '198_26',
    library: 22,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 202,
    ms_name: '202_27',
    library: 12,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 203,
    ms_name: '203_27',
    library: 23,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 204,
    ms_name: '204_GOETEBORG',
    library: 65,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 209,
    ms_name: '209_GRAVENHAGE',
    library: 46,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 210,
    ms_name: '210_GRAVENHAGE',
    library: 46,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 220,
    ms_name: '220_30',
    library: 43,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 222,
    ms_name: '222_HOLKHAMHALL',
    library: 49,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 223,
    ms_name: '223_HOLKHAMHALL',
    library: 49,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 225,
    ms_name: '225_32',
    library: 2,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 235,
    ms_name: '235_33',
    library: 30,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 236,
    ms_name: '236_KRAKOW',
    library: 25,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 237,
    ms_name: '237_KRAKOW',
    library: 25,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 238,
    ms_name: '238_KRAKOW',
    library: 25,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 239,
    ms_name: '239_KRAKOW',
    library: 26,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 241,
    ms_name: '241_35',
    library: 64,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 246,
    ms_name: '246_35',
    library: 64,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 256,
    ms_name: '256_35',
    library: 64,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 259,
    ms_name: '259_35',
    library: 64,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 265,
    ms_name: '265_35',
    library: 64,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 273,
    ms_name: '273_36',
    library: 40,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 282,
    ms_name: '282_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 283,
    ms_name: '283_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 284,
    ms_name: '284_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 285,
    ms_name: '285_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 286,
    ms_name: '286_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 287,
    ms_name: '287_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 288,
    ms_name: '288_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 289,
    ms_name: '289_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 290,
    ms_name: '290_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 292,
    ms_name: '292_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 293,
    ms_name: '293_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 296,
    ms_name: '296_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 304,
    ms_name: '304_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 311,
    ms_name: '311_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 318,
    ms_name: '318_37',
    library: 37,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 334,
    ms_name: '334_38',
    library: 52,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 336,
    ms_name: '336_39',
    library: 1,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 338,
    ms_name: '338_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 341,
    ms_name: '341_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 342,
    ms_name: '342_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 343,
    ms_name: '343_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 346,
    ms_name: '346_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 347,
    ms_name: '347_39',
    library: 4,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 348,
    ms_name: '348_39',
    library: 17,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 350,
    ms_name: '350_40',
    library: 13,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 354,
    ms_name: '354_40',
    library: 13,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 362,
    ms_name: '362_41',
    library: 3,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 369,
    ms_name: '369_41',
    library: 3,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 374,
    ms_name: '374_41',
    library: 3,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 382,
    ms_name: '382_42',
    library: 16,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 387,
    ms_name: '387_42',
    library: 16,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 388,
    ms_name: '388_42',
    library: 16,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 393,
    ms_name: '393_42',
    library: 16,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 402,
    ms_name: '402_43',
    library: 67,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 403,
    ms_name: '403_44',
    library: 47,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 410,
    ms_name: '410_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 411,
    ms_name: '411_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 413,
    ms_name: '413_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 418,
    ms_name: '418_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 420,
    ms_name: '420_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 426,
    ms_name: '426_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 432,
    ms_name: '432_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 433,
    ms_name: '433_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 435,
    ms_name: '435_45',
    library: 36,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 437,
    ms_name: '437_45',
    library: 41,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 438,
    ms_name: '438_45',
    library: 51,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 445,
    ms_name: '445_46',
    library: 23,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 447,
    ms_name: '447_PALMADEMALLORCA',
    library: 21,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 467,
    ms_name: '467_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 468,
    ms_name: '468_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 469,
    ms_name: '469_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 479,
    ms_name: '479_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 483,
    ms_name: '483_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 484,
    ms_name: '484_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 485,
    ms_name: '485_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 486,
    ms_name: '486_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 491,
    ms_name: '491_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 493,
    ms_name: '493_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 494,
    ms_name: '494_48',
    library: 33,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 509,
    ms_name: '509_49',
    library: 20,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 511,
    ms_name: '511_49',
    library: 20,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 516,
    ms_name: '516_50',
    library: 9,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 517,
    ms_name: '517_50',
    library: 9,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 525,
    ms_name: '525_51',
    library: 10,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 529,
    ms_name: '529_52',
    library: 54,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 530,
    ms_name: '530_52',
    library: 54,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 532,
    ms_name: '532_52',
    library: 54,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 536,
    ms_name: '536_PRINC23',
    library: 66,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 537,
    ms_name: '537_PRINC23',
    library: 66,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 545,
    ms_name: '545_54',
    library: 5,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 546,
    ms_name: '546_54',
    library: 5,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 547,
    ms_name: '547_54',
    library: 5,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 548,
    ms_name: '548_54',
    library: 5,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 549,
    ms_name: '549_54',
    library: 24,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 552,
    ms_name: '552_54',
    library: 24,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 555,
    ms_name: '555_55',
    library: 23,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 558,
    ms_name: '558_SANKTFLORIAN',
    library: 62,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 559,
    ms_name: '559_SANKTFLORIAN',
    library: 62,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 999,
    ms_name: '999_SCHLAEGL',
    library: 62,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 575,
    ms_name: '575_58',
    library: 71,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 576,
    ms_name: '576_58',
    library: 71,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 578,
    ms_name: '578_59',
    library: 50,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 582,
    ms_name: '582_60',
    library: 61,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 592,
    ms_name: '592_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 593,
    ms_name: '593_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 594,
    ms_name: '594_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 595,
    ms_name: '595_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 598,
    ms_name: '598_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 604,
    ms_name: '604_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 606,
    ms_name: '606_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 608,
    ms_name: '608_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 611,
    ms_name: '611_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 614,
    ms_name: '614_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 615,
    ms_name: '615_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 616,
    ms_name: '616_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 617,
    ms_name: '617_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 621,
    ms_name: '621_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 622,
    ms_name: '622_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 623,
    ms_name: '623_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 625,
    ms_name: '625_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 633,
    ms_name: '633_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 635,
    ms_name: '635_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 637,
    ms_name: '637_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 643,
    ms_name: '643_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 649,
    ms_name: '649_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 650,
    ms_name: '650_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 652,
    ms_name: '652_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 656,
    ms_name: '656_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 661,
    ms_name: '661_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 667,
    ms_name: '667_VATICANO',
    library: 6,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 684,
    ms_name: '684_62',
    library: 11,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 670,
    ms_name: '670_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 671,
    ms_name: '671_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 673,
    ms_name: '673_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 676,
    ms_name: '676_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 677,
    ms_name: '677_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 679,
    ms_name: '679_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 681,
    ms_name: '681_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 683,
    ms_name: '683_62',
    library: 19,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 686,
    ms_name: '686_63',
    library: 27,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 687,
    ms_name: '687_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 690,
    ms_name: '690_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 693,
    ms_name: '693_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 694,
    ms_name: '694_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 696,
    ms_name: '696_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 697,
    ms_name: '697_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 701,
    ms_name: '701_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 704,
    ms_name: '704_64',
    library: 56,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 705,
    ms_name: '705_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 708,
    ms_name: '708_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 709,
    ms_name: '709_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 710,
    ms_name: '710_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 712,
    ms_name: '712_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 713,
    ms_name: '713_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 714,
    ms_name: '714_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 715,
    ms_name: '715_WOLFENBUETTEL',
    library: 44,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 718,
    ms_name: '718_66',
    library: 40,
    description: 'not description',
    photo: null
  },
  {
    anderson_id: 720,
    ms_name: '720_67',
    library: 28,
    description: 'not description',
    photo: null
  }
];


app.get('/', (req, res) => {
  const gg = manuscrit.map((value) => {
    value.manuscrit = [{
      current: true, library: value.library - 1, libraryName: owner[value.library - 1].name
    }];

    value.library = undefined;
    return value;
  });

  res.send(gg);
});


app.listen(port, () => console.log('Example app listening on port port!'));
