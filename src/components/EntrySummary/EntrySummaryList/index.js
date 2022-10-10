import React from 'react';
import {Container, CategoriesList} from './styles';

import {useEntry} from '../../../hooks/useEntry';
import {EntrySummaryListItem} from './EntrySummaryListItem';

export const EntrySummaryList = ({days, category}) => {
  const [entry] = useEntry(days, category);

  return (
    <Container>
      <CategoriesList
        data={entry}
        keyExtractor={item => item.id}
        renderItem={({item}) => <EntrySummaryListItem entry={item} />}
      />
    </Container>
  );
};
