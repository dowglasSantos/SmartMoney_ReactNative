import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  height: 80px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  background-color: #34495e;
`;

export const DebitController = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DebitText = styled.Text`
  color: #fff;
  font-size: 28px;
`;
