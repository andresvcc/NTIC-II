function findL(id, arr) {
  let elemn;
  arr.some((element) => {
    if (element.type === 'polygon') {
      element.markers.some((subElement) => {
        if (subElement.id === id) {
          elemn = element;
          return true;
        }
        return false;
      });
      return false;
    }
    if (element.id === id) {
      elemn = element;
      return true;
    }
    return false;
  });

  return elemn;
}

const noExist = (obj) => (!obj);

export default function grapheGenerator(arrows, arr) {
  const keys = Object.keys(arrows);
  const fleches = JSON.parse(`[${keys}]`);
  const fl2 = {};
  const fl3 = [];

  fleches.map((fleche, i) => {
    const p1 = findL(fleche[0], arr);
    const p2 = findL(fleche[1], arr);
    if (p1 === undefined || p2 === undefined) return fleche;
    const ptFL1 = p1.id.toString();
    const ptFL2 = p2.id.toString();

    const nameFlSort = JSON.stringify([ptFL1, ptFL2].sort());
    const nameFl = JSON.stringify([ptFL1, ptFL2]);

    if (ptFL1 !== ptFL2) {
      if (noExist(fl2[nameFlSort])) {
        fl2[nameFl] = {
          arr: [p1, p2],
          manuscrits: arrows[keys[i]]
        };
      } else {
        const ff = fl2[nameFlSort].manuscrits; // = fl2[nameFl].manuscrits.push(arrows[keys[i]]);
        const gg = ff.concat(arrows[keys[i]]);
        fl2[nameFlSort].manuscrits = gg;
      }
    }

    return fleche;
  });

  Object.keys(fl2).forEach((element) => {
    fl3.push(fl2[element]);
  });

  // console.log(fl3);
  return fl3;
}
