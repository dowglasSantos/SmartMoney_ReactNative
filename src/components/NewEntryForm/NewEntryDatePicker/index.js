import React, {useState} from 'react';
import {Container, Icon} from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const NewEntryDatePicker = ({entryAt, onChange}) => {
  const [visible, setVisible] = useState(false);
  
  const onSetDate = (date) => {
    onChange(date);
    setVisible(true);
  };

  return (
    <Container onPress={onSetDate}>
      <Icon source={require('../../../assets/calendario.png')} />

      <DateTimePickerModal
        mode={'data'} 
        value={entryAt}
        isVisible={visible} 
        onCancel={() => setVisible(false)} 
        onConfirm={date => onSetDate(date)}
        cancelTextIOS={'Cancelar'}
        confirmTextIOS={'Salvar'} />
    </Container>
  );
};