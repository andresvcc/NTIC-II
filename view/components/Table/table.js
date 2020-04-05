import React, { useState } from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import tableStyle from './tableStyle';
import componentsSet from './components';
import iconsSet from './icons';
import actionsSet from './actions';
import editTableSet from './editTable';

const useStyles = makeStyles(tableStyle);

export default function MaterialTableMaster(props) {
  const {
    className,
    data,
    onAddRow,
    onEditRow,
    onDelRow,
  } = props;

  const classes = useStyles(tableStyle);
  const [group, setGroup] = useState(false);
  const [filter, setFilter] = useState(false);
  const [newRowPosition, setNewRowPosition] = useState('first');

  const groupClick = () => {
    setGroup(!group);
  };

  const filterClick = () => {
    setFilter(!filter);
  };

  const icons = iconsSet(classes, setNewRowPosition);
  const actions = actionsSet(classes, data, filterClick, groupClick);
  const editable = editTableSet(onAddRow, onEditRow, onDelRow);
  const components = componentsSet(classes, setNewRowPosition);

  return (
    <MaterialTable
      className={className}
      title="Editable Example"
      columns={data.columns}
      data={data.data}
      detailPanel={data.detailPanel}
      options={{
        filtering: filter,
        grouping: group,
        headerStyle: {
          fontWeight: 'bolder',
          background: '#f0f0f5',
          paddingLeft: '40px',
        },
        toolbarButtonAlignment: 'left',
        pageSize: 5,
        pageSizeOptions: [5, 10, 20, 50],
        doubleHorizontalScroll: false,
        addRowPosition: newRowPosition,
      }}

      localization={{
        header: {
          actions: ' ' //  actions: 'Any text'
        },

      }}

      icons={icons}
      actions={actions}
      editable={editable}
      components={components}
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
