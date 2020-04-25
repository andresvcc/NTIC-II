import React, { useState, useEffect, useRef } from 'react';
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
    : zoom >= 17 ? { radio: 50, area: [20, 10] }
      : zoom >= 16 ? { radio: 100, area: [45, 10] }
        : zoom >= 15 ? { radio: 200, area: [90, 10] }
          : zoom >= 14 ? { radio: 400, area: [180, 10] }
            : zoom >= 13 ? { radio: 800, area: [320, 10] }
              : zoom >= 12 ? { radio: 1600, area: [640, 10] }
                : zoom >= 11 ? { radio: 3200, area: [1280, 10] }
                  : zoom >= 10 ? { radio: 6400, area: [2800, 1200] }
                    : zoom >= 9 ? { radio: 9000, area: [5600, 3400] }
                      : zoom >= 8 ? { radio: 12000, area: [13000, 3800] }
                        : zoom >= 7 ? { radio: 32000, area: [26000, 12600] }
                          : zoom >= 6 ? { radio: 46000, area: [32000, 20000] }
                            : zoom >= 5 ? { radio: 140000, area: [80000, 40000] }
                              : zoom >= 4 ? { radio: 240000, area: [200000, 40000] }
                                : zoom >= 3 ? { radio: 480000, area: [400000, 160000] }
                                  : { radio: 960000, area: [800000, 160000] };

  return valueDis;
}

const LineDraw = ({
  mapState: {
    center, zoom, bounds, width, height
  }, latLngToPixel, coordsArray, animated
}) => {
  const update = () => {
    const lines = [];
    coordsArray.some((parcour, index) => {
      const value = parcour.arr;

      if (value.length < 2) {
        return false;
      }

      let pixel = latLngToPixel(value[0].pos);

      value.forEach((element, i) => {
        if (value[0].id !== element.id) {
          const pixel2 = latLngToPixel(element.pos);
          lines.push({
            key: `0${i + 1}${index + 1}`,
            x1: pixel[0],
            y1: pixel[1],
            x2: pixel2[0],
            y2: pixel2[1],
            mark: element.type === 'polygon' ? '' : 2,
            style: {
              stroke: parcour.color || '#208080',
            }
          });

          pixel = pixel2;
        }
      });

      return false;
    });

    return lines;
  };

  const [fleches, setFleches] = useState([]);

  useEffect(() => {
    setFleches(update());
  }, [bounds]);


  return (
    <svg
      width={width}
      height={height}
      style={{ top: 0, left: 0 }}
    >
      <style>
        {`
        .bar{
          stroke-width: 4;
          stroke-dasharray: 5.5;
          stroke-linecap: butt;
          stroke-opacity: 0.5;
        }
        .bar:hover {
            stroke-dasharray: 0;
            stroke-opacity: 0.8;
        }`}
      </style>
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="20"
          refY="5"
          orient="auto-start-reverse"
          viewBox={`0 0 ${30 + zoom / 2} ${30 + zoom / 2}`}
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            fill="#6d00b8"
          />
        </marker>
        <marker
          id="arrow2"
          markerWidth="10"
          markerHeight="10"
          refX="10"
          refY="5"
          orient="auto-start-reverse"
          viewBox="0 0 30 30"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            fill="#e5167f"
          />
        </marker>
      </defs>
      {fleches.map((value) => (
        <line className="bar" key={value.key} x1={value.x1} y1={value.y1} x2={value.x2} y2={value.y2} style={value.style} markerEnd={`url(#arrow${value.mark})`} />
      ))}
    </svg>
  );
};


function findL(id, arr) {
  let elemn;
  arr.some((element) => {
    if (element.type === 'polygon') {
      element.markers.some((subElement) => {
        if (subElement.id === id) {
          elemn = element;
          return true;
        }
        return false;
      });
      return false;
    }
    if (element.id === id) {
      elemn = element;
      return true;
    }
    return false;
  });
  return elemn;
}

function grapheGenerator(fleches, arr) {
  const fl = fleches.map((fleche) => {
    const p1 = findL(fleche[0], arr);
    const p2 = findL(fleche[1], arr);
    return {
      color: 'blue',
      arr: [p1, p2]
    };
  });
  return fl;
}

export default function MapDisplay(props) {
  const {
    classes
  } = props;

  const [parcheminsData, setParcheminsData] = useState(parchemins);
  const [animated, setAnimated] = useState(false);


  const update = (data) => {
    const distanceCal = zoomCalGroup(data.zoom).radio;
    const newMapData = groupFonction(parchemins, distanceCal);
    setParcheminsData(newMapData);
  };

  return (
    <div className={classes.root}>
      <Map
        animatedAction={(data) => setAnimated(data)}
        setDataMap={(data) => update(data)}
      >

        {
          parcheminsData.map((data) => (
            <Overlay anchor={data.pos} offset={[10, data.type === 'polygon' ? 10 : 20]} key={data.id}>
              <Marker data={data} animated={animated} classes={classes} />
            </Overlay>
          ))
        }

        {
          <LineDraw
            coordsArray={grapheGenerator([['m1', 'm31'], ['m1', 'm14'], ['m2', 'm3'], ['m1', 'm20'], ['m1', 'm17']], parcheminsData)}
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
