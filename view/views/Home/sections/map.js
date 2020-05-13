import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import JsonDB from '../database/databaseController';
import groupFonction from '../functions/groupMarkers';

import {
  Map,
  redux,
  Marker,
  LineDraw,
} from '../../component';

import grapheGenerator from '../functions/grapheGenerator';
import zoomCalGroup from '../functions/zoomCalGroup';

export default function MapDisplay(props) {
  const {
    classes
  } = props;

  const {
    Owner
  } = JsonDB;

  const [reduxStates, dispatch] = redux();
  const [animated, setAnimated] = useState(false);
  const [dataMap, setDataMap] = useState({});

  const update = (data, year) => {
    const OwnerYear = Owner(year);
    const distanceCal = zoomCalGroup(data.zoom);
    const newMapData = groupFonction(OwnerYear, distanceCal);
    dispatch({ state: 'librairiesData', value: newMapData });
  };

  useEffect(() => {
    update(dataMap, reduxStates.barreTemporelle);
  }, [reduxStates.barreTemporelle, dataMap]);

  return (
    <div className={classes.root}>
      <Map
        animatedAction={(data) => setAnimated(data)}
        setDataMap={(data) => setDataMap(data)}
      >
        {
          reduxStates.librairiesData.map((data, index) => (
            <Overlay anchor={data.pos} offset={[10, data.type === 'polygon' ? 10 : 20]} key={`${index + 1}-${data.id}`}>
              <Marker data={data} animated={animated} classes={classes} />
            </Overlay>
          ))
        }
        {
          <LineDraw
            coordsArray={grapheGenerator([[18, 42], [42, 20], [20, 22]], reduxStates.librairiesData)}
          />
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

//
