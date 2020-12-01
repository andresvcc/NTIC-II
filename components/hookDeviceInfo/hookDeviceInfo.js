import { useState, useEffect } from 'react';

import {
  mobileModel, mobileVendor, osName, deviceType
} from 'react-device-detect';

const calcul = (width, height) => {
  const a = width;
  const b = height;
  const c = Math.hypot(a, b);
  const hypt = c;
  const angle = (Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180) / Math.PI;
  const type = width < 880 ? 'mobile' : (deviceType || 'browser');
  const direction = a < b ? 'side' : 'aside';
  return {
    type, angle, hypt, direction, os: osName, device: `${mobileVendor} ${mobileModel}`
  };
};

export default function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      ...calcul(window.innerWidth, window.innerHeight)
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
