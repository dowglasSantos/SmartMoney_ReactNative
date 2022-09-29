import React, {useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {ContainerDefault} from '../Core/ContainerDefault';
import {RenderList} from './styles';
import {EntryListItem} from './EntryListItem';

import {getEntry} from '../../services/Entry';

export const EntryList = ({days = 7}) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadingDataBase = async () => {
        const releasesList = await getEntry(days);
        return setData(releasesList);
      };

      loadingDataBase();
    }, [days]),
  );

  return (
    <ContainerDefault
      title="Últimos lançamentos"
      footerTitle="Últimos 7 dias"
      functionButton={() => navigation.navigate('Report')}
      buttonTitle="Ver mais">
      <RenderList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === data.length - 1}
          />
        )}
      />
    </ContainerDefault>
  );
};
