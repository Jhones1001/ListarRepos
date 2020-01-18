import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';
import { Container, Name, Description, Stat, Stats, StatCount, Refresh, RefreshText, DetailsText, Details } from './styles';

export default withNavigation(function Repository({ data, onRefresh, navigation }) {

  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333"/>
          <StatCount>{data.stars}</StatCount>
        </Stat>
      </Stats>
      <Stats>
        <Stat>
          <Icon name="code-fork" size={16} color="#333"/>
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

          <Refresh onPress={onRefresh}>
            <Icon name="refresh" color="#7159c1" size={18}/>
            <RefreshText>ATUALIZAR</RefreshText>
          </Refresh>


    </Container>
  );
}
);
