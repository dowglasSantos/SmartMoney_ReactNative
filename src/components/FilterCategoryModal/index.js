import React, {useState, useEffect} from 'react';
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

import {getAllCategories} from '../../services/Category';

export const FilterCategoryModal = ({category, setCategory}) => {
  const [categories, setCategories] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  
  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setCategories(data);
    })();
  }, []);

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
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategorySelect onPress={() => onFilterCategory(item)}>
                <CategorySelectText style={{color: item.color}}>
                  {item.name}
                </CategorySelectText>
              </CategorySelect>
            )}/>

          <FooterContainer>
            <PrimaryAction title={'Fechar'} onPress={() => setVisibleModal(false)} />
          </FooterContainer>
        </ContainerModal>
      </CategoryModa>
    </Container>
  );
};
