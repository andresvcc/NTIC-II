const cities = [
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

export default cities;
