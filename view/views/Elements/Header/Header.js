import React from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  HeaderLinks,
  Parallax,
  GridRow
} from '../../component';

import menuNavegation from './MenuNavegation';

const dashboardRoutes = [];

export default function HeaderElement(props) {
  const {
    classes,
    title,
    children,
    ...rest
  } = props;

  return (
    <div className={classes.root}>
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand=""
        urlIcon={`${__API__}/logo.svg`}
        rightLinks={<HeaderLinks color="black" menu={menuNavegation} />}
        fixed
      />

      <div style={{ position: 'relative', top: '0%' }}>
        {children}
      </div>
    </div>
  );
}

HeaderElement.defaultProps = {
  classes: {},
  title: 'TITLE UNDEFINED'
};

HeaderElement.propTypes = {
  classes: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any
};
