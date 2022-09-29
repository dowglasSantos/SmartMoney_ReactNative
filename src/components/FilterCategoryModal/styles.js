import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 45%;
  padding: 5px 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 20px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  margin-top: 8.5px;
  margin-left: 5px;
`;

export const CategoryModa = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: #233240;
`;

export const CategoryList = styled.FlatList`
  flex: 1;
`;

export const CategorySelect = styled.TouchableOpacity`
  width: 90%;
  height: 80px;
  margin: 5px auto;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #34495e;
`;

export const CategorySelectText = styled.Text`
  color: #fff;
  font-size: 25px;
`;