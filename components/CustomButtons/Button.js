import React, { useEffect, useState, useRef } from 'react';
import PropsTypes from 'prop-types';

function styleInit(config) {
  return {
    width: 'auto',
    height: 'auto',
    background: 'transparent',
    color: '#444',
    border: 'none',
    cursor: 'pointer',
    verticalAlign: 'middle',
    textAlign: 'center',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    fontSize: 14,
    ...config
    // margin: config.margin || 5,
  };
}

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

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

  const [configurations, setConfiguration] = useState(styleInit(config));
  const [hoverAction, setHover] = useState(styleInit(false));

  useDidMountEffect(() => {
    if (hover !== undefined) {
      hover({
        style, hoverAction, configurations, setConfiguration
      });
    }
  }, [hoverAction]);

  useEffect(() => {
    setConfiguration({ ...configurations, ...config });
  }, [config]);

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
      style={{ ...configurations, ...style }}
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
