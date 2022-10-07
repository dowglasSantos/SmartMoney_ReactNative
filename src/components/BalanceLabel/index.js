import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Title, Balance} from './styles';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

import {useBalance} from '../../hooks/useBalance';

export const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <LinearGradient
        colors={[Colors.violetDark, Colors.blueDark]}
        style={styles.linearGradient}>
        <Balance>R$ {balance}</Balance>
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    marginTop: 5,
    borderRadius: 5,
    minWidth: 150,
    alignItems: 'center',
  },
});
