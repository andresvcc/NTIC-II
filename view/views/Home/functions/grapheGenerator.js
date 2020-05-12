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

export default function grapheGenerator(fleches, arr) {
  const fl = [];
  fleches.map((fleche) => {
    const p1 = findL(fleche[0], arr);
    const p2 = findL(fleche[1], arr);
    if (p1 === undefined || p2 === undefined) return fleche;
    fl.push({
      // color: `${p2.type !== 'polygon' ? '#e5167f' : '#6d01b8'}`,
      color: '#6d01b8',
      arr: [p1, p2]
    });
    return fleche;
  });
  return fl;
}
