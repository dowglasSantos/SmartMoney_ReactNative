import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getBalance} from '../services/Balance';

export const useBalance = () => {
  const [balance, setBalance] = useState();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const value = await getBalance();
        setBalance(value);
      })();
    }, []),
  );

  return [balance];
};
