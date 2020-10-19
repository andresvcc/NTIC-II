import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

const verticalAsing = (value) => {
  if (value === 'top') return 'flex-start';
  if (value === 'bottom') return 'flex-end';
  return 'center';
};

const horizontalAsing = (value) => {
  if (value === 'left') return 'flex-start';
  if (value === 'right') return 'flex-end';
  return 'center';
};

const styles = ({
  horizontal, vertical, dev, unsel
}) => ({
  GridCenter: {
    ...(unsel ? {} : { cursor: 'none' }),
    ...(unsel ? {} : { userSelect: 'none' }),
    ...(unsel ? {} : { outline: 'none' }),
    width: 'auto',
    height: '100%',
    border: 'none',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'flex',
    justifyContent: horizontalAsing(horizontal),
    alignItems: verticalAsing(vertical),
    background: dev ? 'red' : 'transparent'
  }
});

export default function GridCenter(props) {
  const {
    children, className, horizontal, vertical, dev, unsel, ...rest
  } = props;
  const style = styles({
    horizontal, vertical, dev, unsel
  });
  return (
    <div className={className || 'GridCenter'} style={style.GridCenter} {...rest}>
      {children}
    </div>
  );
}

GridCenter.defaultProps = {
  vertical: 'center',
  horizontal: 'center',
  dev: false
};

GridCenter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.string,
  hotizontal: PropTypes.string,
  dev: PropTypes.bool
};
