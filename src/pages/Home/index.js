import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Home() {
    const navigation = useNavigation();

    function navigateToGroup() {
        navigation.navigate('Grupo');
    }
    
  return (
    <View style={styles.container}>
        <FlatList data={[1,2,3,4,5]}
            style={styles.flatlist}
            keyExtractor={feed => String(feed)}
            showsVerticalScrollIndicator={false}
            renderItem={()=> (
                <View style={styles.feedList}>
                    <View style={styles.title}> 
                        <Image style={styles.avatar} source={require('../../assets/avatar.png')} />
                        <Text style={styles.username}>DevTek</Text>
                    </View>
                    <Image style={styles.post} source={require('../../assets/imgfeed.png')} />
                    <Text style={styles.description}>Olá somos da DevTek, estamos a procura de
                     desenvolvedores. Faça parte da nossa empresa clicando no botão entrar. </Text>
                    <TouchableOpacity style={styles.button} onPress={navigateToGroup}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
  );
}
