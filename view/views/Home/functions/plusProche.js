import {
  headingDistanceTo
} from 'geolocation-utils';


export default function plusProche(point, markers, distanceMinGroup) {
  const proches = [];

  markers.forEach((polygon) => {
    const vector = headingDistanceTo(polygon.pos, point.pos);
    if (vector.distance > 0 && vector.distance < distanceMinGroup) proches.push({ distance: vector.distance, polygon });
  });

  proches.sort((a, b) => a.distance - b.distance);

  return { point, proches };
}
