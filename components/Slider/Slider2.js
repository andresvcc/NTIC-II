import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import ValueLabel from '@material-ui/core/Slider/ValueLabel';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from '@material-ui/core/IconButton';
import TimelineIcon from '@material-ui/icons/Timeline';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import NavigationIcon from '@material-ui/icons/Navigation';
import ProductionIcon from './productionIcon';
import ForwardIcon from './forwardIcon';
import GridCenter from '../Grid/GridCenterCube';
import GridRow from '../Grid/GridRow';
import hookDevice from '../hookDeviceInfo/hookDeviceInfo';
import redux from '../redux/redux';
import cities from '../../database/cities';
import countries from '../../database/countries';
import GridColon from '../Grid/GridColon';

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
  input: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center'
  },
  autocomplete: {
    marginLeft: '2px',
    flex: 1,
    width: '120%',
  },
  iconButton: {
    padding: 5,
  },
  iconButton2: {
    padding: 5,
    position: 'relative',
    // left: '1vw'
  },
  divider: {
    height: 28,
    margin: 5,
    color: 'red'
  },
  inputSearch: {
    position: 'relative',
    width: '240%',
    zIndex: 0,
    left: 0,
  },
  inputSearchMobile: {
    position: 'relative',
    width: '180%',
    zIndex: 0,
    left: 0,
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: '#208080',
    height: 10,
  },
  thumb: {
    height: 35,
    width: 35,
    backgroundColor: '#fff',
    border: '3px solid currentColor',
    marginTop: -14,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 2,
      marginRight: 2,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 15,
  },
  rail: {
    height: 8,
    borderRadius: 15,
    color: '#6d6c6d',
    opacity: 1,
  },
})(Slider);

const StyledValueLabel = withStyles({
  offset: {
    top: 40,
  },
  circle: {
    borderRadius: '50% 0% 50% 50%',
    transform: 'scale(1.3) rotate(-45deg)'
  },
})(ValueLabel);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span style={{
        position: 'absolute',
        top: '-2.6vh',
        color: 'grey',
      }}
      >
        {props['aria-valuenow']}
      </span>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function sortByProperty(property) {
  return (a, b) => {
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;
    return 0;
  };
}

// const allCountries = countries.filter((country) => country.name !== undefined);
// const allData = allCountries.concat(cities);

function ComboBox() {
  const [stateRedux, dispatch] = redux();
  const [dataRows, setData] = useState([]);
  const classes = useStyles();
  const device = hookDevice();

  useEffect(() => {
    const spliterData = [];
    stateRedux.librairiesData.forEach((element) => {
      if (element.type === 'polygon') {
        element.markers.forEach((markers) => {
          spliterData.push({
            id: markers.id,
            name: markers.name,
            type: markers.type,
            pos: markers.pos,
            city: cities[markers.city].name,
            country: cities[markers.city].country_name
          });
        });
      } else {
        spliterData.push({
          id: element.id,
          name: element.name,
          type: element.type,
          pos: element.pos,
          city: cities[element.city].name,
          country: cities[element.city].country_name
        });
      }
    });
    // const allDataCont = allData.concat(spliterData);
    const allDataSort = spliterData.sort(sortByProperty('name'));
    // console.log(allDataSort);
    setData(allDataSort);
  }, [stateRedux.librairiesData]);

  const zoomClickTraslate = async (data) => {
    await dispatch({ state: 'openSearch', value: false });
    if (data.pos !== undefined) {
      const placeZoom = data.type === 'country' ? 6 : data.type === 'region' ? 9 : 10;
      await dispatch({
        state: 'center',
        value: {
          pos: data.pos || [0, 0],
          zoom: placeZoom
        }
      });
    } else {
      console.log('place not gps detected');
    }
  };

  return (
    <Autocomplete
      id="combo-box"
      className={classes.autocomplete}
      open={stateRedux.openSearch}
      options={dataRows}
      onOpen={async () => await dispatch({ state: 'openSearch', value: true })}
      clearOnBlur
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => `${device.width > 460 ? option.name.slice(0, 25) : `${option.name.slice(0, 12)}...`}`}
      renderOption={(option) => (
        <div>
          <span style={{ color: '#e5187f' }}>{`${option.name.slice(0, 25)}`}</span>
          <span style={{ color: 'grey' }}>{` ⬩ ${option.city} -  ${option.country}`}</span>
        </div>
      )}
      onChange={(event, value) => (value ? zoomClickTraslate(value) : true)}
      onKeyPress={(ev, value) => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
        }
      }}
      renderInput={(params) => (
        <InputBase
          className={device.type === 'browser' ? classes.inputSearch : classes.inputSearchMobile}
          ref={params.InputProps.ref}
          placeholder={device.width > 460 ? 'Search on the Achilleid' : 'Search'}
          inputProps={params.inputProps}
          autoFocus
        />
      )}
    />
  );
}

export default function InputSlider() {
  const currentYear = new Date().getFullYear();
  const minYear = 800;
  const [stateRedux, dispatch] = redux();
  const device = hookDevice();
  const classes = useStyles();
  const [actif, setActif] = useState(false);
  const [value, setValue] = useState([minYear, currentYear]);

  const width = device.type === 'mobile' ? 98 : device.width < 1100 ? 55 : device.width < 1400 ? 45 : 35;
  const heigth = 5;

  const commit = async (val) => {
    setValue(val);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch({ state: 'barreTemporelle', value });
  }, [value]);

  useEffect(() => {
    dispatch({ state: 'dialog', value: false });
    dispatch({ state: 'dialogItems', value: [] });
  }, [value]);

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="flex-end">
        <Grid item>
          <GridCenter width={1} height={6.5} />
        </Grid>
        <Grid item xs>
          <GridCenter width="auto" height={6.5} vertical="bottom">
            <PrettoSlider
              valueLabelDisplay="auto"
              step={10}
              style={{ color: stateRedux.barreTemporelleDisable ? '#aaa' : '#208080', }}
              // disabled={stateRedux.barreTemporelleDisable}
              min={minYear}
              max={currentYear}
              ThumbComponent={AirbnbThumbComponent}
              ValueLabelComponent={StyledValueLabel}
              value={[value[0] === '' ? minYear : value[0], value[1] === '' ? currentYear : value[1]]}
              onChange={stateRedux.barreTemporelleDisable ? null : handleSliderChange}
              // onChangeCommitted={stateRedux.barreTemporelleDisable ? null : () => commit([value[0] === '' ? minYear : value[0], value[1] === '' ? currentYear : value[1]])}
              aria-labelledby="range-slider"
            />
          </GridCenter>
        </Grid>
        <Grid item>
          <GridCenter width={device.type === 'browser' ? 1.5 : 3} height={7} />
        </Grid>
      </Grid>
      <GridCenter width={width * 0.99} height={heigth} horizontal="left">
        <GridRow horizontal="left">
          <GridCenter width={1} />
          <Divider className={classes.divider} orientation="vertical" />
          {
            device.width > 460 ? (
              <GridCenter width={width * 0.13} height={heigth} vertical="bottom" style={{ position: 'relative', zIndex: 99 }}>
                <GridColon>
                  <TimelineIcon
                    onClick={() => dispatch({ state: 'fleches', value: !stateRedux.fleches })}
                    style={{
                      color: stateRedux.fleches ? '#166969' : '#aaaaaa',
                      fontSize: '2em'
                    }}
                  />
                  {
                device.type === 'browser' ? (
                  <span
                    style={{
                      color: '#237171ab',
                      fontSize: '0.8em'
                    }}
                  >
                    arrows
                  </span>
                ) : null
              }
                </GridColon>
              </GridCenter>
            ) : null
          }
          <GridCenter width={width * 0.13} height={heigth} vertical="top" style={{ position: 'relative', zIndex: 99 }}>
            <ForwardIcon setValue={setValue} commit={commit} value={value} />
          </GridCenter>
          <GridCenter width={width * 0.15} height={heigth} vertical="top" style={{ position: 'relative', zIndex: 99 }}>
            <ProductionIcon setValue={setValue} commit={commit} value={value} />
          </GridCenter>
          <Divider className={classes.divider} orientation="vertical" />
          <GridCenter width={width * 0.45} style={{ border: 'solid 1px #aaaaaa50' }}>
            <ComboBox />
            <IconButton className={classes.iconButton2} aria-label="search">
              <SearchIcon />
            </IconButton>
          </GridCenter>
          <Divider className={classes.divider} orientation="vertical" />
        </GridRow>
      </GridCenter>
      <GridCenter width={width * 0.99} height={1} />
    </div>
  );
}
