import React, {useState} from 'react';
import {Container} from './styles';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BalanceLabel} from '../../components/BalanceLabel';
import {SelectDaysModal} from '../../components/SelectDaysModal';
import {EntrySummary} from '../../components/EntrySummary';
import {EntryList} from '../../components/EntryList';
import FooterContainer, {PrimaryAction} from '../../components/Core/FooterContainer';

export const Report = () => {
  const navigation = useNavigation();
  const [day, setDay] = useState(7);

  return (
    <Container>
      <StatusBar backgroundColor={'#233240'} />
      <BalanceLabel />
      <SelectDaysModal day={day} selectDay={setDay} />
      <EntrySummary />
      <EntryList days={day} />
      <FooterContainer>
        <PrimaryAction title={'Fechar'} onPress={() => navigation.goBack()} />
      </FooterContainer>
    </Container>
  );
};
