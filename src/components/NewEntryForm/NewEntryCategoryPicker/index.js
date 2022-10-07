import React, {useState} from 'react';
import {
  Container,
  VisibleModalController,
  Title,
  CategoriesModal,
  ModalContainer,
  CategoriesContainer,
  CategoryButton,
} from './styles';
import FooterContainer, {PrimaryAction} from '../../Core/FooterContainer';

import {useCategory} from '../../../hooks/useCategory';

export const NewEntryCategoryPicker = ({
  category,
  onChangeCategory,
  isDebit,
}) => {
  const [allCategories, debitCategories, creditCategories] = useCategory();
  const [visibleModal, setVisibleModal] = useState(false);

  console.log(`NewEntryCategory :: isDebit :${JSON.stringify(isDebit)}`);

  const categorySelect = item => {
    onChangeCategory(item);
    setVisibleModal(false);
  };

  return (
    <Container>
      <VisibleModalController onPress={() => setVisibleModal(true)}>
        <Title style={{color: category.color}}>{category.name}</Title>
      </VisibleModalController>

      <CategoriesModal
        animationType={'slide'}
        transparent={false}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
        <ModalContainer>
          <CategoriesContainer
            data={isDebit ? debitCategories : creditCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategoryButton onPress={() => categorySelect(item)}>
                <Title style={{color: item.color}}>{item.name}</Title>
              </CategoryButton>
            )}
          />

          <FooterContainer>
            <PrimaryAction
              title={'Fechar'}
              onPress={() => setVisibleModal(false)}
            />
          </FooterContainer>
        </ModalContainer>
      </CategoriesModal>
    </Container>
  );
};
