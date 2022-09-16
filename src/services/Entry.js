import {getRealm} from './realm';
import {Alert} from 'react-native';

import {getUUID} from './UUID';

export const saveEntry = async value => {
  const realm = await getRealm();

  try {
    let data = {};

    const {amount} = value;

    realm.write(() => {
      data = {
        id: getUUID(),
        amount: amount,
        entryAt: new Date(),
        isInit: true,
      };

      realm.create('Entry', data, true);
    });
    console.log('useEntry :: data', JSON.stringify(data));
  } catch (error) {
    console.error('useEntry :: error', JSON.stringify(error));
    Alert.alert('Atenção', 'Erro ao salvar os dados, tente novamente.');
  }
};

export const getEntry = async () => {
  const realm = await getRealm();

  const data = realm.objects('Entry');

  return data;
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    const entryRealmObject = realm
      .objects('Entry')
      .filtered('id == $0', entry.id)[0];
    realm.write(() => {
      realm.delete(entryRealmObject);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object: ',
      JSON.stringify(entry),
    );
    Alert.alert('Erro ao excluir este lançamento.');
  }
};
