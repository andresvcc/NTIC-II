import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import ValueLabel from '@material-ui/core/Slider/ValueLabel';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import redux from '../redux/redux';
import hookDevice from '../hookDeviceInfo/hookDeviceInfo';
import GridCenter from '../Grid/GridCenterCube';
import ForwardIcon from './forwardIcon';
import ProductionIcon from './productionIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '55vw',
    marginRight: '30px',
  },
  margin: {
    height: theme.spacing(3),
  },
  input: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center'
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
    marginTop: -9,
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
    height: 15,
    borderRadius: 15,
  },
  rail: {
    height: 15,
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
        color: 'white',
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

export default function InputSlider() {
  const currentYear = new Date().getFullYear();
  const minYear = 800;

  const device = hookDevice();

  const [stateRedux, dispatch] = redux();
  const classes = useStyles();
  const [actif, setActif] = useState(false);
  const [value, setValue] = useState([minYear, currentYear]);

  const commit = async (val) => {
    const newValueBarre = val || value;
    // const x = val ? console.log('newValueBarre') : console.log('value');
    await dispatch({ state: 'barreTemporelle', value: newValueBarre });
    await dispatch({ state: 'dialog', value: false });
    await dispatch({ state: 'dialogItems', value: [] });
  };

  const handleSliderChange = async (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChangeMin = (event) => {
    const newMax = event.target.value === '' ? '' : Number(event.target.value);
    setValue([newMax, value[1]]);
    if (newMax !== '') commit([newMax, value[1]]);
  };

  const handleInputChangeMax = (event) => {
    const newMax = event.target.value === '' ? '' : Number(event.target.value);
    setValue([value[0], newMax]);
    if (newMax !== '') commit([value[0], newMax]);
  };

  const handleBlurMin = () => {
    if (value[0] < minYear) {
      setValue([minYear, value[1]]);
    } else if (value[0] > currentYear) {
      setValue([currentYear, value[1]]);
    }
  };

  const handleBlurMax = () => {
    if (value[1] < minYear) {
      setValue([value[0], minYear]);
    } else if (value[1] > currentYear) {
      setValue([value[0], currentYear]);
    }
  };

  useEffect(() => {
    if (stateRedux.barreTempInmediat) dispatch({ state: 'barreTemporelle', value });
  }, [value]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center" justify="flex-end">

        <Grid item xs>
          <GridCenter width="auto" height={device.type === 'browser' ? 6 : 8} vertical="bottom">
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
              onChangeCommitted={stateRedux.barreTemporelleDisable ? null : () => commit([value[0] === '' ? minYear : value[0], value[1] === '' ? currentYear : value[1]])}
              aria-labelledby="range-slider"
            />
          </GridCenter>
        </Grid>

        {
           device.type === 'browser' ? (
             <Grid item>
               <GridCenter width={1} height={6} vertical="bottom" />
             </Grid>
           ) : null
        }

        {
           device.type === 'browser' ? (
             <Grid item>
               <GridCenter width={4} height={7} vertical="bottom">
                 <ForwardIcon config={{ size: -30 }} setValue={setValue} commit={commit} value={value} />
               </GridCenter>
             </Grid>
           ) : null
        }

        {
           device.type === 'browser' ? (
             <Grid item>
               <GridCenter width={4} height={7} vertical="bottom">
                 <ProductionIcon config={{ size: -30 }} setValue={setValue} commit={commit} value={value} />
               </GridCenter>
             </Grid>
           ) : null
        }

        {
          device.type === 'browser' ? (
            <Grid item>
              <GridCenter width={5} height={6} vertical="bottom">
                <Input
                  disableUnderline
                  className={classes.input}
                  value={value[0]}
                  margin="none"
                  onChange={handleInputChangeMin}
                  onBlur={handleBlurMin}
                  inputProps={{
                    step: 10,
                    min: minYear,
                    max: currentYear,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    style: { textAlign: 'center', padding: '2px' }
                  }}
                  style={{ border: 'none', background: 'white', color: 'black' }}
                />
              </GridCenter>
            </Grid>
          ) : null
        }

        {
           device.type === 'browser' ? (
             <Grid item>
               <GridCenter width={2} height={7} vertical="bottom">
                 <ArrowRightAltIcon style={{ fontSize: '2em' }} />
               </GridCenter>
             </Grid>
           ) : null
        }

        {
           device.type === 'browser' ? (
             <Grid item>
               <GridCenter width={5} height={6} vertical="bottom">
                 <Input
                   disableUnderline
                   className={classes.input}
                   value={value[1]}
                   margin="none"
                   onChange={handleInputChangeMax}
                   onBlur={handleBlurMax}
                   inputProps={{
                     step: 10,
                     min: minYear,
                     max: currentYear,
                     type: 'number',
                     'aria-labelledby': 'input-slider',
                     style: { textAlign: 'right', padding: '2px' }
                   }}
                   style={{ border: 'none', background: 'white', color: 'black' }}
                 />
               </GridCenter>
             </Grid>
           ) : null
        }
      </Grid>
    </div>
  );
}

/*

*/
