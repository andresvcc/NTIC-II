const style = {
  root: {

  },
  container: {
    minHeight: '20px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  paralaxDiv: {
    width: '90%',
    position: 'absolute',
    top: '250px',
    left: '5%',
    rigth: '5%',
    zIndex: '50'
  },
  paralaxDiv2: {
    width: '90%',
    position: 'absolute',
    top: '600px',
    left: '5%',
    rigth: '5%'
  },
  bodyDiv: {
    position: 'relative',
    zIndex: '10',
    background: 'white',
    width: '100%',
  },
  title: {
    // maxWidth: '50%',
    color: 'white',
    fontWeight: 'bolder',
    fontSize: '5rem',
    textAlign: 'center',
    lineHeight: '90%'
  },
  chart: {
    background: '#000000',
    margin: '20px'
  },
  markerPoint: {
    width: 22,
    height: 22,
    color: '#FF3399',
    '&:hover': {
      width: 26,
      height: 26,
      position: 'relative',
      top: '-4px',
      left: '-2px',
      color: '#EE0078',
    }
  },
  markerPolygon: {

  }
};

export default style;


/*

font-family: 'Source Sans Pro', sans-serif;
font-family: 'Black Ops One', cursive;
font-family: 'Roboto', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Lato', sans-serif;

*/
