import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import {Main} from '../pages/Main';
import {NewEntry} from '../pages/NewEntry';
import {Report} from '../pages/Report';

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main">
        <Screen name="Main" component={Main} options={{headerShown: false}} />
        <Screen
          name="NewEntry"
          component={NewEntry}
          options={{headerShown: false}}
        />
        <Screen
          name="Report"
          component={Report}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
