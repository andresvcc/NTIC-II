import cities from './cities';
import manuscrits from './manuscrit';
import Owner from './owner';


const manuscritGenerator = () => {
  const manuscritsProcede = [];

  manuscrits.forEach((manuscrit) => {
    manuscrit.intervalles.forEach((interval) => {
      manuscritsProcede.push({
        id: `${interval.yearMin}-${interval.yearMax}/${interval.library}/${manuscrit.anderson_id}`,
        type: manuscrit.type,
        ...interval,
        ...manuscrit

      });
    });
  });

  return manuscritsProcede;
};


const OwnerGenerator = () => {
  const manuscrit = manuscritGenerator();

  Owner.map((value) => {
    value.manuscrit = manuscrit.filter((_manuscrit) => _manuscrit.library === value.id && _manuscrit.current);
    value.city = cities[value.city];
    return value;
  });

  return Owner;
};

const citiesGenerator = () => {
  const owners = OwnerGenerator();
  const Cities = [];
  cities.forEach((value) => {
    Cities.push({
      ...value,
      Owner: owners.filter((_owners) => _owners.city.id === value.id)
    });
  });

  return Cities;
};

const jsonDB = {
  manuscrits: manuscritGenerator(),
  cities: citiesGenerator(),
  Owner: OwnerGenerator(),
};

export default jsonDB;
