import React, { useEffect, useState } from 'react';
import * as Nominatim from 'nominatim-browser';
import ReactExport from 'react-export-excel';
import Icon from '@material-ui/core/Icon';
import citiesList from '../Home/database/cities';


import {
  Button,
  GridColon,
  GridContainer,
  GridItem
} from '../component';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;


function ExportExel(props) {
  return (
    <ExcelFile element={props.button} filename="ExportExcel">
      <ExcelSheet data={props.data} name="Leaves">
        <ExcelColumn label="type" value="type" />
        <ExcelColumn label="country" value="name" />
        <ExcelColumn label="lat" value="lat" />
        <ExcelColumn label="lng" value="lng" />
        <ExcelColumn label="conn" value="conn" />
      </ExcelSheet>
    </ExcelFile>
  );
}


const filtred = citiesList.filter((value, index) => value.pos === undefined);
// const filtred = citiesList;

const tt = (listCountries) => {
  const zipz = [];
  listCountries.forEach((element) => {
    zipz.push({ country: element.name });
    /*
    element.cities.forEach((city) => {
      zipz.push({ country: element.name, city });
    });
    */
  });

  return zipz;
};

console.log(filtred);

const places = filtred;
// tt(contriesBy);


export default function Test(props) {
  const [newList, setList] = useState([]);
  const [indexPlus, setIndexPlus] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [disponible, setDisponible] = useState(false);

  const onSuggestsLookup = async ({ city, country }) => {
    const dd = await Nominatim.geocode({
      city,
      country,
      addressdetails: true
    });


    if (dd.length > 0) {
      console.log({ city, country, dd });
      setList(newList.concat({
        type: 'city',
        name: city,
        lat: dd[0].lat,
        lng: dd[0].lon,
        conn: country
      }));
    } else {
      console.log('error');
    }
  };


  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    if (indexPlus < places.length && disponible) {
      setDisponible(false);

      onSuggestsLookup({
        country: places[indexPlus].country_name,
        city: places[indexPlus].name
      });

      // console.log({ country: places[indexPlus].name });

      setIndexPlus((indexPlus) => indexPlus + 1);
      setDisponible(true);
    }
  }, [seconds]);

  useEffect(() => {
    if (indexPlus >= places.length) {
      console.log('termine');
    }
  }, [indexPlus]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '100px' }}>
        <GridColon>
          <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
            Find geo places
            {' '}
            {newList.length}
          </h1>
          <ExportExel
            data={newList}
            button={(
              <Icon style={{ fontSize: '28px' }}>
                <img src={`${__API__}/iconExcel.svg`} alt="Excel Icon" />
              </Icon>
        )}
          />

          <Button onClick={() => { setDisponible(true); console.log('start'); }}>Start</Button>

        </GridColon>
      </div>

      <GridContainer>
        <GridItem xs={1} />
        <GridItem xs={3} />
        <GridItem xs={3}>
          <GridColon>
            {
              newList.map((value, index) => (
                <div style={{ width: '100%' }} key={`${value.name} ${index + 1}`}>
                  <Button
                    config={{
                      background: 'transparent',
                      width: '100%'
                    }}
                  >
                    {`${value.name},  lat:${value.lat} lng:${value.lng}`}
                  </Button>
                </div>
              ))
            }
          </GridColon>
        </GridItem>
      </GridContainer>
    </div>

  );
}


/*


           <GridColon>

                </GridColon>
               {
              contriesBy.map((value, index) => {
                const r = 0;
                return (
                  <div style={{ width: '100%' }} key={`${value.name} ${index + 1}`}>
                    <Button onClick={() => onSuggestsLookup({ country: value.name })}>{value.name}</Button>
                    {
                      value.cities.map((city) => (
                        <Button key={`${city} ${value.name}`} onClick={() => onSuggestsLookup({ country: value.name, city })}>{`${city}, ${value.name}`}</Button>
                      ))
                      }
                      </div>
                      );
                    })
                  }

*/
