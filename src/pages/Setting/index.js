import React from 'react';
import { View, Text, Image, Platform, StatusBar } from 'react-native';
import styles from './styles';
import { useFocusEffect } from "@react-navigation/native";
import { List, ListItem } from 'native-base';

// import { Container } from './styles';

export default function Setting() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#7159c1');
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titlebar}>Native_Dev2020</Text>
      </View>
      <View style={styles.user}>
        <Image source={require('../../assets/user.png')} style={styles.imgUser} />
        <Text style={styles.username}>Native_Dev2020</Text>
      </View>
      <List style={styles.list}>
        <ListItem onPress={() => alert('teste')}>
          <Text style={styles.listName}>Hangover</Text>
        </ListItem>
        <ListItem onPress={() => alert('teste')}>
          <Text>Hangover</Text>
        </ListItem>
        <ListItem onPress={() => alert('teste')}>
          <Text>Hangover</Text>
        </ListItem>
        <ListItem onPress={() => alert('teste')}>
          <Text>Hangover</Text>
        </ListItem>
        <ListItem onPress={() => alert('teste')}>
          <Text>Hangover</Text>
        </ListItem>
      </List>

    </View>
  );
}
