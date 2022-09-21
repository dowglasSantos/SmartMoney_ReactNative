import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  padding: 5px 5px 8px 5px;
  background-color: #34495e;
  max-height: 50%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Footer = styled.View`
  width: 100%;
  /* margin-top: 15px; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonFooter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.Image`
  width: 12px;
  height: 12px;
`;
