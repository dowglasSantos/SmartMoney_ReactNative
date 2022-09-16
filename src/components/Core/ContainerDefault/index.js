import React from 'react';
import {Container, Title, Footer, ButtonFooter, IconButton} from './styles';

export const ContainerDefault = ({
  title,
  footerTitle,
  functionButton,
  buttonTitle,
  children,
}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      {children}

      {title && (
        <Footer>
          {footerTitle && (
            <>
              <Title>{footerTitle}</Title>
              {buttonTitle && (
                <ButtonFooter onPress={functionButton}>
                  <IconButton source={require('../../../assets/grafico.png')} />
                  <Title>{buttonTitle}</Title>
                </ButtonFooter>
              )}
            </>
          )}
        </Footer>
      )}
    </Container>
  );
};
