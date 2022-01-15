import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';

const Send_Auth = () => {};

type Props = {};
export default class Register2Page extends Component<Props> {
  state = {
    active_Tag_0: false,
    active_Tag_1: false,
    active_Tag_2: false,
    active_Tag_3: false,
    active_Tag_4: false,
    active_Tag_5: false,
    active_Tag_6: false,
    active_Tag_7: false,
    active_Tag_8: false,
    active_Tag_9: false,
    active_Tag_10: false,
    active_Tag_11: false,
    active_Gender: null,
  };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.title}>
                    <Text style={{color: 'black', fontSize:20, paddingBottom:5}}><Text style={{color: "#00A7FB", fontSize: 30, fontWeight: 'bold'}}>금핀  </Text>사용자 정보 설정</Text>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />
                </View>
                <View style={styles.content}>
            <View style={{flexDirection:'column',justifyContent:'space-between',paddingBottom:10}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>닉네임 설정</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput keyboardType="default" placeholder="사용할 닉네임 입력" style={{backgroundColor: '#F6F6F6', width:'70%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
                <TouchableOpacity onPress={Send_Auth} style={styles.button}>
                    <Text style={styles.buttonText}>중복확인</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingBottom:10}}>
                <Text style={{fontSize: 12, color: 'green'}}>사용 가능한 닉네임입니다.</Text>
                <Text style={{fontSize: 12, color: 'red'}}>이미 사용 중인 닉네임입니다.</Text>
            </View>
          </View>
          <View style={{flexDirection:'column',justifyContent:'space-between',paddingBottom:10}}>
            <Text style={{color: 'black', fontSize:15, paddingBottom:5}}>나이 입력</Text>
            <TextInput keyboardType="default" placeholder="현재 나이 입력" style={{backgroundColor: '#F6F6F6', width:'100%', height:35, borderWidth: 0, borderRadius: 10, padding:5}}/>
          </View>
          <Text style={{color: 'black', fontSize:15}}>성별 정보</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', height: '8%'}}>
            <TouchableOpacity onPress={()=>{this.setState({active_Gender: 0})}} style={this.state.active_Gender === 0 ? styles.genderMaleactive : styles.genderMale}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold'}}>남자</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({active_Gender: 1})}} style={this.state.active_Gender === 1 ? styles.genderFemaleactive : styles.genderFemale}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold'}}>여자</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: 'black', fontSize:15, marginTop: '10%'}}>관심사 선택</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', height: '5%'}}>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_0){this.setState({active_Tag_0: true})}else{this.setState({active_Tag_0:false})}}} style={this.state.active_Tag_0 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#공부</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_1){this.setState({active_Tag_1: true})}else{this.setState({active_Tag_1:false})}}} style={this.state.active_Tag_1 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#배달</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_2){this.setState({active_Tag_2: true})}else{this.setState({active_Tag_2:false})}}} style={this.state.active_Tag_2 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#게임</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_3){this.setState({active_Tag_3: true})}else{this.setState({active_Tag_3:false})}}} style={this.state.active_Tag_3 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#노래방</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_4){this.setState({active_Tag_4: true})}else{this.setState({active_Tag_4:false})}}} style={this.state.active_Tag_4 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#운동</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_5){this.setState({active_Tag_5: true})}else{this.setState({active_Tag_5:false})}}} style={this.state.active_Tag_5 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#자격증</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', height: '5%', marginTop: '2%'}}>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_6){this.setState({active_Tag_6: true})}else{this.setState({active_Tag_6:false})}}} style={this.state.active_Tag_6 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#드라이브</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_7){this.setState({active_Tag_7: true})}else{this.setState({active_Tag_7:false})}}} style={this.state.active_Tag_7 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#여행</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_8){this.setState({active_Tag_8: true})}else{this.setState({active_Tag_8:false})}}} style={this.state.active_Tag_8 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#연애</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_9){this.setState({active_Tag_9: true})}else{this.setState({active_Tag_9:false})}}} style={this.state.active_Tag_9 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#헬스</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_10){this.setState({active_Tag_10: true})}else{this.setState({active_Tag_10:false})}}} style={this.state.active_Tag_10 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#밥</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{if (!this.state.active_Tag_11){this.setState({active_Tag_11: true})}else{this.setState({active_Tag_11:false})}}} style={this.state.active_Tag_11 === true ? styles.tagactive : styles.tag}>
              <Text style={styles.tagText}>#카페</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={Send_Auth} style={{borderRadius: 10, alignSelf:'center', justifyContent:'center', backgroundColor:'#00A7FB', width: '25%', height: '10%', marginTop: '10%'}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>시작하기</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
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
  },
  genderMale: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:'#B2CCFF',
    width: '45%', 
    height: '100%',
    marginTop: '2%'
  },
  genderMaleactive: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:'#6B66FF',
    width: '45%', 
    height: '100%',
    marginTop: '2%'
  },
  genderFemale: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:'#FFC19E',
    width: '45%',
    height: '100%',
    marginTop: '2%'
  },
  genderFemaleactive: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:'#F15F5F',
    width: '45%',
    height: '100%',
    marginTop: '2%'
  },
  tag: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    height: '100%',
    marginTop: '2%',
    paddingHorizontal: 8,
    backgroundColor: '#BDBDBD',
  },
  tagactive: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
    height: '100%',
    marginTop: '2%',
    paddingHorizontal: 8,
    backgroundColor: '#030066',
  },
  tagText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});