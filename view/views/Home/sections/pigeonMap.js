import React, {
  Component, useState, useEffect, useCallback
} from 'react';
import 'babel-polyfill';

import { useCookies } from 'react-cookie';

import Map from 'pigeon-maps';
import PropTypes from 'prop-types';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

import {
  toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon
} from 'geolocation-utils';

import { makeStyles } from '@material-ui/core/styles';

import markers from './markers';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));


function mapTilerProvider(x, y, z) {
  // eslint-disable-next-line
  const s = String.fromCharCode(97 + (x + y + z) % 3);
  return `https://cartodb-basemaps-${s}.global.ssl.fastly.net/rastertiles/voyager_labels_under/${z}/${x}/${y}.png`;
}

function zoomCalGroup(zoom) {
  const valueDis = zoom > 17 ? { radio: 50, area: 30 }
    : zoom >= 16 ? { radio: 100, area: 35 }
      : zoom >= 15 ? { radio: 200, area: 35 }
        : zoom >= 14 ? { radio: 300, area: 35 }
          : zoom >= 13 ? { radio: 600, area: 40 }
            : zoom >= 12 ? { radio: 1000, area: 55 }
              : zoom >= 11 ? { radio: 3000, area: 55 }
                : zoom >= 10 ? { radio: 6000, area: 60 }
                  : zoom >= 9 ? { radio: 9000, area: 55 }
                    : zoom >= 8 ? { radio: 15000, area: 55 }
                      : zoom >= 7 ? { radio: 25000, area: 50 }
                        : zoom >= 6 ? { radio: 30000, area: 40 }
                          : zoom >= 5 ? { radio: 50000, area: 35 }
                            : zoom >= 4 ? { radio: 70000, area: 35 }
                              : zoom >= 3 ? { radio: 90000, area: 30 }
                                : { radio: 120000, area: 30 };

  return valueDis;
}

export default function PigeonMap(props) {
  const [cookies, setCookie] = useCookies(['name']);
  const classes = useStyles();
  const { initials } = props;

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  }

  const [markerDisplay, setMarkerDisplay] = useState(markers);
  const [zoomSize, setZoomSize] = useState({ radio: 50, area: 10 });

  const [animating, setAnimating] = useState(false);

  const [data, setData] = useState({
    center: [46.201364405672045, 6.146247963150643],
    zoom: 10,
    bounds: { ne: Array(2), sw: Array(2) },
    initial: false
  });

  const [dataDisplay, setDataDisplay] = useState({
    center: [46.201364405672045, 6.146247963150643],
    zoom: 10,
    bounds: { ne: Array(2), sw: Array(2) },
    initial: false
  });

  // event map zoom and move
  const handleBoundsChange = async ({ ...rest }) => {
    setData({
      center: rest.center,
      zoom: Math.round(rest.zoom),
      bounds: rest.bounds,
      initial: rest.initial
    });
  };

  const handleMapClick = ({ event, latLng, pixel }) => {
    console.log('Map clicked!', latLng, pixel);
  };

  const handleAnimationStart = () => setAnimating(true);
  const handleAnimationStop = () => setAnimating(false);


  const middle = (pos1, pos2) => {
    const location1 = toLatLon(pos1);
    const location2 = toLatLon(pos2);
    const distance = headingDistanceTo(location1, location2);
    const medium = moveTo(location1, { heading: distance.heading, distance: distance.distance / 2 });
    return [medium.lon, medium.lat];
  };


  function getPolygonCentroid(pts) {
    const nPts = pts.length;
    const first = pts[0].pos;
    const last = pts[nPts - 1].pos;

    if (nPts === 2) {
      const vector = headingDistanceTo(first, last);
      const medium = moveTo(first, { heading: vector.heading, distance: vector.distance / 2 });
      return medium;
    }

    let twicearea = 0;
    let x = 0;
    let y = 0;
    let p1;
    let p2;
    let f;

    // eslint-disable-next-line
    for (let i = 0, j = nPts - 1; i < nPts; j = i++) {
      p1 = pts[i].pos;
      p2 = pts[j].pos;
      f = p1[0] * p2[1] - p2[0] * p1[1];
      twicearea += f;
      x += (p1[0] + p2[0]) * f;
      y += (p1[1] + p2[1]) * f;
    }

    f = twicearea * 3;
    return [(x / f), (y / f)];
  }

  const dynamicMarkers = (markersIn, placeDistance) => {
    const markerGroup = [];
    const markersRes = [];

    markersIn.some((point, indexPoint, _arrPoint) => {
      const groupSize = markerGroup.length;
      if (groupSize < 1 && (point.type === 'point')) {
        markerGroup.push({
          type: 'polygon',
          id: `p${groupSize}`,
          pts: [point],
          pos: point.pos
        });
        return false;
      }

      if (groupSize < 1 && (point.type === 'polygon')) {
        markerGroup.push({
          type: 'polygon',
          id: `p${groupSize}`,
          pts: point.pts,
          pos: point.pos
        });
        return false;
      }

      markerGroup.some((polygon, indexPolygon, _arrPolygon) => {
        const pts = polygon.pts.map((value) => value.pos);

        if (pts.length > 2) {
          if (insidePolygon(point.pos, pts)) {
            return true;
          }
        }

        const vector = headingDistanceTo(polygon.pos, point.pos);

        if ((vector.distance <= placeDistance)) {
          const arr = polygon;
          arr.pts.push(point);
          arr.pos = getPolygonCentroid(arr.pts);
          return arr;
        }

        if ((indexPolygon === markerGroup.length - 1)) {
          markerGroup.push({
            type: 'polygon',
            id: `p${markerGroup.length}`,
            pts: [point],
            pos: point.pos
          });
          return true;
        }

        return false;
      });

      return false;
    });

    markerGroup.map((value, index) => {
      if (value.pts.length === 1) {
        const point = value.pts[0];
        markersRes.push(point);
        return value;
      }

      markersRes.push({
        type: 'polygon',
        id: `p${markersRes.length}`,
        pos: value.pos,
        pts: value.pts
      });

      return value;
    });


    // console.log(markersRes);
    return markersRes;
  };

  useEffect(() => {
    const distanceCal = zoomCalGroup(data.zoom);
    setZoomSize(distanceCal);

    if (dataDisplay.zoom <= data.zoom) {
      const group = dynamicMarkers(markers, distanceCal.radio);
      setDataDisplay(data);
      setMarkerDisplay(group);
    } else {
      const group = dynamicMarkers(markerDisplay, distanceCal.radio);
      setDataDisplay(data);
      setMarkerDisplay(group);
    }
  }, [data.zoom]);

  return (
    <div name={cookies.name} onChange={onChange}>
      <div style={{ textAlign: 'center' }}>
        <Map
          provider={mapTilerProvider}
          limitBounds="edge"
          center={dataDisplay.center}
          zoom={dataDisplay.zoom}
          defaultZoom={16}
          onBoundsChanged={handleBoundsChange}
          height={window.innerHeight - 50}
          boxClassname="pigeon-filters"
          onAnimationStart={handleAnimationStart}
          onAnimationStop={handleAnimationStop}
          minZoom={4}
          maxZoom={18}
          animated
          onClick={handleMapClick}
          dprs={[1, 2]}
        >
          {
            markerDisplay.map((value, index) => (
              value.type === 'polygon' ? (
                <Overlay anchor={value.pos} offset={[zoomSize.area / 2, zoomSize.area / 2]} key={`${value.id}:${value.pos[0]}`}>
                  <div>
                    <img src={`${__API__}/circle.svg`} width={zoomSize.area} height={zoomSize.area} alt="" />
                    <h6 style={{
                      width: '30px',
                      position: 'absolute',
                      top: '-40%',
                      left: '0%',
                      color: 'white'
                    }}
                    >
                      {`${value.pts.length}`}
                    </h6>
                  </div>
                </Overlay>
              ) : (
                <Overlay anchor={value.pos} offset={[10, 20]} key={value.id}>
                  <div>
                    <img src={`${__API__}/placeholder.svg`} width={20} height={20} alt="" />
                  </div>
                </Overlay>
              )

            ))
          }
        </Map>
      </div>
      {
        `zoomSize.area: ${zoomSize.area} `
      }
      /
      {
        ` zoomSize.radio: ${zoomSize.radio} `
      }
      /
      {
        ` dataDisplay.zoom:${dataDisplay.zoom} `
      }
    </div>
  );
}

PigeonMap.propTypes = {
  initials: PropTypes.any
};
