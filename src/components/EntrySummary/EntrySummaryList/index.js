import React from 'react';
import {Container, CategoriesList} from './styles';
import {EntrySummaryListItem} from './EntrySummaryListItem';

export const EntrySummaryList = ({setBalanceSum}) => {
  console.log(
    `EntrySummaryList :: setBalanceSum: ${JSON.stringify(setBalanceSum)}`,
  );

  return (
    <Container>
      <CategoriesList
        data={setBalanceSum}
        keyExtractor={item => item.category.id}
        renderItem={({item}) => <EntrySummaryListItem category={item} />}
      />
    </Container>
  );
};
