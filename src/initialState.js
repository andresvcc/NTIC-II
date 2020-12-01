const currentYear = new Date().getFullYear();

const initialState = {
  /* MAPS States */
  barreTemporelle: [800, currentYear],
  barreTemporelleDisable: false,
  manuscritUniqueID: -1,
  librairiesData: [],
  dialogItems: [],
  dataMap: {},
  barreTempInmediat: false,
  animated: false, // status of animation map
  fleches: true,
  dialog: false,
  initial: {
    center: [46.21200441225172, 6.146450212922588],
    zoom: 3,
  },
  center: {},
  markerSelect: 0,
  openSearch: false,
  hoverArrow: { visible: false, transfert: [] },
};

export default initialState;
