import owner from './owner';

const manuscrits = [
  {
    anderson_id: 3,
    ms_name: '3_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 52,
        libraryName: 'Museum Plantin-Moretus'
      },
    ]
  },
  {
    anderson_id: 6,
    ms_name: '6_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 52,
        libraryName: 'Museum Plantin-Moretus'
      }
    ]
  },
  {
    anderson_id: 10,
    ms_name: '10_ASCOLIPICENO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 7,
        libraryName: 'Biblioteca Comunale "Giulio Gabrielli"'
      }
    ]
  },
  {
    anderson_id: 15,
    ms_name: '15_3',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 58,
        libraryName: 'Staats- und Stadtbibliothek'
      }
    ]
  },
  {
    anderson_id: 18,
    ms_name: '18_BALTIMORE',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 68,
        libraryName: 'Walters Art Museum'
      }
    ]
  },
  {
    anderson_id: 24,
    ms_name: '24_5',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 6,
        libraryName: 'Biblioteca Civica "Angelo Mai"'
      }
    ]
  },
  {
    anderson_id: 35,
    ms_name: '35_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 36,
    ms_name: '36_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 37,
    ms_name: '37_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 44,
    ms_name: '44_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 47,
    ms_name: '47_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 48,
    ms_name: '48_6',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 59,
        libraryName: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz'
      }
    ]
  },
  {
    anderson_id: 54,
    ms_name: '54_7',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 38,
        libraryName: 'Burgerbibliothek'
      }
    ]
  },
  {
    anderson_id: 59,
    ms_name: '59_7',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 38,
        libraryName: 'Burgerbibliothek'
      }
    ]
  },
  {
    anderson_id: 64,
    ms_name: '64_8',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 22,
        libraryName: 'Biblioteca Universitaria'
      }
    ]
  },
  {
    anderson_id: 66,
    ms_name: '66_8',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 22,
        libraryName: 'Biblioteca Universitaria'
      }
    ]
  },
  {
    anderson_id: 68,
    ms_name: '68_9',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 30,
        libraryName: 'Bibliothèque de l’Université libre'
      }
    ]
  },
  {
    anderson_id: 70,
    ms_name: '70_9',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 33,
        libraryName: 'Bibliothèque Royale de Belgique'
      }
    ]
  },
  {
    anderson_id: 77,
    ms_name: '77_9',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 33,
        libraryName: 'Bibliothèque Royale de Belgique'
      }
    ]
  },
  {
    anderson_id: 78,
    ms_name: '78_BRYNMAWR',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 37,
        libraryName: 'Bryn Mawr College, Canaday Library'
      }
    ]
  },
  {
    anderson_id: 87,
    ms_name: '87_11',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 65,
        libraryName: 'University Library'
      }
    ]
  },
  {
    anderson_id: 88,
    ms_name: '88_11',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 65,
        libraryName: 'University Library'
      }
    ]
  },
  {
    anderson_id: 92,
    ms_name: '92_12',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 34,
        libraryName: 'Bibliothèque-Musée Inguimbertine'
      }
    ]
  },
  {
    anderson_id: 93,
    ms_name: '93_13',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 13,
        libraryName: 'Biblioteca Malatestiana'
      }
    ]
  },
  {
    anderson_id: 100,
    ms_name: '100_CHICAGO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 65,
        libraryName: 'University Library'
      }
    ]
  },
  {
    anderson_id: 101,
    ms_name: '101_15',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 31,
        libraryName: 'Bibliothèque Municipale'
      }
    ]
  },
  {
    anderson_id: 102,
    ms_name: '102_16',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 28,
        libraryName: 'Bibliotheca Bodmeriana'
      }
    ]
  },
  {
    anderson_id: 105,
    ms_name: '105_17',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 44,
        libraryName: 'Hessische Landes- und Hochschulbibliothek'
      }
    ]
  },
  {
    anderson_id: 108,
    ms_name: '108_18',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 31,
        libraryName: 'Bibliothèque Municipale'
      }
    ]
  },
  {
    anderson_id: 113,
    ms_name: '113_19',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 57,
        libraryName: 'Sächsische Landesbibliothek – Staats- und Universitätsbibliothek'
      }
    ]
  },
  {
    anderson_id: 121,
    ms_name: '121_DUESSELDORF',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 62,
        libraryName: 'Universitätsbibliothek (Landes- und Stadtbibliothek)'
      }
    ]
  },
  {
    anderson_id: 122,
    ms_name: '122_DUESSELDORF',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 62,
        libraryName: 'Universitätsbibliothek (Landes- und Stadtbibliothek)'
      }
    ]
  },
  {
    anderson_id: 126,
    ms_name: '126_21',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 69,
        libraryName: 'Wissenschaftliche Allgemeinbibliothek'
      }
    ]
  },
  {
    anderson_id: 127,
    ms_name: '127_21',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 69,
        libraryName: 'Wissenschaftliche Allgemeinbibliothek'
      }
    ]
  },
  {
    anderson_id: 130,
    ms_name: '130_ESCORIAL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 56,
        libraryName: 'Real Biblioteca del Monasterio de San Lorenzo'
      }
    ]
  },
  {
    anderson_id: 134,
    ms_name: '134_23',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 41,
        libraryName: 'College Library'
      }
    ]
  },
  {
    anderson_id: 135,
    ms_name: '135_EUGENE',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 67,
        libraryName: 'University of Oregon, Knight Library'
      }
    ]
  },
  {
    anderson_id: 136,
    ms_name: '136_EVANSTON',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 54,
        libraryName: 'Northwestern University Library'
      }
    ]
  },
  {
    anderson_id: 139,
    ms_name: '139_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 141,
    ms_name: '141_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 147,
    ms_name: '147_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 150,
    ms_name: '150_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 151,
    ms_name: '151_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 152,
    ms_name: '152_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 158,
    ms_name: '158_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 159,
    ms_name: '159_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 160,
    ms_name: '160_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 161,
    ms_name: '161_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 162,
    ms_name: '162_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 164,
    ms_name: '164_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 167,
    ms_name: '167_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 169,
    ms_name: '169_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 170,
    ms_name: '170_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 172,
    ms_name: '172_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 173,
    ms_name: '173_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 14,
        libraryName: 'Biblioteca Medicea Laurenziana'
      }
    ]
  },
  {
    anderson_id: 176,
    ms_name: '176_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 179,
    ms_name: '179_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 180,
    ms_name: '180_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 181,
    ms_name: '181_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 183,
    ms_name: '183_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 184,
    ms_name: '184_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 185,
    ms_name: '185_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 186,
    ms_name: '186_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 17,
        libraryName: 'Biblioteca Nazionale Centrale'
      }
    ]
  },
  {
    anderson_id: 191,
    ms_name: '191_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 21,
        libraryName: 'Biblioteca Riccardiana'
      }
    ]
  },
  {
    anderson_id: 197,
    ms_name: '197_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 21,
        libraryName: 'Biblioteca Riccardiana'
      }
    ]
  },
  {
    anderson_id: 198,
    ms_name: '198_26',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 21,
        libraryName: 'Biblioteca Riccardiana'
      }
    ]
  },
  {
    anderson_id: 202,
    ms_name: '202_27',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 11,
        libraryName: 'Biblioteca Durazzo Giustiniani'
      }
    ]
  },
  {
    anderson_id: 203,
    ms_name: '203_27',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 22,
        libraryName: 'Biblioteca Universitaria'
      }
    ]
  },
  {
    anderson_id: 204,
    ms_name: '204_GOETEBORG',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 64,
        libraryName: 'Universitetsbibliotek'
      }
    ]
  },
  {
    anderson_id: 209,
    ms_name: '209_GRAVENHAGE',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 45,
        libraryName: 'Koninklijke Bibliotheek'
      }
    ]
  },
  {
    anderson_id: 210,
    ms_name: '210_GRAVENHAGE',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 45,
        libraryName: 'Koninklijke Bibliotheek'
      }
    ]
  },
  {
    anderson_id: 220,
    ms_name: '220_30',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 42,
        libraryName: 'University Library, National Library of Finland'
      }
    ]
  },
  {
    anderson_id: 222,
    ms_name: '222_HOLKHAMHALL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 48,
        libraryName: 'Library of the Earl of Leicester'
      }
    ]
  },
  {
    anderson_id: 223,
    ms_name: '223_HOLKHAMHALL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 48,
        libraryName: 'Library of the Earl of Leicester'
      }
    ]
  },
  {
    anderson_id: 225,
    ms_name: '225_32',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 1,
        libraryName: 'Badische Landesbibliothek'
      },
    ]
  },
  {
    anderson_id: 235,
    ms_name: '235_33',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 29,
        libraryName: 'Bibliothek des Heinrich-Suso-Gymnasium'
      },
    ]
  },
  {
    anderson_id: 236,
    ms_name: '236_KRAKOW',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 24,
        libraryName: 'Biblioteka Jagiellonska'
      }
    ]
  },
  {
    anderson_id: 237,
    ms_name: '237_KRAKOW',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 24,
        libraryName: 'Biblioteka Jagiellonska'
      }
    ]
  },
  {
    anderson_id: 238,
    ms_name: '238_KRAKOW',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 24,
        libraryName: 'Biblioteka Jagiellonska'
      }
    ]
  },
  {
    anderson_id: 239,
    ms_name: '239_KRAKOW',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 25,
        libraryName: 'Biblioteka Muzeum Narodowego w Krakowie'
      }
    ]
  },
  {
    anderson_id: 241,
    ms_name: '241_35',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 63,
        libraryName: 'Universiteitsbibliotheek'
      }
    ]
  },
  {
    anderson_id: 246,
    ms_name: '246_35',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 63,
        libraryName: 'Universiteitsbibliotheek'
      }
    ]
  },
  {
    anderson_id: 256,
    ms_name: '256_35',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 63,
        libraryName: 'Universiteitsbibliotheek'
      }
    ]
  },
  {
    anderson_id: 259,
    ms_name: '259_35',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 63,
        libraryName: 'Universiteitsbibliotheek'
      }
    ]
  },
  {
    anderson_id: 265,
    ms_name: '265_35',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 63,
        libraryName: 'Universiteitsbibliotheek'
      }
    ]
  },
  {
    anderson_id: 273,
    ms_name: '273_36',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 39,
        libraryName: 'Cathedral Library'
      }
    ]
  },
  {
    anderson_id: 282,
    ms_name: '282_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 283,
    ms_name: '283_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 284,
    ms_name: '284_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 285,
    ms_name: '285_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 286,
    ms_name: '286_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 287,
    ms_name: '287_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 288,
    ms_name: '288_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 289,
    ms_name: '289_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 290,
    ms_name: '290_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 292,
    ms_name: '292_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 293,
    ms_name: '293_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 296,
    ms_name: '296_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 304,
    ms_name: '304_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 311,
    ms_name: '311_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 318,
    ms_name: '318_37',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 36,
        libraryName: 'British Library'
      }
    ]
  },
  {
    anderson_id: 334,
    ms_name: '334_38',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 51,
        libraryName: 'Martinus-Bibliothek'
      }
    ]
  },
  {
    anderson_id: 336,
    ms_name: '336_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 0,
        libraryName: 'Archivio Storico Civico e Biblioteca Trivulziana'
      }
    ]
  },
  {
    anderson_id: 338,
    ms_name: '338_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 341,
    ms_name: '341_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 342,
    ms_name: '342_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 343,
    ms_name: '343_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 346,
    ms_name: '346_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 347,
    ms_name: '347_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 3,
        libraryName: 'Biblioteca Ambrosiana'
      }
    ]
  },
  {
    anderson_id: 348,
    ms_name: '348_39',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 16,
        libraryName: 'Biblioteca Nazionale Braidense'
      }
    ]
  },
  {
    anderson_id: 350,
    ms_name: '350_40',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 12,
        libraryName: 'Biblioteca Estense Universitaria'
      }
    ]
  },
  {
    anderson_id: 354,
    ms_name: '354_40',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 12,
        libraryName: 'Biblioteca Estense Universitaria'
      }
    ]
  },
  {
    anderson_id: 362,
    ms_name: '362_41',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 2,
        libraryName: 'Bayerische Staatsbibliothek'
      }
    ]
  },
  {
    anderson_id: 369,
    ms_name: '369_41',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 2,
        libraryName: 'Bayerische Staatsbibliothek'
      }
    ]
  },
  {
    anderson_id: 374,
    ms_name: '374_41',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 2,
        libraryName: 'Bayerische Staatsbibliothek'
      }
    ]
  },
  {
    anderson_id: 382,
    ms_name: '382_42',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 15,
        libraryName: 'Biblioteca Nazionale "Vittorio Emanuele III"'
      }
    ]
  },
  {
    anderson_id: 387,
    ms_name: '387_42',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 15,
        libraryName: 'Biblioteca Nazionale "Vittorio Emanuele III"'
      }
    ]
  },
  {
    anderson_id: 388,
    ms_name: '388_42',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 15,
        libraryName: 'Biblioteca Nazionale "Vittorio Emanuele III"'
      }
    ]
  },
  {
    anderson_id: 393,
    ms_name: '393_42',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 15,
        libraryName: 'Biblioteca Nazionale "Vittorio Emanuele III"'
      }
    ]
  },
  {
    anderson_id: 402,
    ms_name: '402_43',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 66,
        libraryName: 'University Library (Wollaton Library Collection)'
      }
    ]
  },
  {
    anderson_id: 403,
    ms_name: '403_44',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 46,
        libraryName: 'Landesbibliothek'
      }
    ]
  },
  {
    anderson_id: 410,
    ms_name: '410_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 411,
    ms_name: '411_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 413,
    ms_name: '413_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 418,
    ms_name: '418_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 420,
    ms_name: '420_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 426,
    ms_name: '426_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 432,
    ms_name: '432_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 433,
    ms_name: '433_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 435,
    ms_name: '435_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 35,
        libraryName: 'Bodleian Library'
      }
    ]
  },
  {
    anderson_id: 437,
    ms_name: '437_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 40,
        libraryName: 'Corpus Christi College, Parker Library'
      }
    ]
  },
  {
    anderson_id: 438,
    ms_name: '438_45',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 50,
        libraryName: '36 College'
      }
    ]
  },
  {
    anderson_id: 445,
    ms_name: '445_46',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 22,
        libraryName: 'Biblioteca Universitaria'
      }
    ]
  },
  {
    anderson_id: 447,
    ms_name: '447_PALMADEMALLORCA',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 20,
        libraryName: 'Biblioteca privada del Marqués de Campofranco'
      }
    ]
  },
  {
    anderson_id: 467,
    ms_name: '467_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 468,
    ms_name: '468_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 469,
    ms_name: '469_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 479,
    ms_name: '479_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 483,
    ms_name: '483_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 484,
    ms_name: '484_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 485,
    ms_name: '485_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 486,
    ms_name: '486_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 491,
    ms_name: '491_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 493,
    ms_name: '493_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 494,
    ms_name: '494_48',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 32,
        libraryName: 'Bibliothèque Nationale de France'
      }
    ]
  },
  {
    anderson_id: 509,
    ms_name: '509_49',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 19,
        libraryName: 'Biblioteca Palatina'
      }
    ]
  },
  {
    anderson_id: 511,
    ms_name: '511_49',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 19,
        libraryName: 'Biblioteca Palatina'
      }
    ]
  },
  {
    anderson_id: 516,
    ms_name: '516_50',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 8,
        libraryName: 'Biblioteca Comunale Augusta'
      }
    ]
  },
  {
    anderson_id: 517,
    ms_name: '517_50',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 8,
        libraryName: 'Biblioteca Comunale Augusta'
      }
    ]
  },
  {
    anderson_id: 525,
    ms_name: '525_51',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 9,
        libraryName: 'Biblioteca Comunale Rilliana'
      }
    ]
  },
  {
    anderson_id: 529,
    ms_name: '529_52',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 53,
        libraryName: 'Národní Knihovna Ceské Republiky'
      }
    ]
  },
  {
    anderson_id: 530,
    ms_name: '530_52',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 53,
        libraryName: 'Národní Knihovna Ceské Republiky'
      }
    ]
  },
  {
    anderson_id: 532,
    ms_name: '532_52',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 53,
        libraryName: 'Národní Knihovna Ceské Republiky'
      }
    ]
  },
  {
    anderson_id: 536,
    ms_name: '536_PRINC23',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 65,
        libraryName: 'University Library'
      }
    ]
  },
  {
    anderson_id: 537,
    ms_name: '537_PRINC23',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 65,
        libraryName: 'University Library'
      }
    ]
  },
  {
    anderson_id: 545,
    ms_name: '545_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 4,
        libraryName: 'Biblioteca Angelica'
      }
    ]
  },
  {
    anderson_id: 546,
    ms_name: '546_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 4,
        libraryName: 'Biblioteca Angelica'
      }
    ]
  },
  {
    anderson_id: 547,
    ms_name: '547_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 4,
        libraryName: 'Biblioteca Angelica'
      }
    ]
  },
  {
    anderson_id: 548,
    ms_name: '548_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 4,
        libraryName: 'Biblioteca Angelica'
      }
    ]
  },
  {
    anderson_id: 549,
    ms_name: '549_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 23,
        libraryName: 'Biblioteca Vallicelliana'
      }
    ]
  },
  {
    anderson_id: 552,
    ms_name: '552_54',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 23,
        libraryName: 'Biblioteca Vallicelliana'
      }
    ]
  },
  {
    anderson_id: 555,
    ms_name: '555_55',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 22,
        libraryName: 'Biblioteca Universitaria'
      }
    ]
  },
  {
    anderson_id: 558,
    ms_name: '558_SANKTFLORIAN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 61,
        libraryName: 'Stiftsbibliothek'
      }
    ]
  },
  {
    anderson_id: 559,
    ms_name: '559_SANKTFLORIAN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 61,
        libraryName: 'Stiftsbibliothek'
      }
    ]
  },
  {
    anderson_id: 999,
    ms_name: '999_SCHLAEGL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 61,
        libraryName: 'Stiftsbibliothek'
      }
    ]
  },
  {
    anderson_id: 575,
    ms_name: '575_58',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 70,
        libraryName: 'Württembergische Landesbibliothek'
      }
    ]
  },
  {
    anderson_id: 576,
    ms_name: '576_58',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 70,
        libraryName: 'Württembergische Landesbibliothek'
      }
    ]
  },
  {
    anderson_id: 578,
    ms_name: '578_59',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 49,
        libraryName: 'Libreria antiquaria Pregliasco'
      }
    ]
  },
  {
    anderson_id: 582,
    ms_name: '582_60',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 60,
        libraryName: 'Stadtbibliothek'
      }
    ]
  },
  {
    anderson_id: 592,
    ms_name: '592_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 593,
    ms_name: '593_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 594,
    ms_name: '594_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 595,
    ms_name: '595_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 598,
    ms_name: '598_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 604,
    ms_name: '604_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 606,
    ms_name: '606_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 608,
    ms_name: '608_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 611,
    ms_name: '611_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 614,
    ms_name: '614_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 615,
    ms_name: '615_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 616,
    ms_name: '616_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 617,
    ms_name: '617_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 621,
    ms_name: '621_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 622,
    ms_name: '622_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 623,
    ms_name: '623_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 625,
    ms_name: '625_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 633,
    ms_name: '633_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 635,
    ms_name: '635_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 637,
    ms_name: '637_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 643,
    ms_name: '643_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 649,
    ms_name: '649_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 650,
    ms_name: '650_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 652,
    ms_name: '652_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 656,
    ms_name: '656_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 661,
    ms_name: '661_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 667,
    ms_name: '667_VATICANO',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 5,
        libraryName: 'Biblioteca Apostolica Vaticana'
      }
    ]
  },
  {
    anderson_id: 684,
    ms_name: '684_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 10,
        libraryName: 'Biblioteca del Museo Correr'
      }
    ]
  },
  {
    anderson_id: 670,
    ms_name: '670_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 671,
    ms_name: '671_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 673,
    ms_name: '673_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 676,
    ms_name: '676_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 677,
    ms_name: '677_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 679,
    ms_name: '679_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 681,
    ms_name: '681_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 683,
    ms_name: '683_62',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 18,
        libraryName: 'Biblioteca Nazionale Marciana'
      }
    ]
  },
  {
    anderson_id: 686,
    ms_name: '686_63',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 26,
        libraryName: 'Biblioteka Narodowa'
      }
    ]
  },
  {
    anderson_id: 687,
    ms_name: '687_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 690,
    ms_name: '690_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 693,
    ms_name: '693_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 694,
    ms_name: '694_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 696,
    ms_name: '696_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 697,
    ms_name: '697_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 701,
    ms_name: '701_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 704,
    ms_name: '704_64',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 55,
        libraryName: 'Österreichische Nationalbibliothek'
      }
    ]
  },
  {
    anderson_id: 705,
    ms_name: '705_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 708,
    ms_name: '708_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 709,
    ms_name: '709_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 710,
    ms_name: '710_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 712,
    ms_name: '712_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 713,
    ms_name: '713_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 714,
    ms_name: '714_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 715,
    ms_name: '715_WOLFENBUETTEL',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 43,
        libraryName: 'Herzog August Bibliothek'
      }
    ]
  },
  {
    anderson_id: 718,
    ms_name: '718_66',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 39,
        libraryName: 'Cathedral Library'
      }
    ]
  },
  {
    anderson_id: 720,
    ms_name: '720_67',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        current: true,
        library: 27,
        libraryName: 'Biblioteka Uniwersytecka'
      }
    ]
  }
];


export default manuscrits;
