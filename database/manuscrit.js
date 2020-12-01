const manuscrits = [
  {
    index: 0,
    anderson_id: 3,
    ms_name: '3_0',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Wallon',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 52,
        nameOwner: 'Museum Plantin-Moretus',
        type: 'library'
      }
    ]
  },
  {
    index: 1,
    anderson_id: 6,
    ms_name: '6_1',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 52,
        nameOwner: 'Museum Plantin-Moretus',
        type: 'library'
      }
    ]
  },
  {
    index: 2,
    anderson_id: 10,
    ms_name: '10_2',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 72,
        nameOwner: 'Biblioteca comunale',
        type: 'library'
      }
    ]
  },
  {
    index: 3,
    anderson_id: 15,
    ms_name: '15_3',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: -1,
        nameOwner: 'Bavaria',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 58,
        nameOwner: 'Staats- und Stadtbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 4,
    anderson_id: 18,
    ms_name: '18_4',
    possessions: [
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Baltimore MD',
        type: 'city'
      }
    ]
  },
  {
    index: 5,
    anderson_id: 24,
    ms_name: '24_5',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Bartholameus de Gandino',
        type: 'undefined'
      },
      {
        start: 1467,
        end: 1500,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 74,
        nameOwner: 'Biblioteca civica Angelo Mai',
        type: 'library'
      }
    ]
  },
  {
    index: 6,
    anderson_id: 35,
    ms_name: '35_6',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'northern Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 7,
    anderson_id: 36,
    ms_name: '36_7',
    possessions: [
      {
        production: true,
        start: '1300',
        end: '1499',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 8,
    anderson_id: 37,
    ms_name: '37_8',
    possessions: [
      {
        production: true,
        start: 1375,
        end: '1400',
        owner: -1,
        nameOwner: 'Italy Venice',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'domus s. Andree de littore',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 9,
    anderson_id: 44,
    ms_name: '44_9',
    possessions: [
      {
        production: true,
        start: 1300,
        end: '1433',
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 10,
    anderson_id: 47,
    ms_name: '47_10',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 11,
    anderson_id: 48,
    ms_name: '48_11',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 75,
        nameOwner: 'Staatsbibliothek—Preußischer Kulturbesitz',
        type: 'library'
      }
    ]
  },
  {
    index: 12,
    anderson_id: 54,
    ms_name: '54_12',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 69,
        nameOwner: 'Wissenschaftliche Allgemeinbibliothek',
        type: 'library'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'man.',
        type: 'undefined'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 1564,
        end: 1564,
        owner: -1,
        nameOwner: 'Petri Danielis Aurelii',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 38,
        nameOwner: 'Burgerbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 13,
    anderson_id: 59,
    ms_name: '59_13',
    possessions: [
      {
        production: true,
        start: 1100,
        end: 1299,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 38,
        nameOwner: 'Burgerbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 14,
    anderson_id: 64,
    ms_name: '64_14',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 22,
        nameOwner: 'Biblioteca Universitaria',
        type: 'library'
      }
    ]
  },
  {
    index: 15,
    anderson_id: 66,
    ms_name: '66_15',
    possessions: [
      {
        start: 0,
        end: 0,
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 22,
        nameOwner: 'Biblioteca Universitaria',
        type: 'library'
      }
    ]
  },
  {
    index: 16,
    anderson_id: 68,
    ms_name: '68_16',
    possessions: [
      {
        production: true,
        start: 1100,
        end: 1299,
        owner: 100,
        nameOwner: 'St. Emmeram',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 30,
        nameOwner: 'Bibliothèque de l’Université libre',
        type: 'library'
      }
    ]
  },
  {
    index: 17,
    anderson_id: 70,
    ms_name: '70_17',
    possessions: [
      {
        production: true,
        start: 1021,
        end: 1021,
        owner: -1,
        nameOwner: 'single Belgian hand',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'hand',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'man.',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      }
    ]
  },
  {
    index: 18,
    anderson_id: 77,
    ms_name: '77_18',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 74,
        nameOwner: 'Biblioteca civica Angelo Mai',
        type: 'library'
      },
      {
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Franscischus Sfortia',
        type: 'undefined'
      },
      {
        start: 1416,
        end: 1416,
        owner: -1,
        nameOwner: 'Leonardus Brunus Aretinus',
        type: 'undefined'
      },
      {
        start: 1419,
        end: 1419,
        owner: -1,
        nameOwner: 'Leonardus Arentinus',
        type: 'undefined'
      },
      {
        start: 1837,
        end: 1837,
        owner: -1,
        nameOwner: 'Walter Sneyd',
        type: 'undefined'
      },
      {
        start: 1930,
        end: 1930,
        owner: -1,
        nameOwner: 'E.P. Goldschmidt',
        type: 'undefined'
      },
      {
        start: 1970,
        end: 'current',
        owner: -1,
        nameOwner: 'Bruxelles,Belgium',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      }
    ]
  },
  {
    index: 19,
    anderson_id: 78,
    ms_name: '78_19',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 37,
        nameOwner: 'Bryn Mawr College, Canaday Library',
        type: 'library'
      }
    ]
  },
  {
    index: 20,
    anderson_id: 87,
    ms_name: '87_20',
    possessions: [
      {
        production: true,
        start: 1200,
        end: '1399',
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 65,
        nameOwner: 'University Library',
        type: 'library'
      }
    ]
  },
  {
    index: 21,
    anderson_id: 88,
    ms_name: '88_21',
    possessions: [
      {
        production: true,
        start: 1225,
        end: 1225,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 65,
        nameOwner: 'University Library',
        type: 'library'
      }
    ]
  },
  {
    index: 22,
    anderson_id: 92,
    ms_name: '92_22',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 11,
        nameOwner: 'Carpentras',
        type: 'city'
      }
    ]
  },
  {
    index: 23,
    anderson_id: 93,
    ms_name: '93_23',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Cesena,Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 13,
        nameOwner: 'Biblioteca Malatestiana',
        type: 'library'
      }
    ]
  },
  {
    index: 24,
    anderson_id: 100,
    ms_name: '100_24',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: -1,
        nameOwner: 'IL',
        type: 'undefined'
      }
    ]
  },
  {
    index: 25,
    anderson_id: 101,
    ms_name: '101_25',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Sébastien Murrho',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 83,
        nameOwner: 'Bibliothèque de la ville',
        type: 'library'
      }
    ]
  },
  {
    index: 26,
    anderson_id: 102,
    ms_name: '102_26',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 28,
        nameOwner: 'Bibliotheca Bodmeriana',
        type: 'library'
      }
    ]
  },
  {
    index: 27,
    anderson_id: 105,
    ms_name: '105_27',
    possessions: [
      {
        production: true,
        start: 1201,
        end: '1400',
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: '[Philippi von Othley',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Philippus von Othley',
        type: 'undefined'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Philippus von Othley',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 44,
        nameOwner: 'Hessische Landes- und Hochschulbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 28,
    anderson_id: 108,
    ms_name: '108_28',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 100,
        nameOwner: 'St. Emmeram',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Dijon',
        type: 'city'
      }
    ]
  },
  {
    index: 29,
    anderson_id: 113,
    ms_name: '113_29',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 18,
        nameOwner: 'Dresden',
        type: 'city'
      }
    ]
  },
  {
    index: 30,
    anderson_id: 121,
    ms_name: '121_30',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 19,
        nameOwner: 'Düsseldorf',
        type: 'city'
      }
    ]
  },
  {
    index: 31,
    anderson_id: 122,
    ms_name: '122_31',
    possessions: [
      {
        production: true,
        start: '1100',
        end: '1299',
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 19,
        nameOwner: 'Düsseldorf',
        type: 'city'
      }
    ]
  },
  {
    index: 32,
    anderson_id: 126,
    ms_name: '126_32',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 20,
        nameOwner: 'Erfurt',
        type: 'city'
      }
    ]
  },
  {
    index: 33,
    anderson_id: 127,
    ms_name: '127_33',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 20,
        nameOwner: 'Erfurt',
        type: 'city'
      }
    ]
  },
  {
    index: 34,
    anderson_id: 130,
    ms_name: '130_34',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: -1,
        nameOwner: 'Real Biblioteca',
        type: 'undefined'
      }
    ]
  },
  {
    index: 35,
    anderson_id: 134,
    ms_name: '134_35',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      },
      {
        start: 1568,
        end: 1639,
        owner: -1,
        nameOwner: 'Henry Wotton',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 41,
        nameOwner: 'College Library',
        type: 'library'
      }
    ]
  },
  {
    index: 36,
    anderson_id: 135,
    ms_name: '135_36',
    possessions: [
      {
        start: 2020,
        end: 'current',
        owner: -1,
        nameOwner: 'Knight Library, University of Oregon',
        type: 'undefined'
      }
    ]
  },
  {
    index: 37,
    anderson_id: 136,
    ms_name: '136_37',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 53,
        nameOwner: 'Národní Knihovna Ceské Republiky',
        type: 'library'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'T////dedis',
        type: 'undefined'
      },
      {
        start: '1417',
        end: '1583',
        owner: -1,
        nameOwner: 'Barnard Gilpin',
        type: 'undefined'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'Riccharde Gilpine',
        type: 'undefined'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'Robert F.g.g.',
        type: 'undefined'
      },
      {
        start: 1501,
        end: 1600,
        owner: -1,
        nameOwner: 'James Beỵe',
        type: 'undefined'
      },
      {
        start: 1902,
        end: '1902',
        owner: -1,
        nameOwner: 'Henry White',
        type: 'undefined'
      },
      {
        start: '1902',
        end: '1913',
        owner: -1,
        nameOwner: 'George Dunn',
        type: 'undefined'
      },
      {
        start: '1913',
        end: '1915',
        owner: -1,
        nameOwner: 'Frank W. Gunsaulus',
        type: 'undefined'
      },
      {
        start: 1915,
        end: 'current',
        owner: -1,
        nameOwner: 'Evanston,IL',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 89,
        nameOwner: 'Special Collections Library, Northwestern University',
        type: 'library'
      }
    ]
  },
  {
    index: 38,
    anderson_id: 139,
    ms_name: '139_38',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 39,
    anderson_id: 141,
    ms_name: '141_39',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'north-central Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 40,
    anderson_id: 147,
    ms_name: '147_40',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 41,
    anderson_id: 150,
    ms_name: '150_41',
    possessions: [
      {
        production: true,
        start: '1367',
        end: '1433',
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 42,
    anderson_id: 151,
    ms_name: '151_42',
    possessions: [
      {
        production: true,
        start: '1300',
        end: '1499',
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 43,
    anderson_id: 152,
    ms_name: '152_43',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 44,
    anderson_id: 158,
    ms_name: '158_44',
    possessions: [
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 45,
    anderson_id: 159,
    ms_name: '159_45',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 46,
    anderson_id: 160,
    ms_name: '160_46',
    possessions: [
      {
        production: true,
        start: 1394,
        end: 1394,
        owner: -1,
        nameOwner: 'north-central Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 47,
    anderson_id: 161,
    ms_name: '161_47',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 48,
    anderson_id: 162,
    ms_name: '162_48',
    possessions: [
      {
        production: true,
        start: 1428,
        end: 1428,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 49,
    anderson_id: 164,
    ms_name: '164_49',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 50,
    anderson_id: 167,
    ms_name: '167_50',
    possessions: [
      {
        start: '1458',
        end: 1958,
        owner: -1,
        nameOwner: 'Rinaldus olim Bertini de Pandozis',
        type: 'undefined'
      },
      {
        start: 1958,
        end: '1458',
        owner: 88,
        nameOwner: 'Library',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 51,
    anderson_id: 169,
    ms_name: '169_51',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 52,
    anderson_id: 170,
    ms_name: '170_52',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 53,
    anderson_id: 172,
    ms_name: '172_53',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 54,
    anderson_id: 173,
    ms_name: '173_54',
    possessions: [
      {
        production: true,
        start: 1308,
        end: 1308,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 14,
        nameOwner: 'Biblioteca Medicea Laurenziana',
        type: 'library'
      }
    ]
  },
  {
    index: 55,
    anderson_id: 176,
    ms_name: '176_55',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 56,
    anderson_id: 179,
    ms_name: '179_56',
    possessions: [
      {
        production: true,
        start: 1375,
        end: 1375,
        owner: 90,
        nameOwner: 'Biblioteca Ordinis D. Francisci',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 57,
    anderson_id: 180,
    ms_name: '180_57',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 58,
    anderson_id: 181,
    ms_name: '181_58',
    possessions: [
      {
        production: true,
        start: 1413,
        end: 1413,
        owner: -1,
        nameOwner: 'Florence',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 59,
    anderson_id: 183,
    ms_name: '183_59',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 60,
    anderson_id: 184,
    ms_name: '184_60',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 61,
    anderson_id: 185,
    ms_name: '185_61',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 62,
    anderson_id: 186,
    ms_name: '186_62',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 17,
        nameOwner: 'Biblioteca Nazionale Centrale',
        type: 'library'
      }
    ]
  },
  {
    index: 63,
    anderson_id: 191,
    ms_name: '191_63',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 25,
        nameOwner: 'Firenze',
        type: 'city'
      }
    ]
  },
  {
    index: 64,
    anderson_id: 197,
    ms_name: '197_64',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 25,
        nameOwner: 'Firenze',
        type: 'city'
      }
    ]
  },
  {
    index: 65,
    anderson_id: 198,
    ms_name: '198_65',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 25,
        nameOwner: 'Firenze',
        type: 'city'
      }
    ]
  },
  {
    index: 66,
    anderson_id: 202,
    ms_name: '202_66',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 11,
        nameOwner: 'Biblioteca Durazzo Giustiniani',
        type: 'library'
      }
    ]
  },
  {
    index: 67,
    anderson_id: 203,
    ms_name: '203_67',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 22,
        nameOwner: 'Biblioteca Universitaria',
        type: 'library'
      }
    ]
  },
  {
    index: 68,
    anderson_id: 204,
    ms_name: '204_68',
    possessions: [
      {
        production: true,
        start: '1300',
        end: '1499',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 27,
        nameOwner: 'Göteborg',
        type: 'city'
      }
    ]
  },
  {
    index: 69,
    anderson_id: 209,
    ms_name: '209_69',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 45,
        nameOwner: 'Koninklijke Bibliotheek',
        type: 'library'
      }
    ]
  },
  {
    index: 70,
    anderson_id: 210,
    ms_name: '210_70',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 100,
        nameOwner: 'St. Emmeram',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 45,
        nameOwner: 'Koninklijke Bibliotheek',
        type: 'library'
      }
    ]
  },
  {
    index: 71,
    anderson_id: 220,
    ms_name: '220_71',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 29,
        nameOwner: 'Helsinki',
        type: 'city'
      }
    ]
  },
  {
    index: 72,
    anderson_id: 222,
    ms_name: '222_72',
    possessions: [
      {
        production: true,
        start: 1408,
        end: 1408,
        owner: 91,
        nameOwner: 'Biblioteka Jagiello?ska',
        type: 'library'
      },
      {
        start: '1663',
        end: 1663,
        owner: -1,
        nameOwner: 'Milan',
        type: 'undefined'
      },
      {
        start: '1685',
        end: '1744',
        owner: -1,
        nameOwner: 'Domenico Ferrari',
        type: 'undefined'
      },
      {
        start: '1744',
        end: 1744,
        owner: -1,
        nameOwner: 'Thomas Coke',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 48,
        nameOwner: 'Library of the Earl of Leicester',
        type: 'library'
      }
    ]
  },
  {
    index: 73,
    anderson_id: 223,
    ms_name: '223_73',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 48,
        nameOwner: 'Library of the Earl of Leicester',
        type: 'library'
      }
    ]
  },
  {
    index: 74,
    anderson_id: 225,
    ms_name: '225_74',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Brandus [vel Brandeus] Johannis de Uigolinis',
        type: 'undefined'
      },
      {
        start: '1700',
        end: '1789',
        owner: 92,
        nameOwner: 'Sancte Marie',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 1,
        nameOwner: 'Badische Landesbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 75,
    anderson_id: 235,
    ms_name: '235_75',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 32,
        nameOwner: 'Konstanz',
        type: 'city'
      }
    ]
  },
  {
    index: 76,
    anderson_id: 236,
    ms_name: '236_76',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 33,
        nameOwner: 'Kraków',
        type: 'city'
      }
    ]
  },
  {
    index: 77,
    anderson_id: 237,
    ms_name: '237_77',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 33,
        nameOwner: 'Bibliothèque Royale de Belgique',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 33,
        nameOwner: 'Kraków',
        type: 'city'
      }
    ]
  },
  {
    index: 78,
    anderson_id: 238,
    ms_name: '238_78',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 33,
        nameOwner: 'Bibliothèque Royale de Belgique',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 33,
        nameOwner: 'Kraków',
        type: 'city'
      }
    ]
  },
  {
    index: 79,
    anderson_id: 239,
    ms_name: '239_79',
    possessions: [
      {
        production: true,
        start: '1100',
        end: '1299',
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 33,
        nameOwner: 'Kraków',
        type: 'city'
      }
    ]
  },
  {
    index: 80,
    anderson_id: 241,
    ms_name: '241_80',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 93,
        nameOwner: 'Bibliotheek der Rijksuniversiteit',
        type: 'library'
      }
    ]
  },
  {
    index: 81,
    anderson_id: 246,
    ms_name: '246_81',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 93,
        nameOwner: 'Bibliotheek der Rijksuniversiteit',
        type: 'library'
      }
    ]
  },
  {
    index: 82,
    anderson_id: 256,
    ms_name: '256_82',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 93,
        nameOwner: 'Bibliotheek der Rijksuniversiteit',
        type: 'library'
      }
    ]
  },
  {
    index: 83,
    anderson_id: 259,
    ms_name: '259_83',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 93,
        nameOwner: 'Bibliotheek der Rijksuniversiteit',
        type: 'library'
      }
    ]
  },
  {
    index: 84,
    anderson_id: 265,
    ms_name: '265_84',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: '1716',
        end: 'current',
        owner: -1,
        nameOwner: 'Leiden,Netherlands',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 93,
        nameOwner: 'Bibliotheek der Rijksuniversiteit',
        type: 'library'
      }
    ]
  },
  {
    index: 85,
    anderson_id: 273,
    ms_name: '273_85',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: -1,
        nameOwner: 'England',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Lincoln',
        type: 'city'
      }
    ]
  },
  {
    index: 86,
    anderson_id: 282,
    ms_name: '282_86',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 87,
    anderson_id: 283,
    ms_name: '283_87',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 88,
    anderson_id: 284,
    ms_name: '284_88',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 96,
        nameOwner: 'Tiron',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 89,
    anderson_id: 285,
    ms_name: '285_89',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 98,
        nameOwner: 'Ambrosiana',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 90,
    anderson_id: 286,
    ms_name: '286_90',
    possessions: [
      {
        production: true,
        start: '1367',
        end: '1433',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 91,
    anderson_id: 287,
    ms_name: '287_91',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 92,
    anderson_id: 288,
    ms_name: '288_92',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 93,
    anderson_id: 289,
    ms_name: '289_93',
    possessions: [
      {
        production: true,
        start: 1411,
        end: 1411,
        owner: -1,
        nameOwner: 'Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 94,
    anderson_id: 290,
    ms_name: '290_94',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 95,
    anderson_id: 292,
    ms_name: '292_95',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 99,
        nameOwner: 'Biblioteca nazionale Braidense',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 96,
    anderson_id: 293,
    ms_name: '293_96',
    possessions: [
      {
        production: true,
        start: '1267',
        end: '1333',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: '1529',
        end: '1600',
        owner: -1,
        nameOwner: 'Fulvio Orsini',
        type: 'undefined'
      },
      {
        start: 1968,
        end: 'current',
        owner: -1,
        nameOwner: 'London',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 97,
    anderson_id: 296,
    ms_name: '296_97',
    possessions: [
      {
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Jean Tullone',
        type: 'undefined'
      },
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 100,
        nameOwner: 'St. Emmeram',
        type: 'library'
      },
      {
        start: '1545',
        end: '1585',
        owner: 101,
        nameOwner: 'Sancti Emeranis',
        type: 'library'
      },
      {
        start: '1585',
        end: '1606',
        owner: -1,
        nameOwner: '"Thiron-Gardais",France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 98,
    anderson_id: 304,
    ms_name: '304_98',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 99,
    anderson_id: 311,
    ms_name: '311_99',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 100,
    anderson_id: 318,
    ms_name: '318_100',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 36,
        nameOwner: 'British Library',
        type: 'library'
      }
    ]
  },
  {
    index: 101,
    anderson_id: 334,
    ms_name: '334_101',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 51,
        nameOwner: 'Martinus-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 102,
    anderson_id: 336,
    ms_name: '336_102',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'northern Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 0,
        nameOwner: 'Archivio Storico Civico e Biblioteca Trivulziana',
        type: 'library'
      }
    ]
  },
  {
    index: 103,
    anderson_id: 338,
    ms_name: '338_103',
    possessions: [
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      }
    ]
  },
  {
    index: 104,
    anderson_id: 341,
    ms_name: '341_104',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      }
    ]
  },
  {
    index: 105,
    anderson_id: 342,
    ms_name: '342_105',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      }
    ]
  },
  {
    index: 106,
    anderson_id: 343,
    ms_name: '343_106',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      }
    ]
  },
  {
    index: 107,
    anderson_id: 346,
    ms_name: '346_107',
    possessions: [
      {
        production: true,
        start: 1406,
        end: 1406,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      }
    ]
  },
  {
    index: 108,
    anderson_id: 347,
    ms_name: '347_108',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: '1326',
        end: '1338',
        owner: 45,
        nameOwner: 'Koninklijke Bibliotheek',
        type: 'library'
      },
      {
        start: '1338',
        end: '1374',
        owner: -1,
        nameOwner: 'Petrarch',
        type: 'undefined'
      },
      {
        start: 1399,
        end: 1399,
        owner: 102,
        nameOwner: 'Winchester',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 3,
        nameOwner: 'Biblioteca Ambrosiana',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: -1,
        nameOwner: 'Milano,Italy',
        type: 'undefined'
      }
    ]
  },
  {
    index: 109,
    anderson_id: 348,
    ms_name: '348_109',
    possessions: [
      {
        production: true,
        start: 1413,
        end: 1413,
        owner: 103,
        nameOwner: 'Corpus Christi College Library',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 99,
        nameOwner: 'Biblioteca nazionale Braidense',
        type: 'library'
      }
    ]
  },
  {
    index: 110,
    anderson_id: 350,
    ms_name: '350_110',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 39,
        nameOwner: 'Modena',
        type: 'city'
      }
    ]
  },
  {
    index: 111,
    anderson_id: 354,
    ms_name: '354_111',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 39,
        nameOwner: 'Modena',
        type: 'city'
      }
    ]
  },
  {
    index: 112,
    anderson_id: 362,
    ms_name: '362_112',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 2,
        nameOwner: 'Bayerische Staatsbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 113,
    anderson_id: 369,
    ms_name: '369_113',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 1347,
        end: 1347,
        owner: -1,
        nameOwner: 'Regensburg,Germany',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 2,
        nameOwner: 'Bayerische Staatsbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 114,
    anderson_id: 374,
    ms_name: '374_114',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 2,
        nameOwner: 'Bayerische Staatsbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 115,
    anderson_id: 382,
    ms_name: '382_115',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 41,
        nameOwner: 'Napoli',
        type: 'city'
      }
    ]
  },
  {
    index: 116,
    anderson_id: 387,
    ms_name: '387_116',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 41,
        nameOwner: 'Napoli',
        type: 'city'
      }
    ]
  },
  {
    index: 117,
    anderson_id: 388,
    ms_name: '388_117',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 41,
        nameOwner: 'Napoli',
        type: 'city'
      }
    ]
  },
  {
    index: 118,
    anderson_id: 393,
    ms_name: '393_118',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 41,
        nameOwner: 'Napoli',
        type: 'city'
      }
    ]
  },
  {
    index: 119,
    anderson_id: 402,
    ms_name: '402_119',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: '1947',
        end: 'current',
        owner: 65,
        nameOwner: 'University Library',
        type: 'library'
      }
    ]
  },
  {
    index: 120,
    anderson_id: 403,
    ms_name: '403_120',
    possessions: [
      {
        start: 0,
        end: '1810',
        owner: -1,
        nameOwner: '"Isola di Murano",Italy',
        type: 'undefined'
      },
      {
        production: true,
        start: 1447,
        end: 1447,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: '1810',
        end: 0,
        owner: -1,
        nameOwner: 'Napoleon',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 46,
        nameOwner: 'Landesbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 121,
    anderson_id: 410,
    ms_name: '410_121',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 102,
        nameOwner: 'Winchester',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 122,
    anderson_id: 411,
    ms_name: '411_122',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 123,
    anderson_id: 413,
    ms_name: '413_123',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 124,
    anderson_id: 418,
    ms_name: '418_124',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 125,
    anderson_id: 420,
    ms_name: '420_125',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 126,
    anderson_id: 426,
    ms_name: '426_126',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 127,
    anderson_id: 432,
    ms_name: '432_127',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: 1891,
        end: '1891',
        owner: -1,
        nameOwner: 'Quaritch',
        type: 'undefined'
      },
      {
        start: '1891',
        end: 'current',
        owner: 47,
        nameOwner: 'Library',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 128,
    anderson_id: 433,
    ms_name: '433_128',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 1903,
        end: '1903',
        owner: -1,
        nameOwner: 'Walter Sneyd',
        type: 'undefined'
      },
      {
        start: '1903',
        end: 1903,
        owner: -1,
        nameOwner: 'Pench',
        type: 'undefined'
      },
      {
        start: 1961,
        end: '1961',
        owner: -1,
        nameOwner: 'H.W. Garrod',
        type: 'undefined'
      },
      {
        start: '1961',
        end: 'current',
        owner: 47,
        nameOwner: 'Library',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 129,
    anderson_id: 435,
    ms_name: '435_129',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 35,
        nameOwner: 'Bodleian Library',
        type: 'library'
      }
    ]
  },
  {
    index: 130,
    anderson_id: 437,
    ms_name: '437_130',
    possessions: [
      {
        start: 2020,
        end: 'current',
        owner: 103,
        nameOwner: 'Corpus Christi College Library',
        type: 'library'
      }
    ]
  },
  {
    index: 131,
    anderson_id: 438,
    ms_name: '438_131',
    possessions: [
      {
        production: true,
        start: 1119,
        end: 1119,
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 44,
        nameOwner: 'Oxford',
        type: 'city'
      }
    ]
  },
  {
    index: 132,
    anderson_id: 445,
    ms_name: '445_132',
    possessions: [
      {
        production: true,
        start: 1463,
        end: 1463,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 116,
        nameOwner: 'Biblioteca universitaria',
        type: 'library'
      }
    ]
  },
  {
    index: 133,
    anderson_id: 447,
    ms_name: '447_133',
    possessions: [
      {
        start: '1458',
        end: '1494',
        owner: -1,
        nameOwner: 'Ferdinand I',
        type: 'undefined'
      }
    ]
  },
  {
    index: 134,
    anderson_id: 467,
    ms_name: '467_134',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 69,
        nameOwner: 'Wissenschaftliche Allgemeinbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 135,
    anderson_id: 468,
    ms_name: '468_135',
    possessions: [
      {
        production: true,
        start: '867',
        end: '933',
        owner: -1,
        nameOwner: 'Corbie,France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 136,
    anderson_id: 469,
    ms_name: '469_136',
    possessions: [
      {
        production: true,
        start: '1100',
        end: '1299',
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 137,
    anderson_id: 479,
    ms_name: '479_137',
    possessions: [
      {
        production: true,
        start: 1421,
        end: 1421,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 1570,
        end: 1570,
        owner: -1,
        nameOwner: 'Paris,France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 138,
    anderson_id: 483,
    ms_name: '483_138',
    possessions: [
      {
        production: true,
        start: 1462,
        end: 1462,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 139,
    anderson_id: 484,
    ms_name: '484_139',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 140,
    anderson_id: 485,
    ms_name: '485_140',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'northern Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 141,
    anderson_id: 486,
    ms_name: '486_141',
    possessions: [
      {
        production: true,
        start: '1400',
        end: '1599',
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 142,
    anderson_id: 491,
    ms_name: '491_142',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 143,
    anderson_id: 493,
    ms_name: '493_143',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 106,
        nameOwner: 'Echternach',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 144,
    anderson_id: 494,
    ms_name: '494_144',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 80,
        nameOwner: 'Bibliothèque nationale de France',
        type: 'library'
      }
    ]
  },
  {
    index: 145,
    anderson_id: 509,
    ms_name: '509_145',
    possessions: [
      {
        production: true,
        start: 1462,
        end: 1462,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 19,
        nameOwner: 'Biblioteca Palatina',
        type: 'library'
      }
    ]
  },
  {
    index: 146,
    anderson_id: 511,
    ms_name: '511_146',
    possessions: [
      {
        production: true,
        start: 1368,
        end: 1368,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 19,
        nameOwner: 'Biblioteca Palatina',
        type: 'library'
      }
    ]
  },
  {
    index: 147,
    anderson_id: 516,
    ms_name: '516_147',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 49,
        nameOwner: 'Perugia',
        type: 'city'
      }
    ]
  },
  {
    index: 148,
    anderson_id: 517,
    ms_name: '517_148',
    possessions: [
      {
        production: true,
        start: '1300',
        end: '1499',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 49,
        nameOwner: 'Perugia',
        type: 'city'
      }
    ]
  },
  {
    index: 149,
    anderson_id: 525,
    ms_name: '525_149',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 9,
        nameOwner: 'Biblioteca Comunale Rilliana',
        type: 'library'
      }
    ]
  },
  {
    index: 150,
    anderson_id: 529,
    ms_name: '529_150',
    possessions: [
      {
        production: true,
        start: '1386',
        end: '1389',
        owner: -1,
        nameOwner: 'CzechRepublic',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 51,
        nameOwner: 'Praha',
        type: 'city'
      }
    ]
  },
  {
    index: 151,
    anderson_id: 530,
    ms_name: '530_151',
    possessions: [
      {
        production: true,
        start: 1388,
        end: 1388,
        owner: -1,
        nameOwner: 'CzechRepublic',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 51,
        nameOwner: 'Praha',
        type: 'city'
      }
    ]
  },
  {
    index: 152,
    anderson_id: 532,
    ms_name: '532_152',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'CzechRepublic',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 51,
        nameOwner: 'Praha',
        type: 'city'
      }
    ]
  },
  {
    index: 153,
    anderson_id: 536,
    ms_name: '536_153',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 109,
        nameOwner: 'NJ',
        type: 'library'
      }
    ]
  },
  {
    index: 154,
    anderson_id: 537,
    ms_name: '537_154',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Milan',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: -1,
        nameOwner: 'Princeton University Library',
        type: 'undefined'
      }
    ]
  },
  {
    index: 155,
    anderson_id: 545,
    ms_name: '545_155',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 53,
        nameOwner: 'Roma',
        type: 'city'
      }
    ]
  },
  {
    index: 156,
    anderson_id: 546,
    ms_name: '546_156',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 53,
        nameOwner: 'Roma',
        type: 'city'
      }
    ]
  },
  {
    index: 157,
    anderson_id: 547,
    ms_name: '547_157',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 53,
        nameOwner: 'Roma',
        type: 'city'
      }
    ]
  },
  {
    index: 158,
    anderson_id: 548,
    ms_name: '548_158',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 53,
        nameOwner: 'Roma',
        type: 'city'
      }
    ]
  },
  {
    index: 159,
    anderson_id: 549,
    ms_name: '549_159',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 7,
        nameOwner: 'Biblioteca Comunale "Giulio Gabrielli"',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 23,
        nameOwner: 'Biblioteca Vallicelliana',
        type: 'library'
      }
    ]
  },
  {
    index: 160,
    anderson_id: 552,
    ms_name: '552_160',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 23,
        nameOwner: 'Biblioteca Vallicelliana',
        type: 'library'
      }
    ]
  },
  {
    index: 161,
    anderson_id: 555,
    ms_name: '555_161',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 116,
        nameOwner: 'Biblioteca universitaria',
        type: 'library'
      }
    ]
  },
  {
    index: 162,
    anderson_id: 558,
    ms_name: '558_162',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: -1,
        nameOwner: 'Austria',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 61,
        nameOwner: 'Stiftsbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 163,
    anderson_id: 559,
    ms_name: '559_163',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 61,
        nameOwner: 'Stiftsbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 164,
    anderson_id: 575,
    ms_name: '575_164',
    possessions: [
      {
        production: true,
        start: '1461',
        end: '1468',
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 165,
    anderson_id: 576,
    ms_name: '576_165',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 166,
    anderson_id: 578,
    ms_name: '578_166',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 58,
        nameOwner: 'Torino',
        type: 'city'
      }
    ]
  },
  {
    index: 167,
    anderson_id: 582,
    ms_name: '582_167',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 60,
        nameOwner: 'Stadtbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 168,
    anderson_id: 592,
    ms_name: '592_168',
    possessions: [
      {
        production: true,
        start: '1367',
        end: '1433',
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 169,
    anderson_id: 593,
    ms_name: '593_169',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 170,
    anderson_id: 594,
    ms_name: '594_170',
    possessions: [
      {
        production: true,
        start: '1466',
        end: '1467',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 171,
    anderson_id: 595,
    ms_name: '595_171',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'France',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 172,
    anderson_id: 598,
    ms_name: '598_172',
    possessions: [
      {
        production: true,
        start: 1340,
        end: 1340,
        owner: 74,
        nameOwner: 'Biblioteca civica Angelo Mai',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 173,
    anderson_id: 604,
    ms_name: '604_173',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 174,
    anderson_id: 606,
    ms_name: '606_174',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 175,
    anderson_id: 608,
    ms_name: '608_175',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 176,
    anderson_id: 611,
    ms_name: '611_176',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1499',
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 177,
    anderson_id: 614,
    ms_name: '614_177',
    possessions: [
      {
        production: true,
        start: 1501,
        end: 1600,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 178,
    anderson_id: 615,
    ms_name: '615_178',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 179,
    anderson_id: 616,
    ms_name: '616_179',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 180,
    anderson_id: 617,
    ms_name: '617_180',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 181,
    anderson_id: 621,
    ms_name: '621_181',
    possessions: [
      {
        production: true,
        start: '1267',
        end: '1333',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 182,
    anderson_id: 622,
    ms_name: '622_182',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Florence',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 183,
    anderson_id: 623,
    ms_name: '623_183',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 184,
    anderson_id: 625,
    ms_name: '625_184',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 185,
    anderson_id: 633,
    ms_name: '633_185',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Flanders',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 186,
    anderson_id: 635,
    ms_name: '635_186',
    possessions: [
      {
        production: true,
        start: 1391,
        end: 1391,
        owner: -1,
        nameOwner: 'Florence',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 187,
    anderson_id: 637,
    ms_name: '637_187',
    possessions: [
      {
        production: true,
        start: 1432,
        end: 1432,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 188,
    anderson_id: 643,
    ms_name: '643_188',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Florence',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 189,
    anderson_id: 649,
    ms_name: '649_189',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 190,
    anderson_id: 650,
    ms_name: '650_190',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 191,
    anderson_id: 652,
    ms_name: '652_191',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 192,
    anderson_id: 656,
    ms_name: '656_192',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Benevento,Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 193,
    anderson_id: 661,
    ms_name: '661_193',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: -1,
        nameOwner: 'Rome',
        type: 'undefined'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 194,
    anderson_id: 667,
    ms_name: '667_194',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 15,
        nameOwner: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        type: 'library'
      },
      {
        production: true,
        start: 2020,
        end: 'current',
        owner: 5,
        nameOwner: 'Biblioteca Apostolica Vaticana',
        type: 'library'
      }
    ]
  },
  {
    index: 195,
    anderson_id: 670,
    ms_name: '670_195',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 45,
        nameOwner: 'Koninklijke Bibliotheek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 196,
    anderson_id: 671,
    ms_name: '671_196',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 197,
    anderson_id: 673,
    ms_name: '673_197',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: -1,
        nameOwner: 'Rome,Italy',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 198,
    anderson_id: 676,
    ms_name: '676_198',
    possessions: [
      {
        production: true,
        start: 1495,
        end: 1495,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 199,
    anderson_id: 677,
    ms_name: '677_199',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 200,
    anderson_id: 679,
    ms_name: '679_200',
    possessions: [
      {
        production: true,
        start: 1401,
        end: 1500,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 201,
    anderson_id: 681,
    ms_name: '681_201',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 202,
    anderson_id: 683,
    ms_name: '683_202',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 114,
        nameOwner: 'Biblioteca nazionale Marciana',
        type: 'library'
      }
    ]
  },
  {
    index: 203,
    anderson_id: 684,
    ms_name: '684_203',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 68,
        nameOwner: 'Walters Art Museum',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 61,
        nameOwner: 'Venezia',
        type: 'city'
      }
    ]
  },
  {
    index: 204,
    anderson_id: 686,
    ms_name: '686_204',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 33,
        nameOwner: 'Bibliothèque Royale de Belgique',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 26,
        nameOwner: 'Biblioteka Narodowa',
        type: 'library'
      }
    ]
  },
  {
    index: 205,
    anderson_id: 687,
    ms_name: '687_205',
    possessions: [
      {
        production: true,
        start: 1470,
        end: 1470,
        owner: 25,
        nameOwner: 'Biblioteka Muzeum Narodowego w Krakowie',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 206,
    anderson_id: 690,
    ms_name: '690_206',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 207,
    anderson_id: 693,
    ms_name: '693_207',
    possessions: [
      {
        production: true,
        start: 1431,
        end: 1431,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 208,
    anderson_id: 694,
    ms_name: '694_208',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 209,
    anderson_id: 696,
    ms_name: '696_209',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 119,
        nameOwner: 'Mondsee',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 210,
    anderson_id: 697,
    ms_name: '697_210',
    possessions: [
      {
        production: true,
        start: 1481,
        end: 1481,
        owner: -1,
        nameOwner: 'Austria',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 211,
    anderson_id: 701,
    ms_name: '701_211',
    possessions: [
      {
        production: true,
        start: '1477',
        end: '1479',
        owner: -1,
        nameOwner: 'Bavaria',
        type: 'undefined'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 212,
    anderson_id: 704,
    ms_name: '704_212',
    possessions: [
      {
        production: true,
        start: 1201,
        end: 1300,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 55,
        nameOwner: 'Österreichische Nationalbibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 213,
    anderson_id: 705,
    ms_name: '705_213',
    possessions: [
      {
        production: true,
        start: 1276,
        end: 1276,
        owner: 71,
        nameOwner: 'St. Jacques',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 214,
    anderson_id: 708,
    ms_name: '708_214',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 215,
    anderson_id: 709,
    ms_name: '709_215',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 216,
    anderson_id: 710,
    ms_name: '710_216',
    possessions: [
      {
        production: true,
        start: 0,
        end: 0,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 217,
    anderson_id: 712,
    ms_name: '712_217',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 218,
    anderson_id: 713,
    ms_name: '713_218',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 219,
    anderson_id: 714,
    ms_name: '714_219',
    possessions: [
      {
        production: true,
        start: 1454,
        end: 1454,
        owner: 70,
        nameOwner: 'Württembergische Landesbibliothek',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 220,
    anderson_id: 715,
    ms_name: '715_220',
    possessions: [
      {
        production: true,
        start: '1200',
        end: '1399',
        owner: 79,
        nameOwner: 'Biblioteca S. Salvatore',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 120,
        nameOwner: 'Herzog-August-Bibliothek',
        type: 'library'
      }
    ]
  },
  {
    index: 221,
    anderson_id: 718,
    ms_name: '718_221',
    possessions: [
      {
        production: true,
        start: '1267',
        end: '1333',
        owner: 81,
        nameOwner: 'Bibliothèque Royale Albert 1er',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 39,
        nameOwner: 'Cathedral Library',
        type: 'library'
      }
    ]
  },
  {
    index: 222,
    anderson_id: 720,
    ms_name: '720_222',
    possessions: [
      {
        production: true,
        start: 1374,
        end: 1374,
        owner: 95,
        nameOwner: 'Purchased',
        type: 'library'
      },
      {
        start: 2020,
        end: 'current',
        owner: 27,
        nameOwner: 'Biblioteka Uniwersytecka',
        type: 'library'
      }
    ]
  }
];

export default manuscrits;
