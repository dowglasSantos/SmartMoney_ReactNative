import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  height: 80px;
  text-align: right;
  border-radius: 15px;
  align-items: center;
  margin-top: 15px;
  background-color: #34495e;
  align-items: center;
  justify-content: center;
`;

export const VisibleModalController = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
`;

export const CategoriesModal = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #233240;
`;

export const CategoriesContainer = styled.FlatList`
  flex: 1;
`;

export const CategoryButton = styled.TouchableOpacity`
  width: 95%;
  height: 80px;
  margin-top: 15px;
  text-align: right;
  border-radius: 15px;
  align-items: center;
  align-items: center;
  justify-content: center;
  background-color: #34495e;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 15px 2px;
  align-items: center;
  justify-content: center;
  /* background-color: #f00; */
`;

export const CloseButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  padding: 2px 20px;
  border-radius: 15px;
  border: 1px solid #1cb456;
`;
