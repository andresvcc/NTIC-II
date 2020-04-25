import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'pigeon-overlay';
import {
  toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon
} from 'geolocation-utils';
import SvgIcon from '@material-ui/core/SvgIcon';
import parchemins from '../database/parchemins';
import groupFonction from '../functions/groupMarkers';

import {
  Map,
} from '../../component';

import Marker from './markers';


function zoomCalGroup(zoom) {
  const valueDis = zoom >= 18 ? { radio: 0, area: 10 }
    : zoom >= 17 ? { radio: 50, area: [20, 20] }
      : zoom >= 16 ? { radio: 100, area: [45, 10] }
        : zoom >= 15 ? { radio: 200, area: [90, 20] }
          : zoom >= 14 ? { radio: 400, area: [180, 50] }
            : zoom >= 13 ? { radio: 800, area: [320, 100] }
              : zoom >= 12 ? { radio: 1600, area: [640, 200] }
                : zoom >= 11 ? { radio: 3200, area: [1280, 600] }
                  : zoom >= 10 ? { radio: 6400, area: [2800, 1200] }
                    : zoom >= 9 ? { radio: 9000, area: [5600, 3400] }
                      : zoom >= 8 ? { radio: 12000, area: [13000, 3800] }
                        : zoom >= 7 ? { radio: 28000, area: [26000, 12600] }
                          : zoom >= 6 ? { radio: 46000, area: [32000, 20000] }
                            : zoom >= 5 ? { radio: 140000, area: [80000, 40000] }
                              : zoom >= 4 ? { radio: 140000, area: [200000, 40000] }
                                : zoom >= 3 ? { radio: 200000, area: [400000, 160000] }
                                  : { radio: 360000, area: [800000, 160000] };

  return valueDis;
}

const middle = (pos1, pos2, zoom) => {
  const location1 = toLatLon(pos1);
  const location2 = toLatLon(pos2.pos);
  const distance = headingDistanceTo(location1, location2);
  const ajustementDistance = pos2.type === 'polygon' ? zoomCalGroup(zoom).area[0] : zoomCalGroup(zoom).area[1];
  const medium = moveTo(location1, { heading: distance.heading, distance: distance.distance - ajustementDistance });
  return [medium.lon, medium.lat];
};

const LineDraw = ({
  zoom, mapState: { width, height }, latLngToPixel, coordsArray
}) => {
  const lines = [];


  let index = 0;
  coordsArray.some((parcour) => {
    const style = {
      stroke: parcour.color || '#208080',
    };

    const value = parcour.arr;

    if (value.length < 2) {
      return false;
    }

    let pixel = latLngToPixel(value[0].pos);
    let posxy = value[0].pos;

    for (let i = 1; i < value.length; i += 1) {
      const p2 = middle(posxy, value[i], zoom);
      const pixel2 = latLngToPixel(p2);
      lines.push(<line className="bar" key={`0${i}${index}`} x1={pixel[0]} y1={pixel[1]} x2={pixel2[0]} y2={pixel2[1]} style={style} markerEnd="url(#arrow)" />);
      pixel = pixel2;
      posxy = value[i].pos;
    }

    index += 1;
    return false;
  });

  return (
    <svg
      width={width}
      height={height}
      style={{ top: 0, left: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style>
        {`
        .bar{
          stroke:red;
          stroke-width: 3;
          stroke-dasharray: 5;
          stroke-linecap: round;
          stroke-opacity: 0.5;
        }
        .bar:hover {
            stroke: #208080;
            stroke-width: 4;
            stroke-dasharray: 0;
            stroke-opacity: 1;
        }`}
      </style>
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
          viewBox={`0 0 ${25 - zoom / 2} ${25 - zoom / 2}`}
        >
          <path
            d="M0,0 L0,6 L9,3 z"
            fill="black"
          />
        </marker>
      </defs>
      {lines}
    </svg>
  );
};

export default function MapDisplay(props) {
  const {
    classes
  } = props;

  const [dataMap, setDataMap] = useState({
    center: [46.194973026966494, 6.119696693281213],
    zoom: 5,
    bounds: { ne: Array(2), sw: Array(2) },
    initial: false
  });

  const [parcheminsData, setParcheminsData] = useState(parchemins);

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    console.log(dataMap);
  }, []);

  useEffect(() => {
    setParcheminsData([]);
    const distanceCal = zoomCalGroup(dataMap.zoom).radio;
    const newMapData = groupFonction(parchemins, distanceCal);
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
            <Overlay anchor={data.pos} offset={[10, data.type === 'polygon' ? 10 : 20]} key={data.id}>
              <Marker data={data} animated={animated} classes={classes} />
            </Overlay>
          ))
        }

        {<LineDraw zoom={dataMap.zoom} coordsArray={[{ color: 'blue', arr: [parcheminsData[0], parcheminsData[1]] }, { color: 'red', arr: [parcheminsData[0], parcheminsData[2]] }, { arr: [parcheminsData[0], parcheminsData[3]] }, { arr: [parcheminsData[0], parcheminsData[parcheminsData.length - 1]] }]} />}

      </Map>
      {dataMap.zoom}
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
