import owner from './owner';

const manuscrits = [
  {
    anderson_id: 1,
    ms_name: '1_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        production: true,
        start: 800,
        end: 1000,
        library: 4
      },
      {
        start: 1001,
        end: 1500,
        library: 1
      },
      {
        start: 1501,
        end: 'current',
        library: 6
      },
    ]
  },
  {
    anderson_id: 2,
    ms_name: '2_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        production: true,
        start: 800,
        end: 1000,
        library: 4
      },
      {
        start: 1001,
        end: 1500,
        library: 1
      },
      {
        start: 1001,
        end: 'current',
        library: 5
      },
    ]
  },
  {
    anderson_id: 3,
    ms_name: '2_ANTWERPEN',
    description: 'not description',
    photo: null,
    intervalles: [
      {
        production: true,
        start: 800,
        end: 1000,
        library: 4
      },
      {
        start: 1001,
        end: 2020,
        library: 1
      },
    ]
  },
];

export default manuscrits;
