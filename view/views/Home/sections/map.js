import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import parchemins from '../database/parchemins';
import groupFonction from '../functions/groupMarkers';

import {
  Map,
} from '../../component';

import Marker from './markers';

function zoomCalGroup(zoom) {
  const valueDis = zoom >= 18 ? { radio: 0, area: 30 }
    : zoom >= 17 ? { radio: 50, area: 30 }
      : zoom >= 16 ? { radio: 100, area: 35 }
        : zoom >= 15 ? { radio: 150, area: 35 }
          : zoom >= 14 ? { radio: 200, area: 35 }
            : zoom >= 13 ? { radio: 300, area: 40 }
              : zoom >= 12 ? { radio: 1000, area: 55 }
                : zoom >= 11 ? { radio: 1500, area: 55 }
                  : zoom >= 10 ? { radio: 3000, area: 60 }
                    : zoom >= 9 ? { radio: 6000, area: 55 }
                      : zoom >= 8 ? { radio: 9000, area: 55 }
                        : zoom >= 7 ? { radio: 25000, area: 50 }
                          : zoom >= 6 ? { radio: 36000, area: 40 }
                            : zoom >= 5 ? { radio: 60000, area: 35 }
                              : zoom >= 4 ? { radio: 140000, area: 35 }
                                : zoom >= 3 ? { radio: 200000, area: 30 }
                                  : { radio: 360000, area: 30 };

  return valueDis;
}

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

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const distanceCal = zoomCalGroup(dataMap.zoom);
    const distanceMinGroup = distanceCal.radio;
    const newMapData = groupFonction(parchemins, distanceMinGroup);
    setParcheminsData(newMapData);
  }, [dataMap.zoom]);

  return (
    <div className={classes.root}>
      <Map
        initial={dataMap}
        animatedAction={(data) => setAnimated(!data)}
        setDataMap={(data) => setDataMap(data)}
      >
        {
          parcheminsData.map((data) => (
            <Overlay anchor={data.pos} offset={[10, 20]} key={data.id}>
              <Marker data={data} animated={animated} classes={classes} />
              <line
                x1={565}
                y1={533}
                x2={683}
                y2={577}
                style={{ stroke: 'rgb(255,0,0)', strokeWidth: 2 }}
              />
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


const Line = ({
  mapState: { width, height }, latLngToPixel, coordsArray, style = { stroke: 'rgb(255,0,0)', strokeWidth: 2 }
}) => {
  if (coordsArray.length < 2) {
    return null;
  }

  const lines = [];
  let pixel = latLngToPixel(coordsArray[0]);

  for (let i = 1; i < coordsArray.length; i + 1) {
    const pixel2 = latLngToPixel(coordsArray[i]);
    lines.push(<line key={i} x1={pixel[0]} y1={pixel[1]} x2={pixel2[0]} y2={pixel2[1]} style={style} />);
    pixel = pixel2;
  }

  return (
    <svg width={width} height={height} style={{ top: 0, left: 0 }}>
      {lines}
    </svg>
  );
};
