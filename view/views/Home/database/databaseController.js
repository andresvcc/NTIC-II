import cities from './cities';
import manuscrits from './manuscrit';
import Owner from './owner';
import countries from './countries';

const intervaleGenerator = () => {
  const manuscritInterval = [];

  manuscrits.forEach((manuscrit) => {
    manuscrit.intervalles.forEach((interval) => {
      manuscritInterval.push({
        type: 'intervale',
        anderson_id: manuscrit.anderson_id,
        library: interval.library,
        start: interval.current ? 2010 : interval.start || null,
        end: interval.current ? 2020 : interval.end || null,
      });
    });
  });

  return manuscritInterval;
};

const OwnerGenerator = (year) => {
  const intervales = intervaleGenerator();
  const ownerFinal = [];

  Owner.forEach((value) => {
    const manuscrit = intervales.filter((_intervale) => {
      const library = _intervale.library === value.id;
      const yearIntervale = _intervale.start < year && _intervale.end >= year;
      return library && yearIntervale;
    });

    if (manuscrit.length > 0) {
      ownerFinal.push({
        manuscrit,
        ...value,
        city: cities[value.city],
        country: countries[cities[value.city].country] || undefined
      });
    }
  });

  return ownerFinal;
};


const jsonDB = {
  Owner: OwnerGenerator,
};

export default jsonDB;
