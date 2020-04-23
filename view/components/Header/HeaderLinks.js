/*eslint-disable*/
import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from 'prop-types';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

import {
  primaryColor,
} from '../../styles/material-kit-react';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";

import Button from '../CustomButtons/Button';

import styles from './headerLinksStyle';
import SettingsIcon from '@material-ui/icons/Settings';
import Slider from './Slider';

const useStyles = makeStyles(styles);



export default function HeaderLinks(props) {
  const {
    color,
    menu,
  }=props
  const classes = useStyles();

  const [valHover, setHover] = useState(false)

  return (
      <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Slider />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="white"
          textColor="white"
          type="text"
          className={classes.navLink}
          size={'m'}
          background="transparent"
          style={{
            fontSize: '14px',
            fontFamily: '"Black Ops One", cursive',
          }}
        >
           <SettingsIcon />
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  color: PropTypes.string,
  menu: PropTypes.array,
}