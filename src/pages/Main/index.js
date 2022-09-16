import React from 'react';
import {Container} from './styles';
import {StatusBar} from 'react-native';
import Colors from '../../styles/Colors';

import {BalancePanel} from '../../components/BalancePanel';
import {EntrySummary} from '../../components/EntrySummary';
import {EntryList} from '../../components/EntryList';

export const Main = () => {
  return (
    <Container>
      <StatusBar backgroundColor={Colors.violetDark} />
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};
