import React, { useEffect, useState } from 'react';
import citiesList from '../Home/database/cities';

const revi = [
  {
    type: 'city',
    name: 'Liège',
    lat: '50.6451381',
    lng: '5.5734203',
    conn: 'Belgium'
  },
  {
    type: 'city',
    name: 'Fleury-sur-Loire',
    lat: '46.8361641',
    lng: '3.3199963',
    conn: 'France'
  },
  {
    type: 'city',
    name: 'Gembloux',
    lat: '50.5597273',
    lng: '4.6943126',
    conn: 'Belgium'
  },
  {
    type: 'city',
    name: 'Pisa',
    lat: '43.7159395',
    lng: '10.4018624',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Leipzig',
    lat: '51.3406321',
    lng: '12.3747329',
    conn: 'Germany'
  },
  {
    type: 'city',
    name: 'Lucelle',
    lat: '47.4215055',
    lng: '7.2465475',
    conn: 'France'
  },
  {
    type: 'city',
    name: 'Abruzzi',
    lat: '42.333137',
    lng: '13.777',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Evanston, IL',
    lat: '42.0447388',
    lng: '-87.6930459',
    conn: 'US'
  },
  {
    type: 'city',
    name: 'Bononia',
    lat: '44.4936714',
    lng: '11.3430347',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Cortona',
    lat: '43.2752976',
    lng: '11.9850623',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Montepulciano',
    lat: '43.0927229',
    lng: '11.780972',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Arezzo',
    lat: '43.4628957',
    lng: '11.8781675',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Valencia',
    lat: '39.4699014',
    lng: '-0.3759513',
    conn: 'Spain'
  },
  {
    type: 'city',
    name: 'Basel',
    lat: '47.5581077',
    lng: '7.5878261',
    conn: 'Switzerland'
  },
  {
    type: 'city',
    name: 'Krakow',
    lat: '50.0619474',
    lng: '19.9368564',
    conn: 'Poland'
  },
  {
    type: 'city',
    name: 'Germany',
    lat: '54.9064856',
    lng: '8.3071734',
    conn: 'Germany'
  },
  {
    type: 'city',
    name: 'Pordenone',
    lat: '45.9562503',
    lng: '12.6597197',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Metz',
    lat: '49.1196964',
    lng: '6.1763552',
    conn: 'France'
  },
  {
    type: 'city',
    name: 'le Mans',
    lat: '48.0073498',
    lng: '0.1967379',
    conn: 'France'
  },
  {
    type: 'city',
    name: 'Pavia',
    lat: '45.1860043',
    lng: '9.1546375',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Este',
    lat: '45.2240069',
    lng: '11.659796',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Regensburg',
    lat: '49.0195333',
    lng: '12.0974869',
    conn: 'Germany'
  },
  {
    type: 'city',
    name: 'Madrid',
    lat: '40.4167047',
    lng: '-3.7035825',
    conn: 'Spain'
  },
  {
    type: 'city',
    name: 'Bamberg',
    lat: '49.8916044',
    lng: '10.8868478',
    conn: 'Germany'
  },
  {
    type: 'city',
    name: 'Camaldoli',
    lat: '43.7943293',
    lng: '11.8199481',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Assisi',
    lat: '43.0711952',
    lng: '12.6146669',
    conn: 'Italy'
  },
  {
    type: 'city',
    name: 'Salzburg',
    lat: '47.7981346',
    lng: '13.0464806',
    conn: 'Austria'
  },
  {
    type: 'city',
    name: 'Lakeland',
    lat: '28.0394654',
    lng: '-81.9498042',
    conn: 'US'
  }
];

const ggi = revi.map((value) => ({
  type: value.type,
  name: value.name,
  country: value.conn,
  pos: [value.lat, value.pos]
}));


const gg = citiesList.map((city) => {
  if (city.pos !== undefined) return city;
  const aut = ggi.filter((value) => value.name === city.name);
  if (aut.length > 0) {
    return {
      ...city,
      pos: aut[0].pos
    };
  }
  console.log('error', { city });
  return city;
});

console.log(JSON.stringify(gg));


export default function test2(props) {
  return (
    <div>
      <h1>TEST2</h1>
    </div>
  );
}
