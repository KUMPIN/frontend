import React, {Component} from 'react';
import {StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';

const Login_Submit = () => {};

type Props = {};
export default class LoginPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      password: '',
    };
  }

  handleId = (Id) => {
    this.setState({Id: Id});
  };

  handlePassword = (password) => {
    this.setState({password: password});
  };

  handleLogin = () => {
    alert(`ID : ${this.state.Id}\npassword: ${this.state.password}`);
  };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.title}>
                    <Text style={{color: 'black', fontSize:20, paddingBottom:20}}><Text style={{color: "#00A7FB", fontSize: 30}}>금핀</Text>을 계속 이용하시려면 <Text style={{color: "red"}}>로그인</Text>을 해주세요.</Text>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />
                </View>
                <View style={styles.content}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{color: 'black', fontSize:15}}>아이디</Text>
            <TextInput keyboardType="default" placeholder="아이디 입력" onChangeText={this.handleId} style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:30}}>
            <Text style={{color: 'black', fontSize:15}}>비밀번호</Text>
            <TextInput keyboardType="default" secureTextEntry={true} placeholder="비밀번호 입력" onChangeText={this.handlePassword} style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <View style={{textAlign: 'center', flexDirection: 'row', paddingTop: 10}}>
              <Text style={{color: 'black', paddingRight: 10}}>비밀번호 찾기</Text>
              <Text>/</Text>
              <TouchableOpacity onPress={() => this.goRegisterScreen()}>
                <Text style={{color: 'black', paddingLeft: 10}}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  goRegisterScreen() {
    this.props.navigation.navigate('REGISTER');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'25%',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
  },
  footer: {
    width:'100%',
    height:'20%',
  },
  button: {
    backgroundColor: "#00A7FB",
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  }
});