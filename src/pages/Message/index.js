import React from 'react';
import { View, Text, FlatList, StatusBar, Platform} from 'react-native';
import {Container, Item, Input, Icon, List, ListItem, Left, Thumbnail, Body} from 'native-base';
import { useFocusEffect } from "@react-navigation/native";
import styles from './styles';


// import { Container } from './styles';

export default function Message() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#7159c1');
    }, [])
  );
  return (
    <Container style={styles.container}>
      <Item style={styles.search}>
        <Icon name="ios-search" style={styles.icon} />
        <Input placeholder="Procurar amigo ou grupo ..." placeholderTextColor="#B0B0B0" style={styles.input} />
      </Item>
      <FlatList data={[1,2,3]}
            keyExtractor={feed => String(feed)}
            showsVerticalScrollIndicator={false}
            renderItem={()=> (
              <View>
                <List>
                  <ListItem avatar onPress={() => alert('Rocketseat')}>
                      <Left>
                        <Thumbnail source={require('../../assets/rocketseat.png')} />
                      </Left>
                    <Body>
                      <View style={styles.userdate}>
                        <Text style={styles.username}>Rocketseat</Text>
                        <Text style={styles.hour}>10:28</Text>
                      </View>
                      <Text note style={styles.description}>Olá Devs! Hoje começa a Semana...</Text>
                    </Body>
                      <Text style={styles.number}>5</Text>
                </ListItem>
                  </List>
                  <List>
                    <ListItem avatar onPress={() => alert('DevTek')}>
                      <Left>
                        <Thumbnail source={require('../../assets/avatar.png')} />
                      </Left>
                    <Body>
                    <View style={styles.userdate}>
                        <Text style={styles.username}>DevTek</Text>
                        <Text style={styles.hour}>09:30</Text>
                      </View>
                        <Text note style={styles.description}>Olá Pessoal, meu nome é José e e...</Text>
                      </Body>
                      <Text style={styles.number}>2</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem avatar onPress={() => alert('Gustavo Fernandes')}>
                      <Left>
                        <Thumbnail source={require('../../assets/native.png')} />
                      </Left>
                      <Body>
                      <View style={styles.userdate}>
                        <Text style={styles.username}>Gustavo Fernandes</Text>
                        <Text style={styles.hour}>20:00</Text>
                      </View>
                        <Text note style={styles.description}>Você está disponível agora?</Text>
                      </Body>
                      <Text style={styles.number}>2</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem avatar onPress={() => alert('Matheus Henrique')}>
                      <Left>
                        <Thumbnail source={require('../../assets/avatar4.jpg')} />
                      </Left>
                      <Body>
                      <View style={styles.userdate}>
                        <Text style={styles.username}>Matheus Henrique</Text>
                        <Text style={styles.hour}>10:28</Text>
                      </View>
                        <Text note style={styles.description}>Estou desenvolvendo um projeto...
                        </Text>
                      </Body>
                      <Text style={styles.number}>1</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem avatar onPress={() => alert('Mark Henry')}>
                      <Left>
                        <Thumbnail source={require('../../assets/avatar5.jpg')} />
                      </Left>
                      <Body>
                      <View style={styles.userdate}>
                        <Text style={styles.username}>Mark Henry</Text>
                        <Text style={styles.hour}>11:00</Text>
                      </View>
                        <Text note style={styles.description}>
                          Hello my friend!
                        </Text>
                      </Body>
                      <Text style={styles.number}>1</Text>
                    </ListItem>
                  </List>
              </View>
            )}
        />
    </Container>
  );
}
