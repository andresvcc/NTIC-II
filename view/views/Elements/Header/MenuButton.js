import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Button
} from '../../component';


const hoverMenuIcon = ({ hoverAction, configurations, setConfiguration }) => {
  if (hoverAction === true) {
    setConfiguration({
      ...configurations,
      color: 'silver',
      transition: 'background 0.3s ease-in-out',
    });
  } else {
    setConfiguration({
      ...configurations,
      color: 'white',
      transition: 'background 0.3s ease-in-out',
    });
  }
};

const clickDown = ({ configurations, setConfiguration }) => {
  setConfiguration({
    ...configurations,
    color: 'gray',
    transition: 'background 0.3s ease-in-out',
  });
};

const clickUp = ({ configurations, setConfiguration }) => {
  setConfiguration({
    ...configurations,
    color: 'white',
    transition: 'background 0.3s ease-in-out',
  });
};

export default function HeaderElement() {
  return (
    <Button
      config={{
        width: 50, background: 'transparent', color: 'white', border: 'none'
      }}
      clickDown={clickDown}
      clickUp={clickUp}
      hover={hoverMenuIcon}
    >
      <MenuIcon />
    </Button>
  );
}
