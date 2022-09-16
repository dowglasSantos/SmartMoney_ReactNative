import React from 'react';
import {ContainerComponents} from './styles';

import {ContainerDefault} from '../Core/ContainerDefault';
import {EntrySummaryChart} from './EntrySummaryChart';
import {EntrySummaryList} from './EntrySummaryList';

export const EntrySummary = () => {
  return (
    <ContainerDefault
      title="Categorias"
      footerTitle="Últimos 7 dias"
      functionButton={() => {}}
      buttonTitle="Ver mais">
      <ContainerComponents>
        <EntrySummaryChart />
        <EntrySummaryList />
      </ContainerComponents>
    </ContainerDefault>
  );
};
