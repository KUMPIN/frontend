import React, {Component, useState} from 'react';
import {StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import Slider from './slider'
import Picker from './picker'
import DatePicker from './datepicker'

const Send_Auth = () => {};

type Props = {};
export default class RegisterPage extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <View style={styles.title}>
                    <Text style={{color: 'black', fontSize:20, paddingBottom:5}}><Text style={{color: "#00A7FB", fontSize: 30, fontWeight: 'bold'}}>금핀  </Text>핀 등록</Text>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <TextInput keyboardType='default' placeholder='핀 제목' style={styles.inputs}></TextInput>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />

                    <Picker></Picker>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />

                    <Text style={{color: '#A6A6A6', fontWeight: 'bold', fontSize:15, padding:5}}>모집 인원</Text>
                    <Slider></Slider>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />

                    <Text style={{color: '#A6A6A6', fontWeight: 'bold', fontSize:15, padding:5}}>! 마감일</Text>
                    <DatePicker style={{width: "100%"}}></DatePicker>
                    <View style={{width: "100%", borderBottomWidth:0.5, borderColor:'#EAEAEA'}} />

                    <TextInput multiline={true} keyboardType='default' placeholder='함께할 활동의 구체적인 내용을 적어주세요. 자세히 적을수록 사람들이 더 빠르게 참여해요. (10자 이상)' style={styles.inner}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.make}><Text style={{textAlign: 'center', color:'white', fontWeight:'bold'}}>핀 등록</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backroundColor: 'white',
    },
    header: {
        width: '100%',
    },
    title: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
    },
    inputs: {
        width: '100%',
        height: 40,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5,
        marginVertical: 5,
    },
    inner: {
        width: '100%',
        fontSize: 12,
        padding: 5,
        marginVertical: 5,
    },
    make: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: "#00A7FB",
        width: '25%',
        height: 40,
        borderRadius: 20,
    },
})