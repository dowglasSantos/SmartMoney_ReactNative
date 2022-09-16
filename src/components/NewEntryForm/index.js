/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Container,
  HeaderContainer,
  InputBalance,
  CategoryButton,
  ContainerSecundaryAction,
  SecundaryActionButton,
  SecundaryActionIcon,
  FooterContainer,
  AddButton,
  AddText,
  CancelButton,
  CancelText,
} from './styles';

import {saveEntry, deleteEntry} from '../../services/Entry';
import {useNavigation} from '@react-navigation/native';

export const NewEntryForm = ({entry}) => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(`${entry.amount}`);

  console.log('NewEntryForm :: entry', entry);

  const handleSaveEntry = () => {
    if (amount !== '' && amount !== null) {
      const value = {
        amount: Number.parseFloat(amount),
      };

      saveEntry(value);
      navigation.navigate('Main');
    } else {
      return false;
    }
  };

  const handleDeleteEntry = () => {
    deleteEntry(entry);
    navigation.navigate('Main');
  };

  return (
    <Container>
      <HeaderContainer>
        <InputBalance
          placeholder={'0'}
          keyboardType={'numeric'}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <CategoryButton />
        <ContainerSecundaryAction>
          <SecundaryActionButton>
            <SecundaryActionIcon source={require('../../assets/can.png')} />
          </SecundaryActionButton>

          <SecundaryActionButton>
            <SecundaryActionIcon source={require('../../assets/pin.png')} />
          </SecundaryActionButton>

          <SecundaryActionButton
            onPress={handleDeleteEntry}
            style={{backgroundColor: '#f00'}}>
            <SecundaryActionIcon source={require('../../assets/trash.png')} />
          </SecundaryActionButton>
        </ContainerSecundaryAction>
      </HeaderContainer>
      <FooterContainer>
        <AddButton onPress={handleSaveEntry}>
          <AddText>Adicionar</AddText>
        </AddButton>
        <CancelButton onPress={() => navigation.navigate('Main')}>
          <CancelText>Cancelar</CancelText>
        </CancelButton>
      </FooterContainer>
    </Container>
  );
};
