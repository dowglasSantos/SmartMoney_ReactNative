import {getRealm} from './realm';
import moment from '../vendors/moment';
import {getUUID} from './UUID';
import _ from 'lodash';
import Colors from '../styles/Colors';

export const getBalance = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries.sum('amount');
};

export const getBalanceSumByCategory = async (days, showOthers = true) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = _(entries)
    .groupBy(({category: {id}}) => id)
    .map(entry => ({
      category: _.omit(entry[0].category, 'entries'),
      amount: Math.abs(_.sumBy(entry, 'amount')),
    }))
    .filter(({amount}) => amount > 0)
    .orderBy('amount', 'desc');

  const othersLimit = 3;

  if (showOthers && _(entries).size() > othersLimit) {
    const data1 = _(entries).slice(0, othersLimit);
    const data2 = [
      {
        category: {id: getUUID(), name: 'Outros', color: Colors.champagneDark},
        amount: _(entries)
          .slice(othersLimit)
          .map(({amount}) => amount)
          .sum(),
      },
    ];

    entries = [...data1, ...data2];
  }

  console.log('getBalanceSumByCategory :: ', JSON.stringify(entries));

  return entries;
};
