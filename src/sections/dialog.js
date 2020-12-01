import React, { useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Divider from '@material-ui/core/Divider';
import TimelineIcon from '@material-ui/icons/Timeline';
import IconButton from '@material-ui/core/IconButton';
import owner from '../../database/owner';
import manuscrits from '../../database/manuscrit';

import {
  redux,
  hookDeviceInfo,
  GridCenter,
  GridColon,
  GridRow,
  DraggableDialog,
  Button,
} from '../component';

const styles = ({ device }) => ({
  root: {

  },
  Button: {
    background: 'white',
    borderRadius: '50%',
    margin: '0px',
    width: '0.8vw',
    height: '0.8vw',
    border: 'solid 0.15vw #be61ff',
    fontSize: '0.7em'
  },
  line: {
    height: '100%',
    width: '3vw',
  },
  biblioSpan: {
    color: '#e5187f',
    fontSize: '0.9em'
  },
  date: {
    width: '8vw',
    height: '2vh',
    color: 'grey',
    fontSize: '0.9em'
  }
});

const currentYear = new Date().getFullYear();

const findManuscritby = (val) => {
  const filter = manuscrits.filter((manuscrit) => manuscrit.anderson_id === val.anderson_id);
  const flatFilter = filter.length > 0 ? filter[0] : { possessions: [] };
  const manuscrit = { ...val, possessions: flatFilter.possessions };
  return manuscrit;
};

const filterDupl = (array) => {
  const hash = {};
  const arrayFilter = array.filter((current) => {
    const exists = !hash[current.anderson_id];
    hash[current.anderson_id] = true;
    return exists;
  });

  return arrayFilter;
};

function TimeLine(props) {
  const { data } = props;
  const device = hookDeviceInfo();
  const proportionWidth = device.type === 'mobile' ? 98 : device.width < 1100 ? 55 : device.width < 1400 ? 45 : 35;
  const style = styles({ device });

  return (
    <GridCenter width={proportionWidth * 0.90} height={10}>
      <GridRow horizontal="left">
        <ScrollContainer hideScrollbars={false} vertical horizontal className="scroll-container">
          <GridRow style={{ width: `${data.possessions.length * 10}vw` }} horizontal="between">
            {data.possessions.map((interval, i) => (
              <GridCenter width={10} height={10} key={`${i + 1}`}>
                <GridColon>
                  <GridCenter width={9} height={4} style={style.biblioSpan} vertical="bottom">
                    <span>
                      {
                          interval.nameOwner
                        }
                    </span>
                  </GridCenter>

                  <Button config={style.Button} />
                  {data.possessions.length > i + 1 ? (
                    <div
                      style={{
                        position: 'relative',
                        top: 0,
                        left: 0
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-0.55vw',
                          left: '1vw',
                          width: '8vw',
                          background: '#be61ff'
                        }}
                      >
                        <Divider />
                      </div>
                    </div>
                  ) : null}
                  <GridCenter width={9} height={4} style={style.date} vertical="bottom">
                    <span>
                      {`${interval.start}-${interval.end === 'current' ? currentYear : interval.end}`}
                    </span>
                  </GridCenter>
                </GridColon>
              </GridCenter>
            ))}
          </GridRow>
        </ScrollContainer>
      </GridRow>
    </GridCenter>
  );
}

export default function Dialog(props) {
  const device = hookDeviceInfo();
  const proportionWidth = device.type === 'mobile' ? 98 : device.width < 1100 ? 55 : device.width < 1400 ? 45 : 35;
  const style = styles({ device });
  const [stateRedux, dispatch] = redux();

  const handleClose = async () => {
    await dispatch({ state: 'dialog', value: false });
    await dispatch({ state: 'dialogItems', value: [] });
    await dispatch({ state: 'manuscritUniqueID', value: -1 });
  };

  const manuscritsTotalFlat = filterDupl(stateRedux.dialogItems || []);
  // console.log(manuscritsTotalFlat);

  if (device.type === 'mobile') return null;

  const selectParcours = (manuscritID) => {
    if (stateRedux.manuscritUniqueID !== manuscritID) dispatch({ state: 'manuscritUniqueID', value: parseInt(manuscritID, 10) });
    else dispatch({ state: 'manuscritUniqueID', value: parseInt(-1, 10) });
  };

  return (
    <DraggableDialog
      proportionWidth={proportionWidth}
      header={`Total: ${manuscritsTotalFlat.length} manuscrits`}
      open={stateRedux.dialog}
      clickClose={handleClose}
      defaultPosition={{ x: device.width * 0.01, y: device.height * 0.245 }}
    >
      <GridColon vertical="top">
        {
            manuscritsTotalFlat.map((val, i) => {
              const intervale = `${val.interval.start} -> ${val.interval.end === 'current' ? currentYear : val.interval.end}`;
              return (
                <GridCenter
                  width={proportionWidth * 0.92}
                  height={20}
                  key={`dialogItem ${i + 1}`}
                >
                  <GridCenter
                    width={proportionWidth * 0.90}
                    height={18.5}
                    style={{
                      borderRadius: '5px',
                      boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.64)',
                      paddingLeft: '1vw'
                    }}
                  >
                    <GridCenter
                      width={proportionWidth * 0.90}
                      height={17}
                      vertical="top"
                    >
                      <GridColon
                        horizontal="left"
                        vertical="around"
                        style={{ height: '100%' }}
                        dev
                      >
                        <GridRow
                          horizontal="between"
                          style={{ width: '90%' }}
                        >
                          <span>{`Manuscrit: ${val.ms_name}`}</span>
                          <div>
                            <GridRow
                              horizontal="between"
                              style={{ width: '120%' }}
                            >
                              <span>{`ID: ${val.anderson_id}`}</span>

                              <IconButton onClick={() => selectParcours(val.anderson_id)}>
                                <TimelineIcon style={{ color: stateRedux.manuscritUniqueID === val.anderson_id ? '#208080' : 'grey' }} />
                              </IconButton>
                            </GridRow>
                          </div>
                        </GridRow>
                        <TimeLine data={findManuscritby(val)}>
                          timeLine
                        </TimeLine>
                      </GridColon>
                    </GridCenter>
                  </GridCenter>
                </GridCenter>
              );
            })
          }
      </GridColon>
    </DraggableDialog>
  );
}
