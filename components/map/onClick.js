import manuscrits from '../../database/manuscrit';

export default async ({ data, stateRedux, dispatch }) => {
  // console.log('aqui mas', data);
  await dispatch({ state: 'dialog', value: true });

  if (data.type === 'library') {
    // console.log(data.manuscrit);
    await dispatch({ state: 'dialogItems', value: data.manuscrit });
  }

  if (data.type === 'polygon') {
    const dataManuscrit = [];

    data.markers.forEach((element) => {
      element.manuscrit.forEach((manuscrit) => {
        dataManuscrit.push(manuscrit);
      });
    });

    // console.log('manuscrits', dataManuscrit);
    await dispatch({ state: 'dialogItems', value: dataManuscrit });
  }
};
