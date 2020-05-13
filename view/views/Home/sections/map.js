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
  const [librairiesData, setLibrairiesData] = useState(Owner);
  const [animated, setAnimated] = useState(false);
  const [dataMap, setDataMap] = useState({});

  const update = (data) => {
    const yearFilter = [];
    /*
    Owner.map((value) => {
      if (value.start <= reduxStates.barreTemporelle && value.end >= reduxStates.barreTemporelle) {
        yearFilter.push(value);
      }
      return value;
    });
 */


    Owner.map((value, indexOwner) => {
      if (value.start <= reduxStates.barreTemporelle && value.end >= reduxStates.barreTemporelle) {
        value.manuscrit.map((_manuscrit) => {
          _manuscrit.intervalles.map((intervale) => {
            if (intervale.current && reduxStates.barreTemporelle === 2020) yearFilter.push({ ...value, id: indexOwner });
            else if (intervale.start <= reduxStates.barreTemporelle && intervale.end >= reduxStates.barreTemporelle) {
              yearFilter.push({
                ...value,
                id: indexOwner,
              });
            }
            return intervale;
          });
          return _manuscrit;
        });
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
          librairiesData.map((data, index) => (
            <Overlay anchor={data.pos} offset={[10, data.type === 'polygon' ? 10 : 20]} key={`${index + 1}-${data.id}`}>
              <Marker data={data} animated={animated} classes={classes} />
            </Overlay>
          ))
        }
        {
          <LineDraw
            coordsArray={grapheGenerator([[18, 42], [42, 20], [20, 22]], librairiesData)}
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
