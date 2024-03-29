import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: [ '#8e44ad', '#2980b9'],
  start: { x: 0, y: 0},
  end: { x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight()};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`;
export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
  `;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  background: #FFF;
  border: 2px solid ${props => props.error ? '#FF7272' : '#FFF'};
`;

export const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyled: { paddingHorizontal: 20},
  showVerticalIndicator: false,
})`
margin-top: 20px;
`;

