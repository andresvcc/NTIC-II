import {
  toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon
} from 'geolocation-utils';


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

  let twicearea = 0;
  let x = 0;
  let y = 0;
  let p1;
  let p2;
  let f;

  // eslint-disable-next-line
  for (let i = 0, j = nPts - 1; i < nPts; j = i++) {
    p1 = pts[i].pos;
    p2 = pts[j].pos;
    f = p1[0] * p2[1] - p2[0] * p1[1];
    twicearea += f;
    x += (p1[0] + p2[0]) * f;
    y += (p1[1] + p2[1]) * f;
  }

  f = twicearea * 3;
  return [(x / f), (y / f)];
}

function polygonGenerator(markers, index) {
  const centroid = getPolygonCentroid(markers);

  const newPolygon = {
    type: 'polygon',
    size: markers.length,
    id: `p${index}`,
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

function removeItemFromArr(arr, item) {
  const i = arr.indexOf(item);

  if (i !== -1) {
    arr.splice(i, 1);
  }
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
        removeItemFromArr(newMarkers.listId, generator.id);
      }
    }
  });

  const solitaryPoint = markers.filter((value) => !newMarkers.listId.includes(value.id));
  const finalNewMarkers = newMarkers.markers.concat(solitaryPoint);

  return finalNewMarkers;
}
