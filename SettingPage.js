import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: true};
  }

  _clickedMenu

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="notifications-outline" size={15} color="black"><Text> 알림 설정</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="key-outline" size={15} color="black"><Text> 계정 정보 설정</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="heart-outline" size={15} color="black"><Text> 관심사 설정</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="hand-left-outline" size={15} color="black"><Text> 차단 사용자 관리</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="help-circle-outline" size={15} color="black"><Text> 서비스 정보</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="color-palette-outline" size={15} color="black"><Text> 테마 설정</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="log-out-outline" size={15} color="#00A7FB"><Text> 로그아웃</Text></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="close-circle-outline" size={15} color="red"><Text> 탈퇴</Text></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily:'Fonts.NotoSansKR-Black',
    width: '100%',
  },
  title: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
  },
  items: {
    paddingLeft: 20,
    justifyContent: 'center',
    flex: 1,
    borderTopColor: '#eaeaea',
    borderTopWidth: 1,
    fontWeight: '400',
    fontFamily:'Fonts.NotoSansKR-Black',
  },
});

export default MainPage;