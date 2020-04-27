import {
  toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon
} from 'geolocation-utils';

const center = (arr) => {
  const x = arr.map((xy) => xy[0]);
  const y = arr.map((xy) => xy[1]);
  const cx = (Math.min(...x) + Math.max(...x)) / 2;
  const cy = (Math.min(...y) + Math.max(...y)) / 2;
  return [cx, cy];
};

// calculer le centre d'un polygon
function getPolygonCentroid(pts) {
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

  const gg = pts.map((val) => [val.pos[0], val.pos[1]]);

  const res = center(gg);

  return res;
}

function polygonGenerator(markers, index) {
  const centroid = getPolygonCentroid(markers);

  const newPolygon = {
    type: 'polygon',
    size: markers.length,
    id: `p${index}-${markers.length}`,
    pos: centroid,
    markers
  };

  return newPolygon;
}

function plusProche(point, markers, distanceMinGroup) {
  const proches = [];

  markers.forEach((polygon) => {
    const vector = headingDistanceTo(polygon.pos, point.pos);
    if (vector.distance > 0 && vector.distance < distanceMinGroup) proches.push({ distance: vector.distance, polygon });
  });

  proches.sort((a, b) => a.distance - b.distance);

  return { point, proches };
}

export default function groupMarkers(markers, distanceMinGroup) {
  const polygonGroup = [];
  const newMarkers = {
    listId: [],
    markers: []
  };

  markers.some((marker) => {
    const voisins = plusProche(marker, markers, distanceMinGroup);
    if (voisins.proches.length > 0) polygonGroup.push(voisins);
    return false;
  });

  polygonGroup.sort((a, b) => a.proches[0].distance - b.proches[0].distance);

  polygonGroup.forEach((point, index) => {
    if (!newMarkers.listId.includes(point.point.id)) {
      const newPolygon = [point.point];
      newMarkers.listId.push(point.point.id);

      point.proches.forEach((value) => {
        const marker = value.polygon;
        if (!newMarkers.listId.includes(marker.id)) {
          newMarkers.listId.push(marker.id);
          newPolygon.push(marker);
        }
      });

      const generator = polygonGenerator(newPolygon, index);

      if (generator.markers.length > 1) newMarkers.markers.push(generator);
      else {
        const i = newMarkers.listId.indexOf(generator.markers[0].id);
        if (i !== -1) {
          newMarkers.listId.splice(i, 1);
        }
      }
    }
  });

  const solitaryPoint = markers.filter((value) => !newMarkers.listId.includes(value.id));
  // console.log(solitaryPoint);
  // console.log(newMarkers);
  const finalNewMarkers = newMarkers.markers.concat(solitaryPoint);

  return finalNewMarkers;
}
