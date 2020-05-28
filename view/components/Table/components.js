import React, { useState, useEffect, Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import MaterialTable, {
  MTableToolbar, MTableBodyRow, MTableGroupbar, MTableHeader, MTableCell
} from 'material-table';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Checkbox, TableCell } from '@material-ui/core';
import Button from '../CustomButtons/Button';


const addClick = (event) => {
  const add = event.actions[5];
  add.onClick();
};

const componentsSet = (classes, setNewRowPosition) => ({
  /* Toolbar: (props) => (
    <div>
      <MTableToolbar {...props} />
      <div className={classes.toolbar}>
        <Fab
          onMouseEnter={() => setNewRowPosition('last')}
          onClick={() => addClick(props)}
          className={classes.margin}
        >
          <Icon className={classes.iconRoot}>
            <img className={classes.imageIcon} src={`${__API__}/add.svg`} alt="Excel Icon" />
          </Icon>
        </Fab>
      </div>
    </div>
  ), */
  // Header: (props) => <MTableHeader {...props} />,
  Groupbar: (props) => (
    <div style={{ background: '#f7f7fd' }}>
      <MTableGroupbar {...props} />
    </div>
  ),

});


export default componentsSet;


/**
 *   Groupbar: (props) => (
    <div>
      <Button onClick={() => console.log(props)}>sfdg</Button>
      <Button onClick={() => props.onSortChanged()}>sfdg</Button>
    </div>
  )
 *
 */
