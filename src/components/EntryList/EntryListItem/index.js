import React from 'react';
import {
  Container,
  Description,
  Title,
  DescriptionProps,
  IconProps,
  Time,
  Current,
  Amount,
} from './styles';
import {useNavigation} from '@react-navigation/native';

import Colors from '../../../styles/Colors';
import Svg, {Rect, Circle} from 'react-native-svg';

export const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const navigation = useNavigation();

  const bulletControllerY = isFirstItem ? 25 : 0;
  const bulletControllerHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  //   const bulletControllerColor = entry.category.color || Colors.white;

  return (
    <Container
      onPress={() => {
        const itemToJson = JSON.parse(JSON.stringify(entry));
        navigation.navigate('NewEntry', {entry: itemToJson});
      }}>
      <Svg width={'30'} height={'50'}>
        {showBulletLine && (
          <Rect
            x="9.5"
            y={bulletControllerY}
            width="2"
            height={bulletControllerHeight}
            fill={Colors.background}
          />
        )}

        <Circle
          cx="10"
          cy="25"
          r={8}
          stroke={Colors.background}
          strokeWidth="2"
          fill={Colors.white}
        />
      </Svg>

      <Description>
        <Title>Budega do seu joão</Title>

        <DescriptionProps>
          <IconProps source={require('../../../assets/time.png')} />
          <Time>{JSON.stringify(entry.entryAt)}</Time>
        </DescriptionProps>
      </Description>

      <Current>
        <Amount>R$ {entry.amount}</Amount>
      </Current>
    </Container>
  );
};
