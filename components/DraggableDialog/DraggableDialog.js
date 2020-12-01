import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MinimizeIcon from '@material-ui/icons/Minimize';
import redux from '../redux/redux';
import hookDeviceInfo from '../hookDeviceInfo/hookDeviceInfo';
import GridCenter from '../Grid/GridCenterCube';
import GridRow from '../Grid/GridRow';
import Button from '../CustomButtons/Button';

const styles = ({ device }) => ({
  paper: {
    position: 'absolute',
    zIndex: 99,
  },
  topBar: {
    background: '#333233',
    color: 'white',
    borderRadius: '5px 5px 0px 0px'
  },
  gridChildren: {
    transition: 'all .3s ease-in-out'
  },
  maximize: {
    overflow: 'auto',
    height: '100%',
    width: '100%'
  }
});

function PaperComponent(props) {
  const device = hookDeviceInfo();
  const style = styles({ device });
  const [stateRedux, dispatch] = redux();
  const {
    children, upMaximize, maximize, proportionWidth, header, open, clickClose, defaultPosition, bounds, ...rest
  } = props;

  return (
    <>
      {
        open ? (
          <Draggable
            defaultPosition={defaultPosition}
            bounds={maximize ? {
              left: device.width * 0.01,
              top: device.height * 0.101,
              right: ((device.width / 100) * (100 - proportionWidth - 1)),
              bottom: device.height * 0.446
            } : {
              left: device.width * 0.01,
              top: device.height * 0.101,
              right: ((device.width / 100) * (100 - proportionWidth - 1)),
              bottom: device.height * 0.925
            }}
            handle="strong"
          >
            <Paper
              elevation={3}
              style={style.paper}
            >
              <div className="box no-cursor">
                <strong className="cursor">
                  <GridCenter
                    style={style.topBar}
                    width={proportionWidth}
                    height={5}
                    horizontal="right"
                  >
                    <GridCenter
                      width={proportionWidth * 0.75}
                      height={5}
                      horizontal="left"
                    >
                      {header}
                    </GridCenter>
                    <GridCenter
                      width={proportionWidth * 0.2}
                      height={5}
                      horizontal="right"
                    >
                      <GridRow horizontal="around">
                        <Button
                          config={{ color: 'white' }}
                          onClick={() => upMaximize(!maximize)}
                        >
                          <MinimizeIcon />
                        </Button>
                        <Button
                          config={{ color: 'white' }}
                          onClick={clickClose}
                        >
                          <HighlightOffIcon />
                        </Button>
                      </GridRow>
                    </GridCenter>
                  </GridCenter>
                </strong>
                {children}
              </div>
            </Paper>
          </Draggable>
        ) : null
      }
    </>
  );
}

export default function DraggableDialog(props) {
  const {
    children, proportionWidth, header, open, clickClose, defaultPosition, bounds
  } = props;
  const [stateRedux, dispatch] = redux();
  const device = hookDeviceInfo();
  const style = styles({ device });
  const [maximize, setMaximize] = useState(true);
  const [maximizeView, setMaximizeView] = useState(true);

  const upMaximize = async (value) => {
    if (value === false) {
      setMaximizeView(value);
      return setMaximize(value);
    }
    setMaximize(value);
    setTimeout(() => {
      setMaximizeView(value);
    }, 350);
  };

  useEffect(() => {
    if (stateRedux.dialog === true) {
      upMaximize(true);
    }
  }, [stateRedux.dialog]);

  return (
    <PaperComponent
      upMaximize={upMaximize}
      maximize={maximize}
      proportionWidth={proportionWidth}
      header={header}
      open={open}
      clickClose={clickClose}
      defaultPosition={defaultPosition}
      bounds={bounds}
    >
      <GridCenter width={proportionWidth} height={0}>
        <GridCenter
          width={proportionWidth * 0.98}
          height={maximize ? 47.5 : 0.0001}
          style={style.gridChildren}
        >
          {
            maximizeView ? (
              <div style={style.maximize}>

                {children}

              </div>
            ) : null
          }
        </GridCenter>
      </GridCenter>
    </PaperComponent>
  );
}
