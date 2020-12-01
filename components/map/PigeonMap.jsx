import React, { useState, useEffect } from 'react';
import Map from 'pigeon-maps';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import redux from '../redux/redux';
import hookDeviceInfo from '../hookDeviceInfo/hookDeviceInfo';
import GridCenter from '../Grid/GridCenterCube';
import Marker from './markers';
import grapheGenerator from '../../functions/grapheGenerator';
import zoomCalGroup from '../../functions/zoomCalGroup';
import groupFonction from '../../functions/groupMarkers';
import JsonDB from '../../database/databaseController';
import LineDraw from './LineDraw';

const {
  Owner
} = JsonDB;

function mapTilerProvider(x, y, z) {
  // eslint-disable-next-line
    const s = String.fromCharCode(97 + (x + y + z) % 3);
  return `https://cartodb-basemaps-${s}.global.ssl.fastly.net/rastertiles/voyager_labels_under/${z}/${x}/${y}.png`;
}
const uniquePairs = (pairs) => [...new Set(pairs.map((pair) => JSON.stringify(pair)))].map((pair) => JSON.parse(pair));

export default function PigeonMap(props) {
  const {
    children,
  } = props;

  const [stateRedux, dispatch] = redux();
  const device = hookDeviceInfo();
  const [databaseMaker, setDataBaseMarker] = useState([]); // stateRedux.librairiesData
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState([]);
  const [OwnerYear, setOwnerYear] = useState([]);
  const [animated, setAnimate] = useState(false);
  const [arrows, setArrows] = useState([]);
  const [connecteurs, setConnecteurs] = useState([]);

  const handleAnimationStart = () => {
    setAnimate(true);
  };
  const handleAnimationStop = () => setAnimate(false);

  const update = async () => {
    await dispatch({ state: 'hoverArrow', value: { visible: false, transfert: [] } });
    const distanceCal = zoomCalGroup(Math.round(zoom));
    const newMapData = groupFonction(OwnerYear, distanceCal);
    setDataBaseMarker(newMapData);
    await dispatch({ state: 'librairiesData', value: newMapData });
  };

  const handleBoundsChange = ({ ...rest }) => {
    setZoom(rest.zoom);
    setCenter(rest.center);
  };

  useEffect(() => {
    setConnecteurs(grapheGenerator(arrows, databaseMaker));
  }, [databaseMaker, arrows]);

  useEffect(() => {
    const [ownerFinal, intervales] = Owner(
      stateRedux.barreTemporelle,
      stateRedux.barreTemporelleDisable,
      stateRedux.manuscritUniqueID,
    );

    setArrows(intervales);
    setOwnerYear(ownerFinal);
  }, [stateRedux.barreTemporelle, stateRedux.manuscritUniqueID]);

  useEffect(() => {
    update();
  }, [OwnerYear, zoom]);

  useEffect(() => {
    const newCenter = stateRedux.center;
    if (newCenter.pos) {
      setZoom(newCenter.zoom);
      setCenter(newCenter.pos);
      setAnimate(true);
      // console.log(newCenter);
    }
  }, [stateRedux.center]);

  const handleMapClick = async ({ event, latLng, pixel }) => {
    await dispatch({ state: 'openSearch', value: false });
    // console.log('Map clicked!', latLng, pixel);
  };

  return (
    <GridCenter width={100} height={92} unsel dev>
      <Map
        provider={mapTilerProvider}
        onBoundsChanged={handleBoundsChange}
        onAnimationStart={handleAnimationStart}
        onAnimationStop={handleAnimationStop}
        limitBounds="edge"
        attribution={false}
        attributionPrefix={false}
        center={animated ? center : null}
        zoom={zoom}
        defaultCenter={stateRedux.initial.center}
        defaultZoom={stateRedux.initial.zoom}
        height={device.height * 0.91999}
        boxClassname="pigeon-filters"
        minZoom={3}
        maxZoom={14}
        animate
        onClick={handleMapClick}
        zoomSnap
        // animateMaxScreens={5}
        dprs={[1, 2]}
      >
        {
          databaseMaker.map((data, index) => {
            const front = stateRedux.markerSelect === data.id ? 2 : 0;
            return (
              <Overlay
                style={{
                  position: 'absolute',
                  zIndex: front
                }}
                anchor={data.pos}
                offset={[10, data.type === 'polygon' ? 10 : 20]}
                key={`${index + 1}-${data.id}`}
              >
                <Marker data={data} />
              </Overlay>
            );
          })
        }
        {
          (stateRedux.fleches && zoom < 12) || stateRedux.manuscritUniqueID !== -1 ? (
            <LineDraw
              coordsArray={connecteurs}
            />
          ) : null
        }
      </Map>
    </GridCenter>
  );
}

PigeonMap.propTypes = {
  children: PropTypes.any,
};
