import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ContainerComponents} from './styles';

import {ContainerDefault} from '../Core/ContainerDefault';
import {EntrySummaryChart} from './EntrySummaryChart';
import {EntrySummaryList} from './EntrySummaryList';

export const EntrySummary = ({days = 7, category}) => {
  const navigation = useNavigation();

  return (
    <ContainerDefault
      title="Categorias"
      footerTitle={`Últimos ${days} dias`}
      functionButton={() => navigation.navigate('Report')}
      buttonTitle="Ver mais">
      <ContainerComponents>
        <EntrySummaryChart />
        <EntrySummaryList days={days} category={category} />
      </ContainerComponents>
    </ContainerDefault>
  );
};
