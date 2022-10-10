import React from 'react';
import {Container, Description, ContainerDescription, Amount} from './styles';

import Svg, {Circle} from 'react-native-svg';
import Colors from '../../../../styles/Colors';

export const EntrySummaryListItem = ({entry}) => {
  const bulletColors = entry ? entry.category.color : Colors.white;

  return (
    <Container>
      <ContainerDescription>
        <Svg width={'30'} height={'30'}>
          <Circle
            cx="15"
            cy="15"
            r={8}
            stroke={Colors.background}
            strokeWidth="2"
            fill={bulletColors}
          />
        </Svg>

        <Description>{entry.description}</Description>
      </ContainerDescription>

      <Amount>R$ {entry.amount}</Amount>
    </Container>
  );
};
