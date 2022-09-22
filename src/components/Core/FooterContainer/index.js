import React from 'react';
import {
    Container, 
    PrimaryButton, 
    PrimaryButtonText, 
    SecundaryButton, 
    SecundaryButtonText,
} from './styles';

const FooterContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export const PrimaryAction = ({title, onPress}) => {
    return (
      <PrimaryButton onPress={onPress}>
        <PrimaryButtonText>{title}</PrimaryButtonText>
      </PrimaryButton>
    );
};

export const SecundaryAction = ({title, onPress}) => {
    return (
      <SecundaryButton onPress={onPress}>
        <SecundaryButtonText>{title}</SecundaryButtonText>
      </SecundaryButton>
    );
};

export default FooterContainer;