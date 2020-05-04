const librairies = [
  {
    type: 'librairies',
    id: 1,
    name: 'Archivio Storico Civico e Biblioteca Trivulziana',
    pos: [46.201364405672045, 6.146247963150643],
    yearMin: 1550,
    yearMax: 2020
  },
  {
    type: 'librairies',
    id: 2,
    name: 'Badische Landesbibliothek',
    pos: [46.19992354808063, 6.084032328910524],
    yearMin: 1550,
    yearMax: 2020
  },
  {
    type: 'human',
    id: 3,
    name: 'Andres Caballero',
    pos: [46.170056191476405, 6.131836123519179],
    yearMin: 1550,
    yearMax: 2020
  },
  {
    type: 'other',
    id: 4,
    name: 'royal castle of england',
    pos: [46.24846036273029, 5.998626895003554],
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
      datation: 'XIII', yearMin: 1250, yearMax: 1300, library: librairies[1]
    }, {
      datation: 'XIII-XIV/2', yearMin: 1300, yearMax: 1350, library: librairies[2]
    }, {
      datation: 'XV', yearMin: 1550, yearMax: 1600, library: librairies[3]
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
      datation: 'XIII', yearMin: 1300, yearMax: 1400, library: librairies[1]
    }]
  },
];


export default librairies;
