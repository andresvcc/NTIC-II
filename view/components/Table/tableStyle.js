const tableStyle = {
  '@global': {
    '.MuiTableCell-alignLeft': {
      textAlign: 'center',
      padding: '0px',
    },
    '.MuiTableCell-alignRight': {
      textAlign: 'center',
      padding: '0px',
    },
    '.tooltip .tooltiptext': {

    },
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center',
    color: 'white',
    margin: '5px',
    fontSize: '18px'
  },
  margin: {
    margin: '5px',
    background: '#0c731a',
    '&:hover': {
      background: '#07420f',
    }
  },
  toolbar: {
    position: 'absolute',
    zIndex: '12',
    bottom: '0%'
  },
  fab: {
    background: 'gray',
    borderRadius: '50%',
    width: '30px',
    height: '30px'
  }
};

export default tableStyle;
