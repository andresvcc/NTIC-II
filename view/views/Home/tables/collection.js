import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

import {
  Table,
  Button,
  SubTable
} from '../../component';

const data1 = {
  action: (event, rowData) => console.log(rowData),
  columns: [
    {
      sorting: false,
      filtering: false,
      grouping: false,
      title: 'View',
      field: 'photo',
      render: (rowData) => (
        <Button
          onClick={() => console.log(rowData)}
          type="text"
          style={{ padding: '5px' }}
          square
        >
          <img
            style={{ height: 90, width: '100%', objectFit: 'cover' }}
            src={`${__API__}/${rowData.photo || 'notPhoto.png'}`}
            alt={`${rowData.name_product} ${rowData.photo}`}
          />
        </Button>
      ),
    },
    { title: 'ID', field: 'anderson_id' },
    { title: 'Date', field: 'date' },
    { title: 'Datesort', field: 'datesort' },
    {
      title: 'Town',
      field: 'town',
      lookup: {
        1: 'Antwerpen',
        2: 'Ascoli Piceno',
        3: 'Augsburg',
        4: 'Baltimore MD',
        5: 'Bergamo',
        6: 'Berlin',
        7: 'Bern',
        8: 'Bologna',
        9: 'Bruxelles',
        10: 'Bryn Mawr PA',
        11: 'Cambridge',
        12: 'Carpentras',
        13: 'Cesena',
        14: 'Chicago IL',
        15: 'Colmar',
        16: 'Cologny',
        17: 'Darmstadt',
        18: 'Dijon',
        19: 'Dresden',
        20: 'Düsseldorf',
        21: 'Erfurt',
        22: 'El Escorial',
        23: 'Eton',
        24: 'Eugene OR',
        25: 'Evanston IL',
        26: 'Firenze',
        27: 'Genova',
        28: 'Göteborg',
        29: 'Gravenhage',
        30: 'Helsinki',
        31: 'Holkham Hall',
        32: 'Karlsruhe',
        33: 'Konstanz',
        34: 'Kraków',
        35: 'Leiden',
        36: 'Lincoln',
        37: 'London',
        38: 'Mainz',
        39: 'Milano',
        40: 'Modena',
        41: 'München',
        42: 'Napoli',
        43: 'Nottingham',
        44: 'Oldenburg',
        45: 'Oxford',
        46: 'Padova',
        47: 'Palma de Mallorca',
        48: 'Paris',
        49: 'Parma',
        50: 'Perugia',
        51: 'Poppi',
        52: 'Praha',
        53: 'Princeton NJ',
        54: 'Roma',
        55: 'Salamanca',
        56: 'Sankt Florian',
        57: 'Schlägl',
        58: 'Stuttgart',
        59: 'Torino',
        60: 'Trier',
        61: 'Città del Vaticano',
        62: 'Venezia',
        63: 'Warsawa',
        64: 'Wien',
        65: 'Wolfenbüttel',
        66: 'Worcester',
        67: 'Wroclaw',
      },
    },
    {
      title: 'Library',
      field: 'library',
      lookup: {
        1: 'Archivio Storico Civico e Biblioteca Trivulziana',
        2: 'Badische Landesbibliothek',
        3: 'Bayerische Staatsbibliothek',
        4: 'Biblioteca Ambrosiana',
        5: 'Biblioteca Angelica',
        6: 'Biblioteca Apostolica Vaticana',
        7: 'Biblioteca Civica "Angelo Mai"',
        8: 'Biblioteca Comunale "Giulio Gabrielli"',
        9: 'Biblioteca Comunale Augusta',
        10: 'Biblioteca Comunale Rilliana',
        11: 'Biblioteca del Museo Correr',
        12: 'Biblioteca Durazzo Giustiniani',
        13: 'Biblioteca Estense Universitaria',
        14: 'Biblioteca Malatestiana',
        15: 'Biblioteca Medicea Laurenziana',
        16: 'Biblioteca Nazionale "Vittorio Emanuele III"',
        17: 'Biblioteca Nazionale Braidense',
        18: 'Biblioteca Nazionale Centrale',
        19: 'Biblioteca Nazionale Marciana',
        20: 'Biblioteca Palatina',
        21: 'Biblioteca privada del Marqués de Campofranco',
        22: 'Biblioteca Riccardiana',
        23: 'Biblioteca Universitaria',
        24: 'Biblioteca Vallicelliana',
        25: 'Biblioteka Jagiellonska',
        26: 'Biblioteka Muzeum Narodowego w Krakowie',
        27: 'Biblioteka Narodowa',
        28: 'Biblioteka Uniwersytecka',
        29: 'Bibliotheca Bodmeriana',
        30: 'Bibliothek des Heinrich-Suso-Gymnasium',
        31: 'Bibliothèque de l’Université libre',
        32: 'Bibliothèque Municipale',
        33: 'Bibliothèque Nationale de France',
        34: 'Bibliothèque Royale de Belgique',
        35: 'Bibliothèque-Musée Inguimbertine',
        36: 'Bodleian Library',
        37: 'British Library',
        38: 'Bryn Mawr College, Canaday Library',
        39: 'Burgerbibliothek',
        40: 'Cathedral Library',
        41: 'Corpus Christi College, Parker Library',
        42: '23 College Library',
        43: '30 University Library, National Library of Finland',
        44: 'Herzog August Bibliothek',
        45: 'Hessische Landes- und Hochschulbibliothek',
        46: 'Koninklijke Bibliotheek',
        47: 'Landesbibliothek',
        48: 'library',
        49: 'Library of the Earl of Leicester',
        50: 'Libreria antiquaria Pregliasco',
        51: '36 College',
        52: 'Martinus-Bibliothek',
        53: 'Museum Plantin-Moretus',
        54: 'Národní Knihovna Ceské Republiky',
        55: 'Northwestern University Library',
        56: 'Österreichische Nationalbibliothek',
        57: 'Real Biblioteca del Monasterio de San Lorenzo',
        58: 'Sächsische Landesbibliothek – Staats- und Universitätsbibliothek',
        59: 'Staats- und Stadtbibliothek',
        60: 'Staatsbibliothek zu 6 – Preußischer Kulturbesitz',
        61: 'Stadtbibliothek',
        62: 'Stiftsbibliothek',
        63: 'Universitätsbibliothek (Landes- und Stadtbibliothek)',
        64: 'Universiteitsbibliotheek',
        65: 'Universitetsbibliotek',
        66: 'University Library',
        67: 'University Library (Wollaton Library Collection)',
        68: 'University of Oregon, Knight Library',
        69: 'Walters Art Museum',
        70: 'Wissenschaftliche Allgemeinbibliothek',
        71: 'Württembergische Landesbibliothek',
      },
    },
  ],
  data: [
    {
      anderson_id: '3',
      town: '1',
      ms_name: '3_ANTWERPEN',
      date: 'XIII',
      datesort: '1250',
      library: '53',
      description: 'not description',
      photo: null,
      attribute: [{year: 1550, library: '53'}]
    },
    {
      anderson_id: '6',
      town: '1',
      ms_name: '6_ANTWERPEN',
      date: 'XIII',
      datesort: '1250',
      library: '53',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '10',
      town: '2',
      ms_name: '10_ASCOLIPICENO',
      date: 'XV',
      datesort: '1450',
      library: '8',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '15',
      town: '3',
      ms_name: '15_3',
      date: 'XIII',
      datesort: '1250',
      library: '59',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '18',
      town: '4',
      ms_name: '18_BALTIMORE',
      date: 'XV',
      datesort: '1450',
      library: '69',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '24',
      town: '5',
      ms_name: '24_5',
      date: 'XV med.',
      datesort: '1450',
      library: '7',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '35',
      town: '6',
      ms_name: '35_6',
      date: 'XV2',
      datesort: '1475',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '36',
      town: '6',
      ms_name: '36_6',
      date: 'XIV/XV',
      datesort: '1400',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '37',
      town: '6',
      ms_name: '37_6',
      date: 'XIV2',
      datesort: '1375',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '44',
      town: '6',
      ms_name: '44_6',
      date: '(Anderson: XIV-XV in.)',
      datesort: '1367',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '47',
      town: '6',
      ms_name: '47_6',
      date: '(Anderson: XV)',
      datesort: '1450',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '48',
      town: '6',
      ms_name: '48_6',
      date: '(Anderson: XV med.)',
      datesort: '1450',
      library: '60',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '54',
      town: '7',
      ms_name: '54_7',
      date: 'XII',
      datesort: '1150',
      library: '39',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '59',
      town: '7',
      ms_name: '59_7',
      date: 'XII-XIII',
      datesort: '1200',
      library: '39',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '64',
      town: '8',
      ms_name: '64_8',
      date: 'XV',
      datesort: '1450',
      library: '23',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '66',
      town: '8',
      ms_name: '66_8',
      date: 'XV',
      datesort: '1450',
      library: '23',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '68',
      town: '9',
      ms_name: '68_9',
      date: 'XII/XIII',
      datesort: '1200',
      library: '31',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '70',
      town: '9',
      ms_name: '70_9',
      date: 'XI1',
      datesort: '1025',
      library: '34',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '77',
      town: '9',
      ms_name: '77_9',
      date: 'XV',
      datesort: '1450',
      library: '34',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '78',
      town: '10',
      ms_name: '78_BRYNMAWR',
      date: 'XV med.',
      datesort: '1450',
      library: '38',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '87',
      town: '11',
      ms_name: '87_11',
      date: 'XIII',
      datesort: '1250',
      library: '66',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '88',
      town: '11',
      ms_name: '88_11',
      date: 'XIII',
      datesort: '1250',
      library: '66',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '92',
      town: '12',
      ms_name: '92_12',
      date: 'XIV',
      datesort: '1350',
      library: '35',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '93',
      town: '13',
      ms_name: '93_13',
      date: 'XV med.',
      datesort: '1450',
      library: '14',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '100',
      town: '14',
      ms_name: '100_CHICAGO',
      date: 'XV',
      datesort: '1450',
      library: '66',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '101',
      town: '15',
      ms_name: '101_15',
      date: 'XV ex. (a. 1475)',
      datesort: '1475',
      library: '32',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '102',
      town: '16',
      ms_name: '102_16',
      date: 'XV',
      datesort: '1450',
      library: '29',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '105',
      town: '17',
      ms_name: '105_17',
      date: 'XIII/XIV',
      datesort: '1300',
      library: '45',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '108',
      town: '18',
      ms_name: '108_18',
      date: 'XIII ex.',
      datesort: '1283',
      library: '32',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '113',
      town: '19',
      ms_name: '113_19',
      date: 'XIII',
      datesort: '1250',
      library: '58',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '121',
      town: '20',
      ms_name: '121_DUESSELDORF',
      date: 'XIV in.',
      datesort: '1317',
      library: '63',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '122',
      town: '20',
      ms_name: '122_DUESSELDORF',
      date: 'XII/XIII',
      datesort: '1200',
      library: '63',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '126',
      town: '21',
      ms_name: '126_21',
      date: 'XIV',
      datesort: '1350',
      library: '70',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '127',
      town: '21',
      ms_name: '127_21',
      date: 'XIV',
      datesort: '1350',
      library: '70',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '130',
      town: '22',
      ms_name: '130_ESCORIAL',
      date: 'XIV',
      datesort: '1350',
      library: '57',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '134',
      town: '23',
      ms_name: '134_23',
      date: 'XI',
      datesort: '1050',
      library: '42',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '135',
      town: '24',
      ms_name: '135_EUGENE',
      date: 'XV',
      datesort: '1450',
      library: '68',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '136',
      town: '25',
      ms_name: '136_EVANSTON',
      date: 'XV',
      datesort: '1450',
      library: '55',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '139',
      town: '26',
      ms_name: '139_26',
      date: 'XV',
      datesort: '1450',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '141',
      town: '26',
      ms_name: '141_26',
      date: 'XV',
      datesort: '1450',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '147',
      town: '26',
      ms_name: '147_26',
      date: 'XII2',
      datesort: '1175',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '150',
      town: '26',
      ms_name: '150_26',
      date: 'XIV/XV',
      datesort: '1400',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '151',
      town: '26',
      ms_name: '151_26',
      date: 'XIV/XV',
      datesort: '1400',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '152',
      town: '26',
      ms_name: '152_26',
      date: 'XV',
      datesort: '1450',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '158',
      town: '26',
      ms_name: '158_26',
      date: 'XV in. (a. 1416)',
      datesort: '1416',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '159',
      town: '26',
      ms_name: '159_26',
      date: 'XIV',
      datesort: '1350',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '160',
      town: '26',
      ms_name: '160_26',
      date: 'XIV med. (a. 1349)',
      datesort: '1349',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '161',
      town: '26',
      ms_name: '161_26',
      date: 'XV',
      datesort: '1450',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '162',
      town: '26',
      ms_name: '162_26',
      date: 'XV',
      datesort: '1450',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '164',
      town: '26',
      ms_name: '164_26',
      date: 'XIV',
      datesort: '1350',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '167',
      town: '26',
      ms_name: '167_26',
      date: 'XV in. (a. 1404)',
      datesort: '1404',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '169',
      town: '26',
      ms_name: '169_26',
      date: 'XIV',
      datesort: '1350',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '170',
      town: '26',
      ms_name: '170_26',
      date: 'XIV',
      datesort: '1350',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '172',
      town: '26',
      ms_name: '172_26',
      date: 'XIII',
      datesort: '1250',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '173',
      town: '26',
      ms_name: '173_26',
      date: 'XIV in. (a. 1308)',
      datesort: '1308',
      library: '15',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '176',
      town: '26',
      ms_name: '176_26',
      date: 'XIV',
      datesort: '1350',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '179',
      town: '26',
      ms_name: '179_26',
      date: 'XIV ex. (a. 1375)',
      datesort: '1375',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '180',
      town: '26',
      ms_name: '180_26',
      date: 'XV',
      datesort: '1450',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '181',
      town: '26',
      ms_name: '181_26',
      date: 'XV in. (a. 1413)',
      datesort: '1413',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '183',
      town: '26',
      ms_name: '183_26',
      date: 'XV',
      datesort: '1450',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '184',
      town: '26',
      ms_name: '184_26',
      date: 'XV',
      datesort: '1450',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '185',
      town: '26',
      ms_name: '185_26',
      date: 'XV',
      datesort: '1450',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '186',
      town: '26',
      ms_name: '186_26',
      date: 'XV',
      datesort: '1450',
      library: '18',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '191',
      town: '26',
      ms_name: '191_26',
      date: 'XV',
      datesort: '1450',
      library: '22',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '197',
      town: '26',
      ms_name: '197_26',
      date: 'XIV',
      datesort: '1350',
      library: '22',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '198',
      town: '26',
      ms_name: '198_26',
      date: 'XIV/XV',
      datesort: '1400',
      library: '22',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '202',
      town: '27',
      ms_name: '202_27',
      date: 'XV',
      datesort: '1450',
      library: '12',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '203',
      town: '27',
      ms_name: '203_27',
      date: 'XIV',
      datesort: '1350',
      library: '23',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '204',
      town: '28',
      ms_name: '204_GOETEBORG',
      date: 'XIV/XV',
      datesort: '1400',
      library: '65',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '209',
      town: '29',
      ms_name: '209_GRAVENHAGE',
      date: 'XIV',
      datesort: '1350',
      library: '46',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '210',
      town: '29',
      ms_name: '210_GRAVENHAGE',
      date: 'XI',
      datesort: '1050',
      library: '46',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '220',
      town: '30',
      ms_name: '220_30',
      date: 'XIII',
      datesort: '1250',
      library: '43',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '222',
      town: '31',
      ms_name: '222_HOLKHAMHALL',
      date: 'XV in. (a. 1408)',
      datesort: '1408',
      library: '49',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '223',
      town: '31',
      ms_name: '223_HOLKHAMHALL',
      date: 'XV',
      datesort: '1450',
      library: '49',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '225',
      town: '32',
      ms_name: '225_32',
      date: 'XIV ex.',
      datesort: '1383',
      library: '2',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '235',
      town: '33',
      ms_name: '235_33',
      date: '(Anderson: XIII)',
      datesort: '1250',
      library: '30',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '236',
      town: '34',
      ms_name: '236_KRAKOW',
      date: 'XIII',
      datesort: '1250',
      library: '25',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '237',
      town: '34',
      ms_name: '237_KRAKOW',
      date: 'XV in. (a. 1417)',
      datesort: '1417',
      library: '25',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '238',
      town: '34',
      ms_name: '238_KRAKOW',
      date: 'XV2',
      datesort: '1475',
      library: '25',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '239',
      town: '34',
      ms_name: '239_KRAKOW',
      date: 'XII ex.',
      datesort: '1183',
      library: '26',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '241',
      town: '35',
      ms_name: '241_35',
      date: 'XII2',
      datesort: '1175',
      library: '64',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '246',
      town: '35',
      ms_name: '246_35',
      date: 'XV',
      datesort: '1450',
      library: '64',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '256',
      town: '35',
      ms_name: '256_35',
      date: 'XIII',
      datesort: '1250',
      library: '64',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '259',
      town: '35',
      ms_name: '259_35',
      date: 'XIII',
      datesort: '1250',
      library: '64',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '265',
      town: '35',
      ms_name: '265_35',
      date: 'XIII2',
      datesort: '1275',
      library: '64',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '273',
      town: '36',
      ms_name: '273_36',
      date: 'XIII',
      datesort: '1250',
      library: '40',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '282',
      town: '37',
      ms_name: '282_37',
      date: 'XIV',
      datesort: '1350',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '283',
      town: '37',
      ms_name: '283_37',
      date: 'XV',
      datesort: '1450',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '284',
      town: '37',
      ms_name: '284_37',
      date: 'XV',
      datesort: '1450',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '285',
      town: '37',
      ms_name: '285_37',
      date: 'XIV/XV',
      datesort: '1400',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '286',
      town: '37',
      ms_name: '286_37',
      date: 'XV',
      datesort: '1450',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '287',
      town: '37',
      ms_name: '287_37',
      date: 'XIII',
      datesort: '1250',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '288',
      town: '37',
      ms_name: '288_37',
      date: 'XIV',
      datesort: '1350',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '289',
      town: '37',
      ms_name: '289_37',
      date: 'XV in. (a. 1411)',
      datesort: '1411',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '290',
      town: '37',
      ms_name: '290_37',
      date: 'XV',
      datesort: '1450',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '292',
      town: '37',
      ms_name: '292_37',
      date: 'XIII',
      datesort: '1250',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '293',
      town: '37',
      ms_name: '293_37',
      date: 'XIV',
      datesort: '1350',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '296',
      town: '37',
      ms_name: '296_37',
      date: 'XIV/XV',
      datesort: '1400',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '304',
      town: '37',
      ms_name: '304_37',
      date: 'XV',
      datesort: '1450',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '311',
      town: '37',
      ms_name: '311_37',
      date: 'XIV2',
      datesort: '1375',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '318',
      town: '37',
      ms_name: '318_37',
      date: 'XII',
      datesort: '1150',
      library: '37',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '334',
      town: '38',
      ms_name: '334_38',
      date: '(Anderson: XIII med.)',
      datesort: '1250',
      library: '52',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '336',
      town: '39',
      ms_name: '336_39',
      date: 'XV',
      datesort: '1450',
      library: '1',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '338',
      town: '39',
      ms_name: '338_39',
      date: 'XV',
      datesort: '1450',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '341',
      town: '39',
      ms_name: '341_39',
      date: 'XV',
      datesort: '1450',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '342',
      town: '39',
      ms_name: '342_39',
      date: 'XIV ex.',
      datesort: '1383',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '343',
      town: '39',
      ms_name: '343_39',
      date: 'XV',
      datesort: '1450',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '346',
      town: '39',
      ms_name: '346_39',
      date: 'XV in. (a. 1406)',
      datesort: '1406',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '347',
      town: '39',
      ms_name: '347_39',
      date: 'XIII',
      datesort: '1250',
      library: '4',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '348',
      town: '39',
      ms_name: '348_39',
      date: 'XV in. (a. 1413)',
      datesort: '1413',
      library: '17',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '350',
      town: '40',
      ms_name: '350_40',
      date: 'XV',
      datesort: '1450',
      library: '13',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '354',
      town: '40',
      ms_name: '354_40',
      date: 'XV ex.',
      datesort: '1483',
      library: '13',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '362',
      town: '41',
      ms_name: '362_41',
      date: 'XIV',
      datesort: '1350',
      library: '3',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '369',
      town: '41',
      ms_name: '369_41',
      date: 'XIII/XIV',
      datesort: '1300',
      library: '3',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '374',
      town: '41',
      ms_name: '374_41',
      date: 'XIII',
      datesort: '1250',
      library: '3',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '382',
      town: '42',
      ms_name: '382_42',
      date: 'XV',
      datesort: '1450',
      library: '16',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '387',
      town: '42',
      ms_name: '387_42',
      date: 'XIV',
      datesort: '1350',
      library: '16',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '388',
      town: '42',
      ms_name: '388_42',
      date: 'XIV',
      datesort: '1350',
      library: '16',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '393',
      town: '42',
      ms_name: '393_42',
      date: 'XV',
      datesort: '1450',
      library: '16',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '402',
      town: '43',
      ms_name: '402_43',
      date: 'XIII',
      datesort: '1250',
      library: '67',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '403',
      town: '44',
      ms_name: '403_44',
      date: 'XV med. (a. 1447)',
      datesort: '1447',
      library: '47',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '410',
      town: '45',
      ms_name: '410_45',
      date: 'XI2',
      datesort: '1075',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '411',
      town: '45',
      ms_name: '411_45',
      date: 'XIII',
      datesort: '1250',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '413',
      town: '45',
      ms_name: '413_45',
      date: 'XIII ex.',
      datesort: '1283',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '418',
      town: '45',
      ms_name: '418_45',
      date: 'XIII/XIV',
      datesort: '1300',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '420',
      town: '45',
      ms_name: '420_45',
      date: 'XIV',
      datesort: '1350',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '426',
      town: '45',
      ms_name: '426_45',
      date: 'XV',
      datesort: '1450',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '432',
      town: '45',
      ms_name: '432_45',
      date: 'XIII',
      datesort: '1250',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '433',
      town: '45',
      ms_name: '433_45',
      date: 'XIII',
      datesort: '1250',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '435',
      town: '45',
      ms_name: '435_45',
      date: 'XIV',
      datesort: '1350',
      library: '36',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '437',
      town: '45',
      ms_name: '437_45',
      date: 'XV ex. (a. 1475/6)',
      datesort: '1475',
      library: '41',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '438',
      town: '45',
      ms_name: '438_45',
      date: 'XII in. (a. 1119)',
      datesort: '1119',
      library: '51',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '445',
      town: '46',
      ms_name: '445_46',
      date: 'XIV1',
      datesort: '1325',
      library: '23',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '447',
      town: '47',
      ms_name: '447_PALMADEMALLORCA',
      date: 'XIV/XV',
      datesort: '1400',
      library: '21',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '467',
      town: '48',
      ms_name: '467_48',
      date: 'XI',
      datesort: '1050',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '468',
      town: '48',
      ms_name: '468_48',
      date: 'IX2/3',
      datesort: '850',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '469',
      town: '48',
      ms_name: '469_48',
      date: 'XI1',
      datesort: '1025',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '479',
      town: '48',
      ms_name: '479_48',
      date: 'XV in. (a. 1421)',
      datesort: '1421',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '483',
      town: '48',
      ms_name: '483_48',
      date: 'XV med. (a. 1462)',
      datesort: '1462',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '484',
      town: '48',
      ms_name: '484_48',
      date: 'XIII',
      datesort: '1250',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '485',
      town: '48',
      ms_name: '485_48',
      date: 'XV',
      datesort: '1450',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '486',
      town: '48',
      ms_name: '486_48',
      date: 'XV',
      datesort: '1450',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '491',
      town: '48',
      ms_name: '491_48',
      date: 'XIII',
      datesort: '1250',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '493',
      town: '48',
      ms_name: '493_48',
      date: 'X ex.',
      datesort: '983',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '494',
      town: '48',
      ms_name: '494_48',
      date: 'XV',
      datesort: '1450',
      library: '33',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '509',
      town: '49',
      ms_name: '509_49',
      date: 'XV med. (a. 1462)',
      datesort: '1462',
      library: '20',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '511',
      town: '49',
      ms_name: '511_49',
      date: 'XIV med. (a. 1368)',
      datesort: '1368',
      library: '20',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '516',
      town: '50',
      ms_name: '516_50',
      date: 'XV',
      datesort: '1450',
      library: '9',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '517',
      town: '50',
      ms_name: '517_50',
      date: 'XIV/XV',
      datesort: '1400',
      library: '9',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '525',
      town: '51',
      ms_name: '525_51',
      date: 'XV',
      datesort: '1450',
      library: '10',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '529',
      town: '52',
      ms_name: '529_52',
      date: 'XIV ex. (a. 1386-1389)',
      datesort: '1386',
      library: '54',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '530',
      town: '52',
      ms_name: '530_52',
      date: 'XIV ex. (a. 1387-1388)',
      datesort: '1387',
      library: '54',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '532',
      town: '52',
      ms_name: '532_52',
      date: 'XV',
      datesort: '1450',
      library: '54',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '536',
      town: '53',
      ms_name: '536_PRINC23',
      date: 'XV',
      datesort: '1450',
      library: '66',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '537',
      town: '53',
      ms_name: '537_PRINC23',
      date: 'XV',
      datesort: '1450',
      library: '66',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '545',
      town: '54',
      ms_name: '545_54',
      date: 'XV',
      datesort: '1450',
      library: '5',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '546',
      town: '54',
      ms_name: '546_54',
      date: 'XIII ex.',
      datesort: '1283',
      library: '5',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '547',
      town: '54',
      ms_name: '547_54',
      date: 'XV',
      datesort: '1450',
      library: '5',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '548',
      town: '54',
      ms_name: '548_54',
      date: 'XV',
      datesort: '1450',
      library: '5',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '549',
      town: '54',
      ms_name: '549_54',
      date: 'XIV',
      datesort: '1350',
      library: '24',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '552',
      town: '54',
      ms_name: '552_54',
      date: 'XV',
      datesort: '1450',
      library: '24',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '555',
      town: '55',
      ms_name: '555_55',
      date: 'XV',
      datesort: '1450',
      library: '23',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '558',
      town: '56',
      ms_name: '558_SANKTFLORIAN',
      date: 'XIII',
      datesort: '1250',
      library: '62',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '559',
      town: '56',
      ms_name: '559_SANKTFLORIAN',
      date: 'XIII and XIV',
      datesort: '1300',
      library: '62',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '999',
      town: '57',
      ms_name: '999_SCHLAEGL',
      date: 'XV and XVI',
      datesort: '1500',
      library: '62',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '575',
      town: '58',
      ms_name: '575_58',
      date: 'XV med. (a. 1468)',
      datesort: '1468',
      library: '71',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '576',
      town: '58',
      ms_name: '576_58',
      date: 'XIV',
      datesort: '1350',
      library: '71',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '578',
      town: '59',
      ms_name: '578_59',
      date: 'XV med.',
      datesort: '1450',
      library: '50',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '582',
      town: '60',
      ms_name: '582_60',
      date: 'XIII',
      datesort: '1250',
      library: '61',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '592',
      town: '61',
      ms_name: '592_VATICANO',
      date: 'XIV-XV',
      datesort: '1400',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '593',
      town: '61',
      ms_name: '593_VATICANO',
      date: 'XIII',
      datesort: '1250',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '594',
      town: '61',
      ms_name: '594_VATICANO',
      date: 'XV med. (a. 1466-1467)',
      datesort: '1466',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '595',
      town: '61',
      ms_name: '595_VATICANO',
      date: 'XII2',
      datesort: '1175',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '598',
      town: '61',
      ms_name: '598_VATICANO',
      date: 'XIV med. (a. 1340)',
      datesort: '1340',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '604',
      town: '61',
      ms_name: '604_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '606',
      town: '61',
      ms_name: '606_VATICANO',
      date: 'XIII',
      datesort: '1250',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '608',
      town: '61',
      ms_name: '608_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '611',
      town: '61',
      ms_name: '611_VATICANO',
      date: 'XII ex.',
      datesort: '1183',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '614',
      town: '61',
      ms_name: '614_VATICANO',
      date: 'XVII',
      datesort: '1650',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '615',
      town: '61',
      ms_name: '615_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '616',
      town: '61',
      ms_name: '616_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '617',
      town: '61',
      ms_name: '617_VATICANO',
      date: 'XIII',
      datesort: '1250',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '621',
      town: '61',
      ms_name: '621_VATICANO',
      date: 'XIV/XV',
      datesort: '1400',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '622',
      town: '61',
      ms_name: '622_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '623',
      town: '61',
      ms_name: '623_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '625',
      town: '61',
      ms_name: '625_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '633',
      town: '61',
      ms_name: '633_VATICANO',
      date: 'XIII',
      datesort: '1250',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '635',
      town: '61',
      ms_name: '635_VATICANO',
      date: 'XIV ex. (a. 1391)',
      datesort: '1391',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '637',
      town: '61',
      ms_name: '637_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '643',
      town: '61',
      ms_name: '643_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '649',
      town: '61',
      ms_name: '649_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '650',
      town: '61',
      ms_name: '650_VATICANO',
      date: 'XIII',
      datesort: '1250',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '652',
      town: '61',
      ms_name: '652_VATICANO',
      date: 'XV',
      datesort: '1450',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '656',
      town: '61',
      ms_name: '656_VATICANO',
      date: 'XII in.',
      datesort: '1117',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '661',
      town: '61',
      ms_name: '661_VATICANO',
      date: 'XV ex. (a. 1470)',
      datesort: '1470',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '667',
      town: '61',
      ms_name: '667_VATICANO',
      date: 'XIV',
      datesort: '1350',
      library: '6',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '684',
      town: '62',
      ms_name: '684_62',
      date: 'XIV',
      datesort: '1350',
      library: '11',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '670',
      town: '62',
      ms_name: '670_62',
      date: 'XIII',
      datesort: '1250',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '671',
      town: '62',
      ms_name: '671_62',
      date: 'XV',
      datesort: '1450',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '673',
      town: '62',
      ms_name: '673_62',
      date: 'XV',
      datesort: '1450',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '676',
      town: '62',
      ms_name: '676_62',
      date: 'XV ex. (a. 1495)',
      datesort: '1495',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '677',
      town: '62',
      ms_name: '677_62',
      date: 'XV',
      datesort: '1450',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '679',
      town: '62',
      ms_name: '679_62',
      date: 'XV',
      datesort: '1450',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '681',
      town: '62',
      ms_name: '681_62',
      date: 'XIV',
      datesort: '1350',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '683',
      town: '62',
      ms_name: '683_62',
      date: 'XIV',
      datesort: '1350',
      library: '19',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '686',
      town: '63',
      ms_name: '686_63',
      date: 'XV med.',
      datesort: '1450',
      library: '27',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '687',
      town: '64',
      ms_name: '687_64',
      date: 'XV ex. (c. 1470)',
      datesort: '1470',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '690',
      town: '64',
      ms_name: '690_64',
      date: 'XIV',
      datesort: '1350',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '693',
      town: '64',
      ms_name: '693_64',
      date: 'XV med. (a. 1431)',
      datesort: '1431',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '694',
      town: '64',
      ms_name: '694_64',
      date: 'XIII',
      datesort: '1250',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '696',
      town: '64',
      ms_name: '696_64',
      date: 'XII2',
      datesort: '1175',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '697',
      town: '64',
      ms_name: '697_64',
      date: 'XV ex. (a. 1481)',
      datesort: '1481',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '701',
      town: '64',
      ms_name: '701_64',
      date: 'XV ex. (a. 1477-1479)',
      datesort: '1477',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '704',
      town: '64',
      ms_name: '704_64',
      date: 'XIII',
      datesort: '1250',
      library: '56',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '705',
      town: '65',
      ms_name: '705_WOLFENBUETTEL',
      date: 'XIII ex. (a. 1270)',
      datesort: '1270',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '708',
      town: '65',
      ms_name: '708_WOLFENBUETTEL',
      date: 'XII2',
      datesort: '1175',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '709',
      town: '65',
      ms_name: '709_WOLFENBUETTEL',
      date: 'XIV',
      datesort: '1350',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '710',
      town: '65',
      ms_name: '710_WOLFENBUETTEL',
      date: 'XI',
      datesort: '1050',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '712',
      town: '65',
      ms_name: '712_WOLFENBUETTEL',
      date: 'XIII/XIV',
      datesort: '1300',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '713',
      town: '65',
      ms_name: '713_WOLFENBUETTEL',
      date: 'XIII + XIV',
      datesort: '1300',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '714',
      town: '65',
      ms_name: '714_WOLFENBUETTEL',
      date: 'XV med. (a. 1454)',
      datesort: '1454',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '715',
      town: '65',
      ms_name: '715_WOLFENBUETTEL',
      date: 'XIII',
      datesort: '1250',
      library: '44',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '718',
      town: '66',
      ms_name: '718_66',
      date: 'XIII/XIV',
      datesort: '1300',
      library: '40',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    },
    {
      anderson_id: '720',
      town: '67',
      ms_name: '720_67',
      date: 'XV ex. (a. 1374)',
      datesort: '1374',
      library: '28',
      description: 'not description',
      photo: null,
      attribute: [{ name: 'intervale', value: 'value', id: 0 }, { name: 'name_data', value: 'value2', id: 1 }]
    }
  ],
  detailPanel: [
    {
      icon: 'settings',
      openIcon: 'close',
      tooltip: 'Show Both',
      render: (rowData) => (
        <div key={rowData.product} style={{ padding: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <div style={{ position: 'relative' }}>
                <Paper elevation={2} style={{ minHeight: '11.3vh', padding: '20px', paddingBottom: '40px' }}>
                  {rowData.description}
                  <Button
                    textColor="white"
                    color="black"
                    size="xs"
                    style={{ position: 'absolute', bottom: '5px', right: '5px' }}
                  >
                    <EditIcon />
                  </Button>
                </Paper>
              </div>

            </Grid>
            <Grid item xs={5}>
              <SubTable rowData={rowData} />
            </Grid>
          </Grid>
        </div>
      )
    },
  ]
};

export default function TableArticles(props) {
  const {
    classes,
    ...rest
  } = props;

  const addRow = (data) => {
    console.log('addRow', data);
  };

  const editRow = (data) => {
    console.log('addRow', data);
  };

  const delRow = (data) => {
    console.log('addRow', data);
  };

  return (
    <Table
      data={data1}
      onAddRow={addRow}
      onEditRow={editRow}
      onDelRow={delRow}
    />
  );
}

TableArticles.defaultProps = {
  classes: {}
};


TableArticles.propTypes = {
  classes: PropTypes.any
};
