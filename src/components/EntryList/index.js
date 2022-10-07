import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {ContainerDefault} from '../Core/ContainerDefault';
import {RenderList} from './styles';
import {EntryListItem} from './EntryListItem';

import {useEntry} from '../../hooks/useEntry';

export const EntryList = ({days = 7, category}) => {
  const navigation = useNavigation();
  const [entry] = useEntry(days, category);

  return (
    <ContainerDefault
      title="Últimos lançamentos"
      footerTitle="Últimos 7 dias"
      functionButton={() => navigation.navigate('Report')}
      buttonTitle="Ver mais">
      <RenderList
        data={entry}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entry.length - 1}
          />
        )}
      />
    </ContainerDefault>
  );
};
