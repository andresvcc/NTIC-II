import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import Owner from '../database/owner';
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

  const [reduxStates, dispatch] = redux();
  const [librairiesData, setLibrairiesData] = useState(Owner);
  const [animated, setAnimated] = useState(false);
  const [dataMap, setDataMap] = useState({});

  const update = (data) => {
    const yearFilter = [];
    Owner.map((value) => {
      if (value.start <= reduxStates.barreTemporelle && value.end >= reduxStates.barreTemporelle) {
        yearFilter.push(value);
      }
      return value;
    });

    const distanceCal = zoomCalGroup(data.zoom);
    const newMapData = groupFonction(yearFilter, distanceCal);
    setLibrairiesData(newMapData);
  };

  useEffect(() => {
    update(dataMap);
  }, [reduxStates.barreTemporelle, dataMap]);

  return (
    <div className={classes.root}>
      <Map
        animatedAction={(data) => setAnimated(data)}
        setDataMap={(data) => setDataMap(data)}
      >
        {
          librairiesData.map((data) => (
            <Overlay anchor={data.pos} offset={[10, data.type === 'polygon' ? 10 : 20]} key={data.id}>
              <Marker data={data} animated={animated} classes={classes} />
            </Overlay>
          ))
        }
        {
          <LineDraw
            coordsArray={grapheGenerator([['m11', 'm12'], ['m34', 'm2'], ['m1', 'm32'], ['m32', 'm24'], ['m1', 'm2'], ['m1', 'm10'], ['m1', 'm8'], ['m2', 'm7'], ['m1', 'm16']], librairiesData)}
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
