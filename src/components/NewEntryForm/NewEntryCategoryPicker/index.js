/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  Container,
  VisibleModalController,
  Title,
  CategoriesModal,
  ModalContainer,
  CategoriesContainer,
  CategoryButton,
  CloseButton,
  CloseButtonText,
} from './styles';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Category';

export const NewEntryCategoryPicker = ({
  category,
  onChangeCategory,
  isDebit,
}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log(`NewEntryCategory :: category :${JSON.stringify(category)}`);
  console.log(`NewEntryCategory :: isDebit :${JSON.stringify(isDebit)}`);

  useEffect(() => {
    categoriesRequest();
  }, [isDebit]);

  const categoriesRequest = async () => {
    if (isDebit <= 0) {
      const data = await getDebitCategories();
      setCategories(data);

      // console.log(`categoriesRequest :: isDebit: ${JSON.stringify(data)}`);
    } else {
      const data = await getCreditCategories();
      setCategories(data);

      console.log(`categoriesRequest :: isCredit:${JSON.stringify(data)}`);
    }
  };

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
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategoryButton onPress={() => categorySelect(item)}>
                <Title style={{color: item.color}}>{item.name}</Title>
              </CategoryButton>
            )}
          />

          <CloseButton onPress={() => setVisibleModal(false)}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ModalContainer>
      </CategoriesModal>
    </Container>
  );
};
