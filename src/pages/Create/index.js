import * as React from 'react';
import { StatusBar } from "react-native";
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import { Left, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';

export default class Create extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor="red" />
        <View style={styles.header}>
          <Left>
          <Text style={styles.title} >Criar postagem</Text>
          </Left>
            <Right>
              <Ionicons name="md-send" size={16} style={styles.post} onPress={() => alert('Criado')} />
            </Right>
        </View>
        <View style={styles.create}>
            {image &&
            <Image source={{ uri: image }} style={styles.preview} />}
              <TextInput placeholder="Descrição da postagem"
              editable
              multiline
              maxLength={200}
              style={styles.input} />
              <View style={styles.buttons}>
              <TouchableOpacity
                onPress={this._pickImage}
                style={styles.select}
              >
                <Text style={styles.selectText}>Selecione uma imagem</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}
