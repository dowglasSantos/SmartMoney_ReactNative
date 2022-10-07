import React from 'react';
import {Alert} from 'react-native';
import {Container, Icon} from './styles';

export const NewEntryDeletePicker = ({onDelete}) => {
  const deleteEntry = () => {
    Alert.alert(
      'Deletar?',
      'Você realmente deseja apagar esse registro?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onDelete()},
      ],
      {cancelable: false},
    );
  };

  return (
    <Container onPress={deleteEntry}>
      <Icon source={require('../../../assets/trash.png')} />
    </Container>
  );
};
