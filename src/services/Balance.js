import {getRealm} from './realm';

export const getBalance = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries.sum('amount');
};
