import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import tableStyle from './tableStyle';
import componentsSet from './components';
import iconsSet from './icons';
import actionsSet from './actions';
import editTableSet from './editTable';
import redux from '../redux/redux';

const useStyles = makeStyles(tableStyle);

export default function MaterialTableMaster(props) {
  const {
    className,
    data,
    onAddRow,
    onEditRow,
    onDelRow,
    ...rest
  } = props;

  const [reduxState, dispatch] = redux();
  const classes = useStyles(tableStyle);
  const [group, setGroup] = useState(false);
  const [filter, setFilter] = useState(false);
  const [newRowPosition, setNewRowPosition] = useState('first');

  const groupClick = () => {
    setGroup(!group);
    if (reduxState.sizeInfoBar.group === false) {
      dispatch({ state: 'sizeInfoBar', value: { group: true, filter: reduxState.sizeInfoBar.filter, size: reduxState.sizeInfoBar.size + 60 } });
    } else {
      dispatch({ state: 'sizeInfoBar', value: { group: false, filter: reduxState.sizeInfoBar.filter, size: reduxState.sizeInfoBar.size - 60 } });
    }
  };

  const filterClick = () => {
    setFilter(!filter);
    if (reduxState.sizeInfoBar.filter === false) {
      dispatch({ state: 'sizeInfoBar', value: { filter: true, group: reduxState.sizeInfoBar.group, size: reduxState.sizeInfoBar.size + 65 } });
    } else {
      dispatch({ state: 'sizeInfoBar', value: { filter: false, group: reduxState.sizeInfoBar.group, size: reduxState.sizeInfoBar.size - 65 } });
    }
  };

  useEffect(() => {
    if (reduxState.pageSize > 5) setGroup(true);
    if (reduxState.pageSize <= 5) setGroup(false);
  }, [reduxState.pageSize]);


  const icons = iconsSet(classes, setNewRowPosition);
  const actions = actionsSet(classes, data, filterClick, groupClick, reduxState, dispatch);
  const editable = editTableSet(onAddRow, onEditRow, onDelRow);
  const components = componentsSet(classes, setNewRowPosition);

  return (
    <MaterialTable
      className={className}
      title=""
      columns={data.columns}
      data={data.data}
      detailPanel={data.detailPanel}
      options={{
        emptyRowsWhenPaging: true,
        filtering: filter,
        maxBodyHeight: `${(reduxState.pageSize > 5 ? 45 : (reduxState.sizeInfoBar.filter === true ? 8 : 0)) + 27}vh`,
        grouping: group,
        headerStyle: {
          fontWeight: 'bolder',
          background: '#f0f0f5',
        },
        toolbarButtonAlignment: 'left',
        pageSize: 15,
        pageSizeOptions: [15, 10, 5],
        doubleHorizontalScroll: false,
        addRowPosition: newRowPosition,
      }}

      // page={10}

      localization={{
        header: {
          actions: ' ' //  actions: 'Any text'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
        },

      }}


      icons={icons}
      actions={actions}
      // editable={editable}
      components={components}
      {...rest}
    />
  );
}

MaterialTableMaster.defaultProps = {
  className: {},
  data: {},
  onAddRow: (data) => console.log('not defined add', data),
  onEditRow: (data) => console.log('not defined edit', data),
  onDelRow: (data) => console.log('not defined del', data)
};

MaterialTableMaster.propTypes = {
  className: PropTypes.any,
  data: PropTypes.any,
  onAddRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDelRow: PropTypes.func
};
