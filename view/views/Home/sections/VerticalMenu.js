import React from 'react';
import Collection from '../tables/collection';

import {
  VerticalTabs
} from '../../component';

export default function VerticalMenu(props) {
  return (
    <VerticalTabs
      top="80px"
      menuTabs={[
        {
          key: 0,
          label: 'Collection',
          data: <Collection />
        },
        {
          key: 1,
          label: 'library',
          data: <Collection />
        },
      ]}
    />
  );
}
