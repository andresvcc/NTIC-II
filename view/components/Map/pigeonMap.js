import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Map from 'pigeon-maps';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import redux from '../redux/redux';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },
}));

function mapTilerProvider(x, y, z) {
  // eslint-disable-next-line
    const s = String.fromCharCode(97 + (x + y + z) % 3);
  return `https://cartodb-basemaps-${s}.global.ssl.fastly.net/rastertiles/voyager_labels_under/${z}/${x}/${y}.png`;
}

export default function PigeonMap(props) {
  const [stateRedux, dispatch] = redux();
  const [cookies, setCookie] = useCookies(['name']);
  const classes = useStyles();

  const {
    children,
    setDataMap,
    animatedAction,
    initial,
  } = props;

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  }

  const [dataMap, setData] = useState(initial);

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
    dispatch({ state: 'openSearch', value: false });
    console.log('Map clicked!', latLng, pixel);
  };

  const handleAnimationStart = () => animatedAction(true);
  const handleAnimationStop = () => animatedAction(false);

  useEffect(() => {
    if (dataMap.initial === false) {
      setDataMap(dataMap);
    }
  }, [dataMap]);

  useEffect(() => {
    dispatch({ state: 'openSearch', value: false });

    setData({
      center: stateRedux.center.pos,
      zoom: stateRedux.center.zoom,
      bounds: dataMap.bounds,
      initial: dataMap.initial
    });
  }, [stateRedux.center]);


  return (
    <div name={cookies.name} onChange={onChange}>
      <div className={classes.root}>
        <Map
          provider={mapTilerProvider}
          limitBounds="edge"
          attribution={false}
          center={dataMap.center}
          attributionPrefix={false}
          zoom={dataMap.zoom}
          onBoundsChanged={handleBoundsChange}
          height={window.innerHeight - 5}
          boxClassname="pigeon-filters"
          onAnimationStart={handleAnimationStart}
          onAnimationStop={handleAnimationStop}
          minZoom={3}
          maxZoom={17}
          animated
          onClick={handleMapClick}
          dprs={[1, 2]}
        >
          {children}
        </Map>
      </div>
    </div>
  );
}

PigeonMap.defaultProps = {
  animatedAction: () => true,
  setDataMap: () => true,
  initial: {
    center: [46.21200441225172, 6.146450212922588],
    zoom: 3,
    bounds: { ne: Array(2), sw: Array(2) },
    initial: false
  }
};

PigeonMap.propTypes = {
  initial: PropTypes.object,
  children: PropTypes.any,
  setDataMap: PropTypes.func,
  animatedAction: PropTypes.func
};
