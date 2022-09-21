import React from 'react';
import {Container} from './styles';
import {StatusBar} from 'react-native';

import Colors from '../../styles/Colors';

import {BalanceLabel} from '../../components/BalanceLabel';
import {NewEntryForm} from '../../components/NewEntryForm';

export const NewEntry = ({route}) => {
  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        description: null,
        entryAt: new Date(),
        latitude: null,
        longitude: null,
        address: null,
        photo: null,
        isInit: true,
        category: {id: null, name: 'Selecionar'},
      };

  return (
    <Container>
      <StatusBar backgroundColor={Colors.background} />
      <BalanceLabel />
      <NewEntryForm entry={entry} />
    </Container>
  );
};
