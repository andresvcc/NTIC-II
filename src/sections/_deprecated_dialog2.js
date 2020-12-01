import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MinimizeIcon from '@material-ui/icons/Minimize';
import owner from '../../database/owner';
import {
  redux, hookDeviceInfo, GridCenter, GridColon, GridRow, Button
} from '../component';

const styles = ({ device }) => ({
  paper: {
    position: 'absolute',
    zIndex: 99,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    background: '#333233',
    color: 'white',
    borderRadius: '5px 5px 0px 0px'
  }
});

function PaperComponent(props) {
  const device = hookDeviceInfo();
  const [stateRedux, dispatch] = redux();
  const { children, ...rest } = props;

  return (
    <>
      {
     stateRedux.dialog ? (
       <Draggable
         defaultPosition={{ x: device.width * 0.012, y: device.height * 0.225 }}
         bounds={{
           left: 0,
           top: device.height * 0.07,
           right: device.width * 0.781,
           bottom: device.height * 0.5252
         }}
       >
         {children}
       </Draggable>
     ) : null
   }
    </>
  );
}
const currentYear = new Date().getFullYear();

export default function DraggableDialog(props) {
  const { children } = props;
  const device = hookDeviceInfo();
  const style = styles({ device });
  const [stateRedux, dispatch] = redux();
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

  const handleClose = async () => {
    // console.log('close');
    await dispatch({ state: 'dialog', value: false });
    await dispatch({ state: 'dialogItems', value: [] });
  };

  useEffect(() => {
    if (stateRedux.dialog === true) {
      upMaximize(true);
    }
  }, [stateRedux.dialog]);

  return (
    <PaperComponent>
      <Paper
        elevation={3}
        style={style.paper}
      >
        <GridCenter width={41.45} height={0}>
          <GridCenter
            style={style.topBar}
            width={41.45}
            height={5}
            horizontal="right"
          >
            <GridCenter
              width={12}
              height={5}
              horizontal="left"
            >
              {`Total: ${stateRedux.dialogItems.length} manuscrits`}
            </GridCenter>
            <GridCenter
              width={8}
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
                  onClick={handleClose}
                >
                  <HighlightOffIcon />
                </Button>
              </GridRow>
            </GridCenter>
          </GridCenter>
          <GridCenter
            width={21.9}
            height={maximize ? 47.5 : 0.0001}
            style={{ transition: 'all .3s ease-in-out' }}
          >
            {
            maximizeView ? (
              <div style={{ overflow: 'auto', height: '100%', width: '100%' }}>
                <GridColon vertical="top">
                  <GridCenter width={17.9} height={7} />
                  {
                    stateRedux.dialogItems.map((val, i) => {
                      const intervale = `${val.possessions.start} -> ${val.possessions.end === 'current' ? currentYear : val.possessions.end}`;
                      return (
                        <div key={`dialogItem ${i + 1}`} style={{ margin: '.5vw' }}>
                          {`${val.ms_name} - ${intervale}, ${owner[val.possessions.owner].name}`}
                        </div>
                      );
                    })
                  }
                </GridColon>
              </div>
            ) : null
          }
          </GridCenter>
        </GridCenter>
      </Paper>
    </PaperComponent>
  );
}

/*

*/
