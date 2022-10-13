import React from 'react';
import {Alert} from 'react-native';
import {Container, Icon} from './styles';

import Geolocation from '@react-native-community/geolocation';

export const NewEntryLocationPicker = () => {
  const onButtonLocation = () => {
    const location = Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        Alert.alert(
          'Location',
          `latitude: ${latitude}, longitude: ${longitude} `,
        );
      },
      error => {
        console.log(
          `NewEntryLocationPicker :: error ao salvar a localização ${JSON.stringify(
            error,
          )}`,
        );
        Alert.alert('Atenção', 'Erro ao salvar localização');
      },
    );

    return location;
  };

  return (
    <Container onPress={onButtonLocation}>
      <Icon source={require('../../../assets/pin.png')} />
    </Container>
  );
};
