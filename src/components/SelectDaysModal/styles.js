import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const DaysModal = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: #233240;
`;

export const DaysList = styled.FlatList`
  flex: 1;
`;

export const DaySelect = styled.TouchableOpacity`
  width: 90%;
  height: 80px;
  margin: 5px auto;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: #34495e;
`;

export const DaySelectText = styled.Text`
  color: #fff;
  font-size: 25px;
`;
