import React, { useEffect, useState } from 'react';
import citiesList from '../Home/database/countries';

export default function test2(props) {
  const iii3 = () => {
    const zzu = [];

    const uu = citiesList.forEach((value) => {
      if (value.lat && value.lng) {
        const pos = [JSON.parse(value.lat), JSON.parse(value.lng)];
        zzu.push({
          id: value.id,
          name: value.country,
          pos
        });
      } else {
        zzu.push(value);
      }
    });

    // console.log(zzu);
    console.log(JSON.stringify(zzu));
  };

  const ooo = iii3();
  return (
    <div>
      <h1>TEST3</h1>
    </div>
  );
}
