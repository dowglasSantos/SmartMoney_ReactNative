import {getRealm} from './realm';
import {Alert} from 'react-native';

import {getUUID} from './UUID';

export const saveEntry = async (value, entry) => {
  const realm = await getRealm();

  try {
    let data = {};

    const {id, amount, entryAt} = value;

    realm.write(() => {
      data = {
        id: id || entry.id || getUUID(),
        amount: amount || entry.amount,
        entryAt: entryAt || entry.entryAt,
        isInit: false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error', JSON.stringify(error));
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
