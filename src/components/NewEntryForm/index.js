/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {saveEntry, deleteEntry} from '../../services/Entry';
import {
  Container,
  HeaderContainer,
  ContainerSecundaryAction,
  SecundaryActionButton,
  SecundaryActionIcon,
  FooterContainer,
  AddButton,
  AddText,
  CancelButton,
  CancelText,
} from './styles';

import {NewEntryInput} from './NewEntryInput';
import {NewEntryCategoryPicker} from './NewEntryCategoryPicker';

export const NewEntryForm = ({entry}) => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(entry.amount);
  const [entryAt] = useState(
    entry.entryAt ? new Date(entry.entryAt) : new Date(),
  );
  const [category, setCategory] = useState(entry.category);
  const [isDebit, setIsDebit] = useState(-1);

  // const [description, setDescription] = useState(entry.description);
  // const [latitude, setLatitude] = useState(entry.latitude);
  // const [longitude, setLongitude] = useState(entry.longitude);
  // const [address, setAddress] = useState(entry.adress);
  // const [photo, setPhoto] = useState(entry.photo);

  const handleSaveEntry = () => {
    if (amount !== '' && amount !== null && amount !== 0) {
      const value = {
        amount: Number.parseFloat(amount),
        entryAt,
        category,
      };

      saveEntry(value, entry);
      navigation.navigate('Main');
      console.log(`NewEntryForm :: handleSaveEntry ${value}`);
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
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          isDebit={setIsDebit}
        />

        <NewEntryCategoryPicker
          category={category}
          onChangeCategory={setCategory}
          isDebit={isDebit}
        />

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
