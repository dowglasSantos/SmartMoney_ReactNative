import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ContainerComponents} from './styles';

import {ContainerDefault} from '../Core/ContainerDefault';
import {EntrySummaryChart} from './EntrySummaryChart';
import {EntrySummaryList} from './EntrySummaryList';

import {useGetBalanceSumByCategory} from '../../hooks/useGetBalanceSumByCategory';

export const EntrySummary = ({days = 7}) => {
  const navigation = useNavigation();
  const [balanceSum] = useGetBalanceSumByCategory(days);

  return (
    <ContainerDefault
      title="Categorias"
      footerTitle={`Últimos ${days} dias`}
      functionButton={() => navigation.navigate('Report')}
      buttonTitle="Ver mais">
      <ContainerComponents>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList setBalanceSum={balanceSum} />
      </ContainerComponents>
    </ContainerDefault>
  );
};
