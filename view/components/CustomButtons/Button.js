import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';

function styleInit(config, style) {
  return {
    width: config.width || 150,
    height: config.height || 50,
    background: config.background || '#DDD',
    color: config.color || '#444',
    border: config.border || '2px solid #cacaca',
    cursor: 'pointer',
    verticalAlign: 'middle',
    textAlign: 'center',
    userSelect: 'none',
    display: config.display || 'flex',
    justifyContent: config.justifyContent || 'center',
    alignItems: config.alignItems || 'center',
    borderRadius: '15px',
    outline: 'none',
    fontSize: config.fontSize || 14,
    margin: config.margin || 5,
    ...style
  };
}

export default function Button(props) {
  const {
    onClick,
    style,
    className,
    config,
    children,
    hover,
    clickDown,
    clickUp,
    ...rest
  } = props;

  const [configurations, setConfiguration] = useState(styleInit(config, style));
  const [hoverAction, setHover] = useState(styleInit(false));

  useEffect(() => {
    if (hover !== undefined) {
      hover({
        style, hoverAction, configurations, setConfiguration
      });
    }
  }, [hoverAction]);

  const clickDownHandle = () => {
    if (clickDown !== undefined) clickDown({ style, configurations, setConfiguration });
  };

  const clickUpHandle = () => {
    if (clickUp !== undefined) clickUp({ style, configurations, setConfiguration });
  };

  const clickHandle = () => {
    if (onClick !== undefined) onClick({ style, configurations, setConfiguration });
  };

  return (
    <div
      className={className}
      role="button"
      onClick={clickHandle}
      tabIndex={0}
      onKeyPress={clickHandle}
      onMouseDown={clickDownHandle}
      onMouseUp={clickUpHandle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={configurations}
      {...rest}
    >
      {children}
    </div>
  );
}

Button.defaultProps = {
  config: {},
};

Button.propsTypes = {
  onClick: PropsTypes.func,
  style: PropsTypes.object,
  className: PropsTypes.any,
  config: PropsTypes.any,
  children: PropsTypes.any,
  hover: PropsTypes.func,
  clickDown: PropsTypes.func,
  clickUp: PropsTypes.func,
};
