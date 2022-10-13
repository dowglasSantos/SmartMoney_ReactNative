import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {getBalanceSumByCategory} from '../services/Balance';

export const useGetBalanceSumByCategory = days => {
  const [balanceSum, setBalanceSum] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await getBalanceSumByCategory(days);
        setBalanceSum([...data]);
      })();
    }, [days]),
  );

  return [balanceSum];
};
