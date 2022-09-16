import React from 'react';
import {Container, Title, Balance} from './styles';

export const BalancePanelLabel = () => {
  return (
    <Container>
      <Title>Saldo Atual</Title>
      <Balance>$2.000,00</Balance>
    </Container>
  );
};
