import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonNavigation, ButtonNavigationIcon} from './styles';
import Colors from '../../styles/Colors';

import {BalancePanelLabel} from './BalancePanelLabel';
import {BalancePanelChart} from './BalancePanelChart';

import {useNavigation} from '@react-navigation/native';

export const BalancePanel = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[Colors.violetDark, Colors.blueDark]}
      style={styles.linearGradient}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <ButtonNavigation
        onPress={() => {
          navigation.navigate('NewEntry');
        }}>
        <ButtonNavigationIcon source={require('../../assets/plus.png')} />
      </ButtonNavigation>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    zIndex: 2,
  },
});
