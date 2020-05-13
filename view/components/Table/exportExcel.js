import React from 'react';
import ReactExport from 'react-export-excel';
import redux from '../redux/redux';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

export default function name(props) {
  const [stareRedux, dispatch] = redux();

  return (
    <ExcelFile element={props.button} filename="ExportExcel">
      <ExcelSheet data={props.bd.data} name={`Libraries ${stareRedux.barreTemporelle}`}>
        {
          (props.bd.columns).map((value, index) => {
            if (value.title === 'Photo') return <ExcelColumn key="photoExcel" label="Photo" value="photo" />;
            return (
              <ExcelColumn key={`${value.title}Excel`} label={value.title} value={value.field} />
            );
          })
        }
        <ExcelColumn key="manuscrit-Excel" label="manuscrit" value={(col) => `${JSON.stringify(col.manuscrit.map((value) => value.anderson_id))}`} />
      </ExcelSheet>
    </ExcelFile>
  );
}
