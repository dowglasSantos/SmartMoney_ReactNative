import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px 0px;
  align-items: center;
`;

export const InputBalance = styled.TextInput`
  width: 95%;
  height: 80px;
  font-size: 28px;
  padding: 5px 20px;
  text-align: right;
  border-radius: 15px;
  align-items: center;
  background-color: #34495e;
`;

export const CategoryButton = styled.TouchableOpacity`
  width: 95%;
  height: 80px;
  text-align: right;
  border-radius: 15px;
  align-items: center;
  margin-top: 15px;
  background-color: #34495e;
`;

export const ContainerSecundaryAction = styled.View`
  width: 60%;
  padding: 10px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const SecundaryActionButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  background-color: #34495c;
`;

export const SecundaryActionIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 20px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const AddButton = styled.TouchableOpacity`
  border-radius: 15px;
  border: 1px solid #2ecc71;
`;

export const AddText = styled.Text`
  color: #2ecc71;
  font-size: 16px;
  padding: 5px 10px;
`;

export const CancelButton = styled.TouchableOpacity``;

export const CancelText = styled.Text`
  color: #ccc;
  font-size: 16px;
`;
