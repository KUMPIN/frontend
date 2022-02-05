import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ChangeAccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: true};
  }

  _clickedMenu

  Submit = () => {
    fetch('http://kitcapstone.iptime.org:3000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude : this.state.latitudeValue,
        longitude : this.state.longitudeValue,
        latitudeDelta : this.state.latitudeDeltaValue,
        longitudeDelta : this.state.longitudeDeltaValue,
      }),
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>현재 비밀번호</Text>
        <TextInput
        keyboardType="default"
        placeholder="비밀번호를 입력하세요."
        style={styles.input}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        
        <Text style={styles.title}>새 비밀번호</Text>
        <TextInput
        keyboardType="default"
        placeholder="새 비밀번호를 입력하세요."
        style={styles.input}
        />
        
        <Text style={styles.title}>새 비밀번호 확인</Text>
        <TextInput
        keyboardType="default"
        placeholder="새 비밀번호를 한 번 더 입력하세요."
        style={styles.input}
        />
      </View>
    );
  }

  goSettingScreen(){
    this.props.navigation.navigate('SETTING');
  }
}

// style
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: '10%',
    },
    title: {
      marginTop: 20,
    },
    input: {
      alignItems: 'center',
      borderColor: "#7a42f4",
      borderWidth: 1,
      backgroundColor: '#F6F6F6',
      width: '100%',
      height: 35,
      borderWidth: 0,
      borderRadius: 10,
      padding: 5,
    },
});

export default ChangeAccountInfo;