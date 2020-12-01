const cities = [{
  name: 'Antwerpen',
  id: 0,
  type: 'city',
  country: 17,
  country_name: 'Belgium',
  start: null,
  end: 2020,
  pos: [51.219448, 4.402464]
}, {
  name: 'Ascoli Piceno',
  id: 1,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [42.8554, 13.57498],
  altnames: ['Ascoli']
}, {
  name: 'Augsburg',
  id: 2,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [48.370544, 10.89779]
}, {
  name: 'Baltimore MD',
  id: 3,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [39.290386, -76.61219]
}, {
  name: 'Bergamo',
  id: 4,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [45.698265, 9.67727]
}, {
  name: 'Berlin',
  id: 5,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [52.520008, 13.404954]
}, {
  name: 'Bern',
  id: 6,
  type: 'city',
  country: 135,
  country_name: 'Switzerland',
  start: null,
  end: 2020,
  pos: [46.947975, 7.447447]
}, {
  name: 'Bologna',
  id: 7,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [44.494888, 11.342616]
}, {
  name: 'Bruxelles',
  id: 8,
  type: 'city',
  country: 17,
  country_name: 'Belgium',
  start: null,
  end: 2020,
  pos: [50.850346, 4.351721]
}, {
  name: 'Bryn Mawr PA',
  id: 9,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [40.023026, -75.315178],
  altnames: ['Bryn Mawr, PA,']
}, {
  name: 'Cambridge',
  id: 10,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [52.205338, 0.121817]
}, {
  name: 'Carpentras',
  id: 11,
  type: 'city',
  country: 46,
  country_name: 'France',
  start: null,
  end: 2020,
  pos: [44.052368, 5.04732]
}, {
  name: 'Cesena',
  id: 12,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [44.13876, 12.23912]
}, {
  name: 'Chicago IL',
  id: 13,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [41.878113, -87.629799]
}, {
  name: 'Colmar',
  id: 14,
  type: 'city',
  country: 46,
  country_name: 'France',
  start: null,
  end: 2020,
  pos: [48.08062, 7.35995]
}, {
  name: 'Cologny',
  id: 15,
  type: 'city',
  country: 135,
  country_name: 'Switzerland',
  start: null,
  end: 2020,
  pos: [46.215851, 6.18089]
}, {
  name: 'Darmstadt',
  id: 16,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [49.872826, 8.651193]
}, {
  name: 'Dijon',
  id: 17,
  type: 'city',
  country: 46,
  country_name: 'France',
  start: null,
  end: 2020,
  pos: [47.327209, 5.04404]
}, {
  name: 'Dresden',
  id: 18,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [51.050407, 13.737262]
}, {
  name: 'Düsseldorf',
  id: 19,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [51.227741, 6.773456]
}, {
  name: 'Erfurt',
  id: 20,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [50.984768, 11.02988]
}, {
  name: 'El Escorial',
  id: 21,
  type: 'city',
  country: 129,
  country_name: 'Spain',
  start: null,
  end: 2020,
  pos: [40.585079, -4.12952]
}, {
  name: 'Eton',
  id: 22,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [34.824162, -84.761726]
}, {
  name: 'Eugene OR',
  id: 23,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [44.052071, -123.086754]
}, {
  name: 'Evanston IL',
  id: 24,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [42.052158, -87.687866]
}, {
  name: 'Firenze',
  id: 25,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [43.769562, 11.255814],
  altnames: ['Florence']
}, {
  name: 'Genova',
  id: 26,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [44.407059, 8.93399]
}, {
  name: 'Göteborg',
  id: 27,
  type: 'city',
  country: 134,
  country_name: 'Sweden',
  start: null,
  end: 2020,
  pos: [57.70887, 11.97456]
}, {
  name: 'Gravenhage',
  id: 28,
  type: 'city',
  country: 98,
  country_name: 'Netherlands',
  start: null,
  end: 2020,
  pos: [52.080189, 4.31013]
}, {
  name: 'Helsinki',
  id: 29,
  type: 'city',
  country: 45,
  country_name: 'Finland',
  start: null,
  end: 2020,
  pos: [60.169857, 24.938379]
}, {
  name: 'Holkham Hall',
  id: 30,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [52.43199, 0.78141]
}, {
  name: 'Karlsruhe',
  id: 31,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [49.006889, 8.403653]
}, {
  name: 'Konstanz',
  id: 32,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [47.661942, 9.17243]
}, {
  name: 'Kraków',
  id: 33,
  type: 'city',
  country: 112,
  country_name: 'Poland',
  start: null,
  end: 2020,
  pos: [50.064651, 19.944981]
}, {
  name: 'Leiden',
  id: 34,
  type: 'city',
  country: 98,
  country_name: 'Netherlands',
  start: null,
  end: 2020,
  pos: [52.160114, 4.49701]
}, {
  name: 'Lincoln',
  id: 35,
  type: 'city',
  country: 153,
  country_name: 'England',
  start: null,
  end: 2020,
  pos: [37.346134, -95.262955]
}, {
  name: 'London',
  id: 36,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [51.507351, -0.127758]
}, {
  name: 'Mainz',
  id: 37,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [49.992863, 8.247253]
}, {
  name: 'Milano',
  id: 38,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [39.08252, -94.582306],
  altnames: ['Milan']
}, {
  name: 'Modena',
  id: 39,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [44.647129, 10.925227]
}, {
  name: 'München',
  id: 40,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [48.135124, 11.581981]
}, {
  name: 'Napoli',
  id: 41,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [40.839981, 14.25254],
  altnames: ['Naples']
}, {
  name: 'Nottingham',
  id: 42,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [52.954784, -1.158109]
}, {
  name: 'Oldenburg',
  id: 43,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [53.136719, 8.21654]
}, {
  name: 'Oxford',
  id: 44,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [51.752022, -1.257726]
}, {
  name: 'Padova',
  id: 45,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [45.406433, 11.876761]
}, {
  name: 'Palma de Mallorca',
  id: 46,
  type: 'city',
  country: 129,
  country_name: 'Spain',
  start: null,
  end: 2020,
  pos: [38.924549, -0.22069],
  altnames: ['Palma da Mallorca']
}, {
  name: 'Paris',
  id: 47,
  type: 'city',
  country: 46,
  country_name: 'France',
  start: null,
  end: 2020,
  pos: [48.856613, 2.352222]
}, {
  name: 'Parma',
  id: 48,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [44.801483, 10.327904]
}, {
  name: 'Perugia',
  id: 49,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [43.110718, 12.390828]
}, {
  name: 'Poppi',
  id: 50,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [43.732769, 11.76403]
}, {
  name: 'Praha',
  id: 51,
  type: 'city',
  country: 37,
  country_name: 'Czech Republic',
  start: null,
  end: 2020,
  pos: [50.075539, 14.4378],
  altnames: ['Prague']
}, {
  name: 'Princeton NJ',
  id: 52,
  type: 'city',
  country: 146,
  country_name: 'US',
  start: null,
  end: 2020,
  pos: [40.351978, -74.660744],
  altnames: ['Princeton']
}, {
  name: 'Roma',
  id: 53,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [41.902782, 12.496365],
  altnames: ['Rome']
}, {
  name: 'Salamanca',
  id: 54,
  type: 'city',
  country: 129,
  country_name: 'Spain',
  start: null,
  end: 2020,
  pos: [40.970104, -5.66354]
}, {
  name: 'Sankt Florian',
  id: 55,
  type: 'city',
  country: 10,
  country_name: 'Austria',
  start: null,
  end: 2020,
  pos: [48.20566, 14.37955]
}, {
  name: 'Schlägl',
  id: 56,
  type: 'city',
  country: 10,
  country_name: 'Austria',
  start: null,
  end: 2020,
  pos: [48.64626, 13.97121]
}, {
  name: 'Stuttgart',
  id: 57,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [48.775845, 9.182932]
}, {
  name: 'Torino',
  id: 58,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [45.068371, 7.68307],
  altnames: ['Turin']
}, {
  name: 'Trier',
  id: 59,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [49.749992, 6.637143]
}, {
  name: 'Città del Vaticano',
  id: 60,
  type: 'city',
  country: 152,
  country_name: 'Vaticano',
  start: null,
  end: 2020,
  pos: [41.902229, 12.4581],
  altnames: ['Vaticano', 'Vaticano, Città del']
}, {
  name: 'Venezia',
  id: 61,
  type: 'city',
  country: 71,
  country_name: 'Italy',
  start: null,
  end: 2020,
  pos: [45.434341, 12.33878],
  altnames: ['Italy Venice', 'Venice', 'Venetiarum']
}, {
  name: 'Warsawa',
  id: 62,
  type: 'city',
  country: 112,
  country_name: 'Poland',
  start: null,
  end: 2020,
  pos: [52.234982, 21.00849],
  altnames: ['Warszawa']
}, {
  name: 'Wien',
  id: 63,
  type: 'city',
  country: 10,
  country_name: 'Austria',
  start: null,
  end: 2020,
  pos: [48.208176, 16.373819]
}, {
  name: 'Wolfenbüttel',
  id: 64,
  type: 'city',
  country: 50,
  country_name: 'Germany',
  start: null,
  end: 2020,
  pos: [52.16404, 10.540848]
}, {
  name: 'Worcester',
  id: 65,
  type: 'city',
  country: 145,
  country_name: 'United Kingdom',
  start: null,
  end: 2020,
  pos: [42.262592, -71.802292]
}, {
  name: 'Wroclaw',
  id: 66,
  type: 'city',
  country: 112,
  country_name: 'Poland',
  start: null,
  end: 2020,
  pos: [51.107883, 17.038538]
}, {
  name: 'Liège',
  id: 67,
  type: 'city',
  country_name: 'Belgium',
  country: 2,
  pos: [50.6451381, 5.5734203]
}, {
  name: 'Fleury-sur-Loire',
  id: 69,
  type: 'city',
  country_name: 'France',
  country: 46,
  pos: [46.8361641, 3.3199963]
}, {
  name: 'Gembloux',
  id: 73,
  type: 'city',
  country_name: 'Belgium',
  country: 2,
  pos: [50.5597273, 4.6943126]
}, {
  name: 'Pisa',
  id: 74,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [43.7159395, 10.4018624]
}, {
  name: 'Leipzig',
  id: 75,
  type: 'city',
  country_name: 'Germany',
  country: 50,
  pos: [51.3406321, 12.3747329]
}, {
  name: 'Mediolanensis',
  id: 76,
  type: 'city',
  country_name: 'Italy',
  country: 71
}, {
  name: 'Southwestern Germany',
  id: 77,
  type: 'city',
  country_name: 'Germany',
  country: 50
}, {
  name: 'Lucelle',
  id: 78,
  type: 'city',
  country_name: 'France',
  country: 46,
  pos: [47.4215055, 7.2465475]
},
// 79 effacé a cause des fautes logiques
{
  name: 'Abruzzi',
  id: 80,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [42.333137, 13.777]
}, {
  name: 'Evanston, IL',
  id: 82,
  type: 'city',
  country_name: 'US',
  country: 146,
  pos: [42.0447388, -87.6930459]
}, {
  name: 'Italy Seuis',
  id: 83,
  type: 'Region',
  country_name: 'Italy',
  country: 71
}, {
  name: 'Briscia',
  id: 84,
  type: 'city',
  country_name: 'Italy',
  country: 71
}, {
  name: 'Foro Iulii',
  id: 85,
  type: 'city',
  country_name: 'Italy',
  country: 71
}, {
  name: 'Bononia',
  id: 86,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [44.4936714, 11.3430347]
}, {
  name: 'Civitate castelli',
  id: 87,
  type: 'city',
  country_name: 'Italy',
  country: 71
}, {
  name: 'Cortona',
  id: 88,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [43.2752976, 11.9850623]
}, {
  name: 'Montepulciano',
  id: 89,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  altnames: ['Montis Politani'],
  pos: [43.0927229, 11.780972]
}, {
  name: 'Arezzo',
  id: 90,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [43.4628957, 11.8781675]
}, {
  name: 'Valencia',
  id: 91,
  type: 'city',
  country_name: 'Spain',
  country: 129,
  pos: [39.4699014, -0.3759513]
}, {
  name: 'Basel',
  id: 92,
  type: 'city',
  country_name: 'Switzerland',
  country: 135,
  pos: [47.5581077, 7.5878261]
}, {
  name: 'Juniwladislavia',
  id: 93,
  type: 'city',
  country_name: 'Poland',
  country: 112
}, {
  name: 'Krakow',
  id: 94,
  type: 'city',
  country_name: 'Poland',
  country: 112,
  pos: [50.0619474, 19.9368564]
}, {
  name: 'Germany',
  id: 95,
  type: 'Region',
  country_name: 'Germany',
  country: 50,
  pos: [54.9064856, 8.3071734]
}, {
  name: 'Pordenone',
  id: 96,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [45.9562503, 12.6597197]
}, {
  name: 'Eastern France',
  id: 97,
  type: 'Region',
  country_name: 'France',
  country: 46
}, {
  name: 'Metz',
  id: 98,
  type: 'city',
  country_name: 'France',
  country: 46,
  pos: [49.1196964, 6.1763552]
}, {
  name: 'Fünfkirchen',
  id: 99,
  type: 'city',
  country_name: 'Germany',
  country: 50
}, {
  name: 'Northern France',
  id: 100,
  type: 'city',
  country_name: 'France',
  country: 46
}, {
  name: 'Le Mans',
  id: 101,
  type: 'city',
  country_name: 'France',
  country: 46,
  pos: [48.0073498, 0.1967379]
}, {
  name: 'Pavia',
  id: 102,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [45.1860043, 9.1546375]
}, {
  name: 'Este',
  id: 103,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [45.2240069, 11.659796]
}, {
  name: 'Regensburg',
  id: 104,
  type: 'city',
  country_name: 'Germany',
  country: 50,
  pos: [49.0195333, 12.0974869]
},
// id: 105, 106 anules a cause des fautes logiques
{
  name: 'Madrid',
  id: 107,
  type: 'city',
  country_name: 'Spain',
  country: 129,
  pos: [40.4167047, -3.7035825]
}, {
  name: 'Bamberg',
  id: 108,
  type: 'city',
  country_name: 'Germany',
  country: 50,
  pos: [49.8916044, 10.8868478]
}, {
  name: 'Camaldoli',
  id: 109,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [43.7943293, 11.8199481]
}, {
  name: 'Komburg',
  id: 110,
  type: 'city',
  country_name: 'Germany',
  country: 50
}, {
  name: 'Assisi',
  id: 111,
  type: 'city',
  country_name: 'Italy',
  country: 71,
  pos: [43.0711952, 12.6146669]
}, {
  name: 'Salzburg',
  id: 113,
  type: 'city',
  country_name: 'Austria',
  country: 10,
  pos: [47.7981346, 13.0464806]
}, {
  name: 'Lakeland',
  id: 115,
  type: 'city',
  country_name: 'US',
  country: 146,
  pos: [28.0394654, -81.9498042]
}];

module.exports = { cities };
