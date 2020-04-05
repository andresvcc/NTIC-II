import { container, primaryColor } from '../../styles/material-kit-react';

const verticalTabStyle = (theme) => ({
  '@global': {
    '.MuiTab-wrapper': {
      textAlign: 'start',
      alignItems: 'flex-start',
      '@media (min-width: 1100px)': {
        textAlign: 'center',
        alignItems: 'center',
      },
    },
  },
  verticalTab: {

  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',

  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    visibility: 'hidden',
    width: '0%',
    maxWidth: '200px',
    '@media (min-width: 850px)': {
      visibility: 'visible',
      width: '15%'
    },
  },
  tabLabel: {
    fontSize: '0.8rem',
    '@media (min-width: 940px)': {
      fontSize: '0.9rem',
    },
    '@media (min-width: 1050px)': {
      fontSize: '0.95rem',
    },
    '@media (min-width: 1350px)': {
      fontSize: '1.1rem',
    },
  },
  tabPanel: {
    width: '100%',
    paddingLeft: '0%',
    '@media (min-width: 850px)': {
      width: '85%',
      paddingLeft: '1%',
    },
  },
  title: {
    width: '100%',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center'
  },
  titleInside: {
    color: theme.palette.primary.text,
    padding: '10px',
    textTransform: 'uppercase',
  },
});

export default verticalTabStyle;
