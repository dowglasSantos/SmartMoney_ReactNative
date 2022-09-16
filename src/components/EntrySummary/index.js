import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ContainerComponents} from './styles';

import {ContainerDefault} from '../Core/ContainerDefault';
import {EntrySummaryChart} from './EntrySummaryChart';
import {EntrySummaryList} from './EntrySummaryList';

export const EntrySummary = () => {
  const navigation = useNavigation();

  return (
    <ContainerDefault
      title="Categorias"
      footerTitle="Últimos 7 dias"
      functionButton={() => navigation.navigate('Report')}
      buttonTitle="Ver mais">
      <ContainerComponents>
        <EntrySummaryChart />
        <EntrySummaryList />
      </ContainerComponents>
    </ContainerDefault>
  );
};
