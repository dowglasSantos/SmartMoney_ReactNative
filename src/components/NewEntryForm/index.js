import React, {useState} from 'react';
import {useEntry} from '../../hooks/useEntry';
import {useNavigation} from '@react-navigation/native';
import {Container, HeaderContainer, ContainerSecundaryAction} from './styles';
import FooterContainer, {
  PrimaryAction,
  SecundaryAction,
} from '../Core/FooterContainer';

import {NewEntryInput} from './NewEntryInput';
import {NewEntryCategoryPicker} from './NewEntryCategoryPicker';
import {NewEntryDatePicker} from './NewEntryDatePicker';
import {NewEntryLocationPicker} from './NewEntryLocationPicker';
import {NewEntryDeletePicker} from './NewEntryDeletePicker';

export const NewEntryForm = ({entry}) => {
  const [, saveEntry, deleteEntry] = useEntry();
  const navigation = useNavigation();
  const [amount, setAmount] = useState(entry.amount);
  const [entryAt, setEntryAt] = useState(
    entry.entryAt ? new Date(entry.entryAt) : new Date(),
  );
  const [category, setCategory] = useState(entry.category);
  const [isDebit, setIsDebit] = useState(amount <= 0 ? true : false);
  const [description] = useState(entry.description);

  // const [latitude, setLatitude] = useState(entry.latitude);
  // const [longitude, setLongitude] = useState(entry.longitude);
  // const [address, setAddress] = useState(entry.adress);
  // const [photo, setPhoto] = useState(entry.photo);

  const validation = () => {
    if (amount !== null && amount !== 0 && category.id !== null) {
      return true;
    } else {
      return false;
    }
  };

  const onSaveEntry = () => {
    if (validation()) {
      const value = {
        amount: Number.parseFloat(amount),
        description,
        entryAt,
        category,
      };

      saveEntry(value, entry);
      navigation.navigate('Main');
      console.log(`NewEntryForm :: onSaveEntry ${value}`);
    } else {
      return false;
    }
  };

  const onDelete = () => {
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
          <NewEntryDatePicker entryAt={entryAt} onChange={setEntryAt} />
          <NewEntryLocationPicker />
          {entry.id && <NewEntryDeletePicker onDelete={onDelete} />}
        </ContainerSecundaryAction>
      </HeaderContainer>

      <FooterContainer>
        <PrimaryAction
          title={entry.id ? 'Atualizar' : 'Adicionar'}
          onPress={onSaveEntry}
        />
        <SecundaryAction
          title={'Cancelar'}
          onPress={() => navigation.goBack()}
        />
      </FooterContainer>
    </Container>
  );
};
