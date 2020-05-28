import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

import {
  Table,
  SubTable,
  ChartArea,
  ChartCompare,
  redux
} from '../../component';


export default function TableArticles(props) {
  const {
    classes,
  } = props;

  const [stateRedux, dispatch] = redux();

  const [dataRows, setData] = useState([]);

  useEffect(() => {
    // console.log(stateRedux);
    const spliterData = [];

    stateRedux.librairiesData.forEach((element) => {
      if (element.type === 'polygon') {
        element.markers.forEach((markers) => {
          spliterData.push({
            id: markers.id,
            name: markers.name,
            owner: markers.type,
            country: markers.city.country_name,
            manuscrit: markers.manuscrit,
            city: markers.city.name,
            total: markers.manuscrit.length
          });
        });
      } else {
        spliterData.push({
          id: element.id,
          name: element.name,
          owner: element.type,
          country: element.city.country_name,
          manuscrit: element.manuscrit,
          city: element.city.name,
          total: element.manuscrit.length
        });
      }
    });

    setData(spliterData);
  }, [stateRedux.librairiesData]);


  const data1 = {
    columns: [
      { title: '', width: '5%', sorting: false },
      { title: 'ID', field: 'id', width: '10%' },
      { title: 'Name', field: 'name', width: '35%', },
      { title: 'Owner', field: 'owner', width: '10%', },
      { title: 'City', field: 'city', width: '20%', },
      { title: 'Country', field: 'country', width: '15%', },
      { title: 'Total', field: 'total', width: '5%', },
      { title: '', width: '100%', sorting: false }
    ],
    data: dataRows,
    detailPanel: [
      {
        openIcon: 'close',
        icon: 'toc',
        tooltip: 'Voir plus',
        render: (rowData, index) => (
          <div key={`${rowData.id}/${index + 1}/${Math.random()}`} style={{ padding: '20px' }}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <SubTable rowData={rowData} />
              </Grid>
              <Grid item xs={7}>
                <div style={{ position: 'relative' }}>
                  <Paper elevation={2} style={{ minHeight: '12vh', padding: '20px', paddingBottom: '40px' }}>
                    <ChartArea />
                    <ChartCompare />
                  </Paper>
                </div>

              </Grid>
            </Grid>
          </div>
        )
      },
    ]
  };

  const addRow = (data) => {
    console.log('addRow', data);
  };

  const editRow = (data) => {
    console.log('addRow', data);
  };

  const delRow = (data) => {
    console.log('addRow', data);
  };

  return (
    <Table
      data={data1}
      onAddRow={addRow}
      onEditRow={editRow}
      onDelRow={delRow}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
}

TableArticles.defaultProps = {
  classes: {}
};


TableArticles.propTypes = {
  classes: PropTypes.any
};
