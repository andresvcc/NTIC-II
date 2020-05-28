import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import VerticalMenu from '../tables/collection';

import {
  GridRow,
  GridContainer,
  GridItem,
  redux
} from '../../component';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: '1200',
    top: '100px',
  },
}));

export default function SimpleSlide() {
  const classes = useStyles();

  const [reduxState, dispatch] = redux();
  const [defaultSize, setDefaultSIze] = useState(410);
  const [infoBar, setInfoBar] = useState('...');

  const handleChange = async () => {
    await dispatch({ state: 'greetingStatus', value: false });
    // console.log('handleChange');
  };

  const maximize = async () => {
    setDefaultSIze(window.innerHeight - 64);
    await dispatch({ state: 'pageSize', value: 20 });
    // console.log('maximize');
  };

  const minimize = async () => {
    setDefaultSIze(410);
    await dispatch({ state: 'pageSize', value: 5 });
    // console.log('minimize');
  };

  useEffect(() => {
    setDefaultSIze(410);
    dispatch({ state: 'pageSize', value: 5 });
    // console.log('useEffect');
  }, [reduxState.greetingStatus]);

  useEffect(() => {
    setInfoBar(reduxState.infoBar);
  }, [reduxState.infoBar]);

  const contentProps = useSpring({
    opacity: reduxState.greetingStatus ? 1 : 0.65,
    // visibility: greetingStatus ? 'visible' : 'hidden',
    position: 'fixed',
    top: reduxState.greetingStatus ? window.innerHeight - defaultSize - (reduxState.pageSize > 5 ? 0 : reduxState.sizeInfoBar.size) : window.innerHeight - 20,
  });

  const tabBarStyle = {
    background: '#292e32',
    height: '30px',
    width: window.innerWidth,
    color: 'white',
  };

  const zoneBarIcon = {
    visibility: reduxState.greetingStatus ? 'visible' : 'hidden',
    cursor: 'pointer',
    verticalAlign: 'middle',
    textAlign: 'center',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '7px',
    color: 'white',
    marginTop: '15px'
  };

  const zoneBarInfo = {
    visibility: reduxState.greetingStatus ? 'hidden' : 'visible',
    cursor: 'pointer',
    verticalAlign: 'middle',
    textAlign: 'left',
    alignItems: 'left',
    margin: '-1px',
    marginLeft: '12px',
    userSelect: 'none',
    outline: 'none',
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <animated.div className={classes.verticalMenu} style={contentProps}>
          <div>
            <div style={tabBarStyle}>
              <GridContainer>
                <GridItem xs={11}>
                  <div style={zoneBarInfo} onClick={async () => { await dispatch({ state: 'greetingStatus', value: true }); }} onKeyPress={minimize} tabIndex={0} role="button">
                    {`${infoBar}`}
                  </div>
                </GridItem>
                <GridItem xs={1}>
                  <GridRow>
                    <div style={zoneBarIcon}>
                      { defaultSize <= 410 ? (
                        <KeyboardArrowUpIcon style={{ fontSize: '20px', border: '1px solid white' }} onClick={maximize} />
                      ) : (
                        <ExpandMoreIcon style={{ fontSize: '20px', border: '1px solid white' }} onClick={minimize} />
                      )}
                      <CloseIcon style={{ fontSize: '20px', border: '1px solid white' }} onClick={handleChange} />
                    </div>
                  </GridRow>
                </GridItem>
              </GridContainer>
            </div>
            <div style={{ width: '70%' }} />
            <GridContainer style={{ background: 'white', height: window.innerHeight - 64 }}>
              <GridItem xs={12}>
                <VerticalMenu />
              </GridItem>
            </GridContainer>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
