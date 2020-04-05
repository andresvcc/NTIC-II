import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import styles from './VerticalTabStyle';
import TabPanel from './TabsPanel';


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function styleTop(index, top) {
  return {
    style: {
      marginTop: `${index === 0 ? top : '10px'}`,
    }
  };
}

const useStyles = makeStyles((theme) => ({
  ...styles(theme)
}));

export default function VerticalTabs(props) {
  const {
    top,
    menuTabs
  } = props;


  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {
          menuTabs.map((tab) => (
            <Tab key={tab.key} label={tab.label} className={classes.tabLabel} {...a11yProps(tab.key)} {...styleTop(tab.key, top)} />
          ))
        }
      </Tabs>
      {
        menuTabs.map((tab) => (
          <TabPanel key={tab.key} value={value} index={tab.key} className={classes.tabPanel}>
            <div className={classes.title}>
              <Typography variant="h6" color="inherit" className={classes.titleInside}>
                {tab.label}
              </Typography>
            </div>
            {tab.data}
          </TabPanel>
        ))
      }
    </div>
  );
}

VerticalTabs.defaultProps = {
  top: '20px',
  menuTabs: [],
  color: 'black'
};

VerticalTabs.propTypes = {
  top: PropTypes.string,
  menuTabs: PropTypes.array
};
