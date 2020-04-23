import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 350 + theme.spacing(3) * 2,
    marginRight: '30px',
  },
  margin: {
    height: theme.spacing(3),
  },
  input: {
    color: 'white'
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: '#208080',
    height: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
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
  },
})(Slider);

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1550);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 900) {
      setValue(900);
    } else if (value > 2020) {
      setValue(2020);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>

          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 900,
              max: 2020,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs>
          <PrettoSlider
            step={10}
            min={900}
            max={2020}
            valueLabelDisplay="off"
            aria-label="pretto slider"
            value={typeof value === 'number' ? value : 900}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

      </Grid>
    </div>
  );
}
