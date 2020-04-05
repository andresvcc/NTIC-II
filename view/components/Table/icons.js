import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '@material-ui/core/Icon';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const handleChild = (e) => {
  e.stopPropagation();
  console.log('child');
};


const iconsSet = (classes, setNewRowPosition) => ({
  Add: () => (
    <AddCircleOutlineIcon
      fontSize="large"
      className={classes.addIcon}
      style={{
        background: '#0c731a', color: 'white', borderRadius: '50%'
      }}

      onMouseEnter={() => setNewRowPosition('first')}
    />
  ),
  Filter: React.forwardRef((props, ref) => (
    <div {...props} ref={ref}>
      <KeyboardArrowRightIcon />
    </div>
  ))

});

export default iconsSet;
