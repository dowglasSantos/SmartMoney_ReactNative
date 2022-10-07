import React, {useState} from 'react';
import {
  Container,
  Title,
  DaysModal,
  ContainerModal,
  DaysList,
  DaySelect,
  DaySelectText,
} from './styles';

import FooterContainer, {PrimaryAction} from '../Core/FooterContainer';

export const FilterDaysModal = ({day, selectDay}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  const onFilterDays = item => {
    selectDay(item);
    setVisibleModal(false);
  };

  return (
    <Container onPress={() => setVisibleModal(true)}>
      <Title>{`${day} dias`}</Title>

      <DaysModal
        animationType={'slide'}
        transparent={false}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
        <ContainerModal>
          <DaysList
            data={relativeDays}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <DaySelect onPress={() => onFilterDays(item)}>
                <DaySelectText>{`${item} dias`}</DaySelectText>
              </DaySelect>
            )}
          />
          <FooterContainer>
            <PrimaryAction
              title={'Fechar'}
              onPress={() => setVisibleModal(false)}
            />
          </FooterContainer>
        </ContainerModal>
      </DaysModal>
    </Container>
  );
};
