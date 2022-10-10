import React from 'react';
import {Container, Description, ContainerDescription, Amount} from './styles';

import Svg, {Circle} from 'react-native-svg';
import Colors from '../../../../styles/Colors';

export const EntrySummaryListItem = ({category}) => {
  const bulletColors = category ? category.category.color : Colors.white;

  console.log(`EntrySummaryListItem :: category: ${JSON.stringify(category)}`);

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

        <Description>{category.category.name}</Description>
      </ContainerDescription>

      <Amount>R$ {category.amount}</Amount>
    </Container>
  );
};
