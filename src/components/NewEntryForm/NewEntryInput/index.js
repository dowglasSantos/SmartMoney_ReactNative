/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import {Container, DebitController, DebitText} from './styles';
import Colors from '../../../styles/Colors';

export const NewEntryInput = ({value, onChangeValue, isDebit}) => {
  const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
  const [textController, setTextController] = useState(value <= 0 ? '-' : '');

  const handleDebitController = () => {
    if (debit <= 0) {
      setDebit(1);
      setTextController('');
      isDebit(1);
    } else {
      setDebit(-1);
      setTextController('-');
      isDebit(-1);
    }

    onChangeValue(value * -1);
  };

  return (
    <Container>
      <DebitController onPress={handleDebitController}>
        <DebitText style={{minWidth: 8}}>{textController}</DebitText>
        <DebitText>R$</DebitText>
      </DebitController>

      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue && onChangeValue(rawValue * debit);
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 28,
    paddingRight: 20,
    textAlign: 'right',
    backgroundColor: Colors.asphalt,
  },
});
