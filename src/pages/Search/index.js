import React from 'react';
import {Container, Header, Item, Input, Icon, List, ListItem, Left, Body, Thumbnail} from 'native-base';
import styles from './styles';
import { Text, View, StatusBar, Platform } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();

  function navigateToUser() {
    navigation.navigate('Usuário');
  }
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
    }, [])
  );

  function handleSearch(text) {
    console.log('text', text);
  }

  
  return (
    <Container>
       <Header searchBar rounded style={styles.header}>
          <Item style={styles.box}>
            <Icon name="ios-search" style={styles.icon} />
            <Input placeholder="Pesquisar" style={styles.text} placeholderTextColor={'#888'} onChangeText={handleSearch} />
          </Item>
        </Header>
        
        <FlatList
          data={[1,2,3,4,5]}
          keyExtractor={list => String(list)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
          <View>
              <List>
                <ListItem avatar onPress={navigateToUser}>
                  <Left>
                    <Thumbnail source={require('../../assets/rocketseat.png')} />
                  </Left>
                  <Body>
                    <Text style={styles.username}>Rocketseat</Text>
                    <Text note style={styles.description}>Desenvolvedor FullStack Javascript, Node, React</Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar onPress={() => alert('DevTek')}>
                  <Left>
                    <Thumbnail source={require('../../assets/avatar.png')} />
                  </Left>
                  <Body>
                    <Text style={styles.username}>DevTek</Text>
                    <Text note style={styles.description}>Desenvolvedor Java, PHP, Laravel, Front-end</Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar onPress={() => alert('Gustavo Fernandes')}>
                  <Left>
                    <Thumbnail source={require('../../assets/native.png')} />
                  </Left>
                  <Body>
                    <Text style={styles.username}>Gustavo Fernandes</Text>
                    <Text note style={styles.description}>Desenvolvedor FullStack em React Native</Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar onPress={() => alert('Matheus Henrique')}>
                  <Left>
                    <Thumbnail source={require('../../assets/avatar4.jpg')} />
                  </Left>
                  <Body>
                    <Text style={styles.username}>Matheus Henrique</Text>
                    <Text note style={styles.description}>CEO da empresa NODE Solutions, gerente de projetos,
                    Scrum Master
                    </Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar onPress={() => alert('Mark Henry')}>
                  <Left>
                    <Thumbnail source={require('../../assets/avatar5.jpg')} />
                  </Left>
                  <Body>
                    <Text style={styles.username}>Mark Henry</Text>
                    <Text note style={styles.description}>Gerente de projetos, Recrutador da Microsoft,
                      líder de equipe de banco de dados
                    </Text>
                  </Body>
                </ListItem>
              </List>
          </View>
          )}
        />
    </Container>
  );
}
