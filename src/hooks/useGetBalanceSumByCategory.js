import {useState, useEffect} from 'react';

import {getBalanceSumByCategory} from '../services/Balance';

export const useGetBalanceSumByCategory = days => {
  const [balanceSum, setBalanceSum] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBalanceSumByCategory(days);
      setBalanceSum([...data]);
    })();
  }, [days]);

  return [balanceSum];
};
