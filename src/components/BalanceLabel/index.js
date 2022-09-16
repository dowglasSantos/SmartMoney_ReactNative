import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Title, Balance} from './styles';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

export const BalanceLabel = () => {
  return (
    <Container>
      <Title>Saldo Atual</Title>
      <LinearGradient
        colors={[Colors.violetDark, Colors.blueDark]}
        style={styles.linearGradient}>
        <Balance>$2.000,00</Balance>
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    marginTop: 5,
    borderRadius: 5,
  },
});
