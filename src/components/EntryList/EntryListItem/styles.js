import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Description = styled.View`
  flex: 1;
  justify-content: center;
`;

export const DescriptionProps = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const IconProps = styled.Image`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const Time = styled.Text`
  color: #ccc;
`;

export const Current = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 18px;
`;
