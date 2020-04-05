import React from 'react';
import PropTypes from 'prop-types';

import {
  Footer
} from '../../component';


export default function FooterElement(props) {
  const {
    classes,
    children,
    ...rest
  } = props;

  return (
    <Footer>
      <div {...rest}>
        {children}
      </div>
    </Footer>
  );
}

FooterElement.defaultProps = {
  classes: {},
};

FooterElement.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any
};
