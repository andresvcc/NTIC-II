import polygonGenerator from './polygonGenerator';
import plusProche from './plusProche';

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
  const finalNewMarkers = newMarkers.markers.concat(solitaryPoint);
  return finalNewMarkers;
}
