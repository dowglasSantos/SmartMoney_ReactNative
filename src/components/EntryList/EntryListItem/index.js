/* eslint-disable prettier/prettier */
import React from 'react';
import {Container, Title} from './styles';

import Svg, {Rect, Circle} from 'react-native-svg';

import Colors from '../../../styles/Colors';

export const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletControllerY = isFirstItem ? 25 : 0;
  const bulletControllerHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
//   const bulletControllerColor = entry.category.color || Colors.white;

  return (
    <Container>
      <Svg width={'30'} height={'50'}>
        {showBulletLine && (
        <Rect
          x="9.5"
          y={bulletControllerY}
          width="1.5"
          height={bulletControllerHeight}
          fill={Colors.red} />
        )}

        <Circle
          cx="10"
          cy="25"
          r={8}
          stroke={Colors.red}
          strokeWidth="1.5"
          fill={Colors.green}
        />
      </Svg>

      <Title>{entry.amount}</Title>
    </Container>
  );
};

/*
onPress={() => {
    const itemToJson = JSON.parse(JSON.stringify(item));
    navigation.navigate('NewEntry', {entry: itemToJson});}
}
*/
