
const editTableSet = (onAddRow, onEditRow, onDelRow) => ({
  isEditable: (rowData) => (rowData.editable !== false), // only name(a) rows would be editable
  isDeletable: (rowData) => (rowData.deletable !== false), // only name(a) rows would be deletable
  onRowAdd: (newData) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(onAddRow({ newData }));
    }, 1000);
  }),
  onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(onEditRow({ newData, oldData }));
    }, 1000);
  }),
  onRowDelete: (oldData) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(onDelRow(oldData));
    }, 1000);
  })
});


export default editTableSet;
