import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Home/styles';

export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titlebar}>Teste</Text>
      </View>
      <View style={styles.user} >
        <Text>Usuário</Text>
      </View>
    </View>
  );
}
