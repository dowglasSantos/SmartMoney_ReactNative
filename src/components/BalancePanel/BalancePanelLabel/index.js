import React from 'react';
import {Container, Title, Balance} from './styles';

import {useBalance} from '../../../hooks/useBalance';

export const BalancePanelLabel = () => {
  const [balance] = useBalance();

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <Balance>R$ {balance}</Balance>
    </Container>
  );
};
