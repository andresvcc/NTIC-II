import React from 'react';
import Icon from '@material-ui/core/Icon';
import { CSVLink, CSVDownload } from 'react-csv';
import ExportExel from './exportExcel';


const dataToFormat = (BD) => {
  const {
    data,
    columns
  } = BD;

  const result = [];

  columns.map((value) => {
    result.push(value.field);
    return value;
  });

  const res = [];
  res.push(result);
  data.map((value) => {
    const ln = [];
    result.map((dataIn) => {
      ln.push(value[dataIn]);
      return dataIn;
    });
    res.push(ln);
    return value;
  });

  return res;
};


const actionsSet = (classes, data, filterClick, groupClick) => [
  (rowDatax) => ({
    icon: 'list',
    tooltip: 'Extension',
    onClick: (event, rowData) => { if (data.action !== undefined) data.action(event, rowData); },
    disabled: rowDatax.setParameters === false
  }),
  {
    icon: () => (
      <div className={classes.fab} style={{ background: '#2678b5' }}>
        <Icon className={classes.iconRoot}>
          <img className={classes.imageIcon} src={`${__API__}/scheme.svg`} alt="Excel Icon" />
        </Icon>
      </div>
    ),
    tooltip: 'group',
    isFreeAction: true,
    onClick: groupClick
  },
  {
    icon: () => (
      <div className={classes.fab} style={{ background: '#e91e63' }}>
        <Icon className={classes.iconRoot}>
          <img className={classes.imageIcon} src={`${__API__}/filter.svg`} alt="Excel Icon" />
        </Icon>
      </div>
    ),
    tooltip: 'filter',
    isFreeAction: true,
    onClick: filterClick
  },
  {
    icon: () => (
      <ExportExel
        bd={data}
        button={(
          <Icon classes={{ root: classes.iconRoot }} style={{ fontSize: '28px' }}>
            <img className={classes.imageIcon} src={`${__API__}/iconExcel.svg`} alt="Excel Icon" />
          </Icon>
      )}
      />
    ),
    tooltip: 'export Excel',
    isFreeAction: true,
    onClick: () => console.log('Export Excel')
  },
  {
    icon: () => (
      <CSVLink data={dataToFormat(data)} filename="ExportCSV.csv">
        <Icon classes={{ root: classes.iconRoot }} style={{ fontSize: '28px' }}>
          <img className={classes.imageIcon} src={`${__API__}/csv.svg`} alt="Excel Icon" />
        </Icon>
      </CSVLink>
    ),
    tooltip: 'Export Csv',
    isFreeAction: true,
    onClick: () => console.log('Export CSV')
  }
];


export default actionsSet;
