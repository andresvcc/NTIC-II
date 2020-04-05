import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  attributeCell: {
    fontWeight: '800',
    width: '40%',
  },
  valueCell: {
    fontWeight: '800',
    width: '30%',
  },
  iconCell: {
    width: '30%',
  },
  tableRow: {
    background: '#f0f0f5'
  },
  deleteIcon: {
    marginLeft: '20px'
  }
});

export default function SubTable(props) {
  const classes = useStyles();
  const {
    rowData
  } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.iconCell} />
            <TableCell className={classes.attributeCell}>Attribute name</TableCell>
            <TableCell className={classes.valueCell} align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.attribute.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <EditIcon />
                <DeleteOutlineIcon className={classes.deleteIcon} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SubTable.propTypes = {
  rowData: PropTypes.any
};
