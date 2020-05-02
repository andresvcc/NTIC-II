import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import VerticalMenu from '../tables/collection';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: '1200',
    top: '100px',
  },
  verticalMenu: {
    height: '500'
  }
}));

export default function SimpleSlide() {
  const classes = useStyles();


  const [greetingStatus, displayGreeting] = React.useState(false);

  const handleChange = () => {
    displayGreeting((prev) => !prev);
  };

  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    position: 'fixed',
    top: greetingStatus ? window.innerHeight - 400 : window.innerHeight,
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <FormControlLabel
          control={<Switch checked={greetingStatus} onChange={handleChange} />}
          label="Show"
        />
        <animated.div className={classes.verticalMenu} style={contentProps}>
          <VerticalMenu />
        </animated.div>
      </div>
    </div>
  );
}
