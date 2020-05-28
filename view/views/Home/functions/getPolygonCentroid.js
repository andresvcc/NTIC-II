import {
  headingDistanceTo,
  moveTo
} from 'geolocation-utils';

// calculer le centre d'un polygon
const center = (arr) => {
  const x = arr.map((xy) => xy[0]);
  const y = arr.map((xy) => xy[1]);
  const cx = (Math.min(...x) + Math.max(...x)) / 2;
  const cy = (Math.min(...y) + Math.max(...y)) / 2;
  return [cx, cy];
};


export default function getPolygonCentroid(pts) {
  const nPts = pts.length;
  const first = pts[0].pos;
  const last = pts[nPts - 1].pos;

  if (nPts === 0) {
    return [];
  }
  if (nPts === 1) {
    return pts[0].pos;
  }
  if (nPts === 2) {
    const vector = headingDistanceTo(first, last);
    const medium = moveTo(first, { heading: vector.heading, distance: vector.distance / 2 });
    return medium;
  }

  const arrayPts = pts.map((val) => [val.pos[0], val.pos[1]]);
  const centroide = center(arrayPts);
  return centroide;
}
