import React, {useState} from 'react';
import {Container, ContainerFilters} from './styles';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BalanceLabel} from '../../components/BalanceLabel';
import {FilterDaysModal} from '../../components/FilterDaysModal';
import {FilterCategoryModal} from '../../components/FilterCategoryModal';
import {EntrySummary} from '../../components/EntrySummary';
import {EntryList} from '../../components/EntryList';
import FooterContainer, {PrimaryAction} from '../../components/Core/FooterContainer';

export const Report = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState({id: null, name: 'Todas categorias'});
  const [day, setDay] = useState(7);

  return (
    <Container>
      <StatusBar backgroundColor={'#233240'} />
      <BalanceLabel />
      <ContainerFilters>
        <FilterCategoryModal category={category} setCategory={setCategory} />
        <FilterDaysModal day={day} selectDay={setDay} />
      </ContainerFilters>
      <EntrySummary />
      <EntryList category={category} days={day} />
      <FooterContainer>
        <PrimaryAction title={'Fechar'} onPress={() => navigation.goBack()} />
      </FooterContainer>
    </Container>
  );
};
