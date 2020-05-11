import owner from './owner';

const manuscrits = [
  {
    type: 'manuscrit',
    anderson_id: 3,
    town: 1,
    ms_name: '3_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [{
      datation: 'XIII', start: 1250, end: 1300, library: 0, libraryName: owner[0].name
    }, {
      datation: 'XIII-XIV/2', start: 1300, end: 1350, library: 1, libraryName: owner[1].name
    }, {
      datation: 'XV', start: 1550, current: true, library: 2, libraryName: owner[2].name
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
      datation: 'XIII', start: 1300, current: true, library: 1, libraryName: owner[0].name
    }]
  },
];

export default manuscrits;
