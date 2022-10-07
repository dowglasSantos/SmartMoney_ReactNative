import React, {useState} from 'react';
import {
  Container,
  Title,
  CategoryModa,
  ContainerModal,
  CategoryList,
  CategorySelect,
  CategorySelectText,
} from './styles';
import FooterContainer, {PrimaryAction} from '../Core/FooterContainer';

import {useCategory} from '../../hooks/useCategory';

export const FilterCategoryModal = ({category, setCategory}) => {
  const [allCategories] = useCategory();
  const [visibleModal, setVisibleModal] = useState(false);

  const onFilterCategory = item => {
    setCategory(item);
    setVisibleModal(false);
  };

  return (
    <Container onPress={() => setVisibleModal(true)}>
      <Title>{category.name}</Title>

      <CategoryModa
        transparent={false}
        visible={visibleModal}
        animationType={'slide'}
        onRequestClose={() => setVisibleModal(false)}>
        <ContainerModal>
          <CategoryList
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategorySelect onPress={() => onFilterCategory(item)}>
                <CategorySelectText style={{color: item.color}}>
                  {item.name}
                </CategorySelectText>
              </CategorySelect>
            )}
          />

          <FooterContainer>
            <PrimaryAction
              title={'Fechar'}
              onPress={() => setVisibleModal(false)}
            />
          </FooterContainer>
        </ContainerModal>
      </CategoryModa>
    </Container>
  );
};
