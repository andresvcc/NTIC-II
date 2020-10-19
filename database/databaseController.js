import { ConsoleView } from 'react-device-detect';
import cities from './cities';
import manuscritsDefault from './manuscrit';
import Owner from './owner';
import countries from './countries';

const currentYear = new Date().getFullYear(); // année current

const isInTheRange = (_intervale, year) => {
  const yearStart = year[0];
  const yearEnd = year[1];
  const intervaleStart = _intervale.start;
  const intervaleEnd = _intervale.end === 'current' ? currentYear : _intervale.end;

  if (yearStart > intervaleEnd || yearEnd < intervaleStart) return false;
  if (year[0] === 800 && year[1] === 800) return false;
  return true;
};

const noExist = (obj) => (!obj);

const newManuscrit = (manuscrit, interval) => ({
  anderson_id: manuscrit.anderson_id,
  ms_name: manuscrit.ms_name,
  description: manuscrit.description,
  interval
});

const intervaleGenerator = (year, disable, manuscritUniqueID) => {
  const ownerFinal = [];
  const ownerFilter = {};
  const intervales = {};
  const manuscrits = manuscritUniqueID < 0 ? manuscritsDefault : manuscritsDefault.filter((val) => val.anderson_id === manuscritUniqueID);

  if (disable === true && year[0] === '' && year[1] === '') {
    // si barre temporelle est disable et il n'y a pas des donnes pour les dates. cas des vuea ou on affiche uniquement les lieu de creations
    (manuscrits || []).forEach((manuscrit) => {
      manuscrit.intervalles.forEach((interval) => {
        // teste si l'intervale correspond à celle de la creation du manuscrit
        if (interval.production) {
          if (noExist(ownerFilter[interval.library])) {
            ownerFilter[interval.library] = {
              ...Owner[interval.library],
              // cityData: cities[Owner[interval.library].city],
              manuscrit: [newManuscrit(manuscrit, interval)]
            };
          } else {
            ownerFilter[interval.library].manuscrit.push(newManuscrit(manuscrit, interval));
          }
        }
      });
    });
  } else {
    (manuscrits || []).forEach((manuscrit) => {
      // cas normal ou on veut afficher les fleches
      const intervalesLocal = [];
      manuscrit.intervalles.forEach((interval) => {
        if (isInTheRange(interval, year, disable)) {
          intervalesLocal.push({
            ...interval,
            end: interval.end === 'current' ? currentYear : interval.end, // si l'intervale end est current il met la date current de l'ane en cours
          });
          if (noExist(ownerFilter[interval.library])) {
            ownerFilter[interval.library] = {
              ...Owner[interval.library],
              // cityData: cities[Owner[interval.library].city],
              manuscrit: [newManuscrit(manuscrit, interval)]
            };
          } else {
            ownerFilter[interval.library].manuscrit.push(newManuscrit(manuscrit, interval));
          }
        }
      });

      const arrows = [];

      intervalesLocal.forEach((val, i) => {
        if (i + 1 < intervalesLocal.length) {
          arrows.push({
            direction: [val.library, intervalesLocal[i + 1].library],
            date: val.end
          });
        }
      });

      if (arrows.length > 0) {
        arrows.forEach((parcour) => {
          const direction = JSON.stringify(parcour.direction);
          const directionNormalized = JSON.stringify(parcour.direction.sort());
          const inverse = direction === directionNormalized;

          if (noExist(intervales[`${directionNormalized}`])) {
            intervales[`${directionNormalized}`] = [{
              anderson_id: manuscrit.anderson_id,
              date: parcour.date,
              name: direction,
              inverse
            }];
          } else {
            intervales[`${directionNormalized}`].push({
              anderson_id: manuscrit.anderson_id,
              date: parcour.date,
              name: direction,
              inverse
            });
          }
        });
      }
    });
  }

  const keys = Object.keys(ownerFilter);
  keys.forEach((key) => {
    ownerFinal.push(ownerFilter[key]);
  });

  // console.log(intervales);

  return [ownerFinal, intervales];
};

const OwnerGenerator = (year, disable, manuscritUniqueID) => {
  const ownerFinal = intervaleGenerator(year, disable, manuscritUniqueID);
  // console.log(ownerFinal);
  return ownerFinal;
};

const jsonDB = {
  Owner: OwnerGenerator,
};

export default jsonDB;
