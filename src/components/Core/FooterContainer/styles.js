import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 15px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: #F00; */
`;

export const PrimaryButton = styled.TouchableOpacity`
  border-radius: 30px;
  border: 1px solid #1cb556;
`;

export const PrimaryButtonText = styled.Text`
  color: #1cb556;
  font-size: 18px;
  padding: 5px 15px;
`;

export const SecundaryButton = styled.TouchableOpacity``;

export const SecundaryButtonText = styled.Text`
  font-size: 16px;
  color: rgb(140, 140, 140);
`;
