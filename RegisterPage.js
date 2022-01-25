import React, {Component} from 'react';
import {StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import base64 from 'react-native-base64';

const Send_Auth = () => {};

type Props = {};
export default class RegisterPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      password: '',
      phone: '',
      Id_state: '',
      pw_state: '',
      check_state: '',
    };
  }

  handleId = (Id) => {
    var state_len = null;
    var state_type = null;

    if (Id.length < 4)
    {
      state_len = false;
    }
    else if (Id.length > 3)
    {
      state_len = true;
    }
    
    if (!/^[0-9a-z]+$/.test(Id))
    {
      state_type = false;
    }
    else
    {
      state_type = true;
    }

    if (state_len === true && state_type === true)
    {
      this.setState({Id_state: ''});
    }
    else if (state_len === true && state_type === false)
    {
      this.setState({Id_state: "ID는 숫자와 영문만 입력 가능합니다."});
    }
    else if (state_len === false && state_type === true)
    {
      this.setState({Id_state: "4자리 이상 입력해주세요."});
    }
    else if (state_len === false && state_type === false)
    {
      this.setState({Id_state: 'ID 형식을 확인해주세요.'});
    }

    this.setState({Id: Id});
  };

  handlePassword = (password) => {
    var state_len = null;
    var state_type = null;

    if (password.length < 7)
    {
      state_len = false;
    }
    else if (password.length > 6)
    {
      state_len = true;
    }

    if (!/(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(password))
    {
      state_type = false;
    }
    else
    {
      state_type = true;
    }

    if (state_len === true && state_type === true)
    {
      this.setState({pw_state: ''});
    }
    else if (state_len === true && state_type === false)
    {
      this.setState({pw_state: "비밀번호는 숫자/영문/특수문자로 이루어져야합니다."});
    }
    else if (state_len === false && state_type === true)
    {
      this.setState({pw_state: "8자리 이상 입력해주세요."});
    }
    else if (state_len === false && state_type === false)
    {
      this.setState({pw_state: '비밀번호 형식을 확인해주세요.'});
    }

    this.setState({password: password});
  };

  handlePhone = (phone) => {
    this.setState({phone: phone});
  };

  checkpw = (password) => {
    if (this.state.password === password)
    {
      this.setState({check_state: "확인되었습니다."});
    }
    else
    {
      this.setState({check_state: ''});
    }
  };

  Submit = () => {
    this.state.password = base64.encode(`${this.state.password}`);
    
    fetch('http://kitcapstone.iptime.org:3000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ID: this.state.Id,
        PW: this.state.password,
        PHONE: this.state.phone,
      }),
    }).catch(error => console.error(error));
  };

  handleLogin = () => {
    alert(`ID : ${this.state.Id}\nPassword : ${this.state.password}\nPhone : ${this.state.phone}`);
  };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.title}>
                    <Text style={{color: 'black', fontSize:20, paddingBottom:5}}><Text style={{color: "#00A7FB", fontSize: 30, fontWeight: 'bold'}}>금핀  </Text>회원가입</Text>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />
                </View>
                <View style={styles.content}>
            <View style={{flexDirection:'column',justifyContent:'space-between',paddingBottom:10}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>ID 입력</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput keyboardType="default" placeholder="4자리 이상 영문/숫자" onChangeText={this.handleId} style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
                <TouchableOpacity onPress={Send_Auth} style={styles.button}>
                    <Text style={styles.buttonText}>중복확인</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10}}>
                <Text style={{fontSize: 12, color: 'red'}}>{this.state.Id_state}</Text>
            </View>
          </View>
          <View style={{flexDirection:'column',justifyContent:'space-between'}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>비밀번호 입력</Text>
            <TextInput keyboardType="default" secureTextEntry={true} placeholder="8자리 이상 영문/숫자/특수문자" onChangeText={this.handlePassword} style={{backgroundColor: '#F6F6F6', width:'100%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
          </View>
          <View style={{flexDirection:'row', paddingBottom:10}}>
                <Text style={{fontSize: 12, color: 'red'}}>{this.state.pw_state}</Text>
            </View>
          <View style={{flexDirection:'column',justifyContent:'space-between',paddingBottom:10}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>비밀번호 확인</Text>
            <TextInput keyboardType="default" secureTextEntry={true} placeholder="비밀번호 재입력" onChangeText={this.checkpw} style={{backgroundColor: '#F6F6F6', width:'100%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
            <View style={{flexDirection:'row', paddingBottom:10}}>
                <Text style={{fontSize: 12, color: 'green'}}>{this.state.check_state}</Text>
            </View>
          </View>
          <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />
          <View style={{flexDirection:'column',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>휴대폰 인증</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput keyboardType="default" placeholder="전화번호 입력" onChangeText={this.handlePhone} style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
                <TouchableOpacity onPress={Send_Auth} style={styles.button}>
                    <Text style={styles.buttonText}>인증 요청</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingBottom:20}}>
                <Text style={{fontSize: 12, color: 'blue'}}>인증번호를 전송했습니다.</Text>
            </View>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>인증번호 입력</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput keyboardType="default" placeholder="SMS로 전송받은 4자리 번호 입력" style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
                <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>인증 확인</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10}}>
                <Text style={{fontSize: 12, color: 'green'}}>인증에 성공했습니다.</Text>
                <Text style={{fontSize: 12, color: 'red'}}>인증에 실패했습니다.</Text>
            </View>
            <TouchableOpacity onPress={() => this.goNextScreen()} style={{borderRadius: 10, alignSelf:'center', justifyContent:'center', backgroundColor:'#00A7FB', width: '25%', height: '15%', marginTop: '5%'}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  goNextScreen() {
    this.Submit();
    this.props.navigation.navigate('REGISTER2');
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
  },
  title: {
    width:'100%',
    height:'10%',
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
    justifyContent: 'center',
    backgroundColor: "#EAEAEA",
    marginLeft: '5%',
    width: '25%',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    textAlign: 'center',
  }
});