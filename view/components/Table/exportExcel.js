import React from 'react';
import ReactExport from 'react-export-excel';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

export default function name(props) {
  return (
    <ExcelFile element={props.button} filename="ExportExcel">
      <ExcelSheet data={props.bd.data} name="Employees">
        {
          props.bd.columns.map((value) => {
            if (value.title === 'Photo') return <ExcelColumn key="photoExcel" label="Photo" value="photo" />;
            return (
              <ExcelColumn key={`${value.title}Excel`} label={value.title} value={value.field} />
            );
          })
        }
      </ExcelSheet>
    </ExcelFile>
  );
}
