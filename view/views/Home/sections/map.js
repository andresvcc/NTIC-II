import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import parchemins from '../database/parchemins';
import groupFonction from '../functions/groupMarkers';

import {
  Map,
} from '../../component';

import Marker from './markers';

export default function MapDisplay(props) {
  const {
    classes
  } = props;

  const [dataMap, setDataMap] = useState({
    center: [46.194973026966494, 6.119696693281213],
    zoom: 16,
    bounds: { ne: Array(2), sw: Array(2) },
    initial: false
  });

  const [parcheminsData, setParcheminsData] = useState(parchemins);

  const animationEvent = (data) => {
    const newMapData = groupFonction(parcheminsData);
    setParcheminsData(newMapData);
  };


  return (
    <div className={classes.root}>
      <Map
        initial={dataMap}
        animatedAction={(data) => animationEvent(data)}
        setDataMap={(data) => setDataMap(data)}
      >
        {
          parcheminsData.map((data) => (
            <Overlay anchor={data.pos} offset={[10, 20]} key={data.id}>
              <Marker data={data} />
            </Overlay>
          ))
        }
      </Map>
    </div>
  );
}

MapDisplay.defaultProps = {
  classes: {}
};

MapDisplay.propTypes = {
  classes: PropTypes.any
};
