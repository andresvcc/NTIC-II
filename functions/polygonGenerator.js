import getPolygonCentroid from './getPolygonCentroid';

export default function polygonGenerator(markers, index) {
  const centroid = getPolygonCentroid(markers);

  const newPolygon = {
    type: 'polygon',
    size: markers.length,
    id: `p${index}`, // `p${index}-${markers.length}`,
    pos: centroid,
    markers
  };

  return newPolygon;
}
