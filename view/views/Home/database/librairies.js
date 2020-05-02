const librairies = [
  {
    type: 'librairies',
    id: 53,
    name: 'Archivio Storico Civico e Biblioteca Trivulziana',
    pos: [46.201364405672045, 6.146247963150643],
    yearMin: 1550,
    yearMax: 2020
  },
  {
    type: 'librairies',
    id: 54,
    name: 'Badische Landesbibliothek',
    pos: [46.19992354808063, 6.084032328910524],
    yearMin: 1550,
    yearMax: 2020
  },
];


const manuscrit = [
  {
    type: 'manuscrit',
    anderson_id: 3,
    town: 1,
    ms_name: '3_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [{
      datation: 'XIII', yearMin: 1250, yearMax: 1300, library: 53
    }, {
      datation: 'XIII-XIV/2', yearMin: 1300, yearMax: 1350, library: 54
    }, {
      datation: 'XV', yearMin: 1550, yearMax: 1600, library: 54
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
      datation: 'XIII', yearMin: 1300, yearMax: 1400, library: 54
    }]
  },
];


export default librairies;
