import React from 'react';
import { Text, StatusBar, Platform } from 'react-native';
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
import styles from './styles';

// import { Container } from './styles';

export default function Joined() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#7159c1');
    }, [])
  );
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Text>Grupo</Text>
    </SafeAreaView>
  );
}
