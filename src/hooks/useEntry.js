import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getEntry, saveEntry, deleteEntry} from '../services/Entry';

export const useEntry = (days, category) => {
  const [entry, setEntry] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const data = await getEntry(days, category);
        setEntry(data);
      })();
    }, [days, category]),
  );

  return [entry, saveEntry, deleteEntry];
};
