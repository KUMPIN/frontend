import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Fonts} from './src/Fonts';

const My_Submit = () => {};

type Props = {};
export default class MyPage extends Component<Props> {
    render() {
        const onPress = () => {};
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userImg}/>
                    <View Style={styles.userInfo}>
                        <Text style={styles.nameText}>홍길동</Text>
                        <Text style={{fontFamily:'Fonts.NotoSansKR-Black'}}>*****@kumoh.ac.kr</Text>
                    </View>
                </View>
                <View style={styles.title}>
                    <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
                        <View style={styles.select}>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={onPress}
                            >
                                <Text style={styles.selectText}>모집중인 금핀</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={onPress}
                            >
                                <Text style={styles.selectText}>완료된 금핀</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={onPress}
                            >
                                <Text style={styles.selectText}>리뷰</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pinList}>
                            <Text style={{fontFamily:'Fonts.NotoSansKR-Black'}}>모집중인 금핀이 없습니다.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.listButton}
                        onPress={onPress}
                    >
                         <Image
                            style={styles.icon}
                            source={{uri: "https://www.kumoh.ac.kr/_res/ko/img/main/icon_menu0616@2x.jpg"}}
                         />
                        <Text style={styles.listText}>관심 목록</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listButton}
                        onPress={onPress}
                    >
                        <Image
                            style={styles.icon}
                            source={{uri: "https://www.kumoh.ac.kr/_res/ko/img/main/icon_menu0613@2x.png"}}
                        />
                        <Text style={styles.listText}>최근 본 금핀</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listButton}
                        onPress={onPress}
                    >
                        <Image
                            style={styles.icon}
                            source={{uri: "https://www.kumoh.ac.kr/_res/ko/img/main/icon_menu0615@2x.png"}}
                        />
                        <Text style={styles.listText}>내 정보</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listButton}
                        onPress={onPress}
                    >
                         <Image
                            style={styles.icon}
                            source={{uri: "https://www.kumoh.ac.kr/_res/ko/img/main/icon_menu0604@2x.png"}}
                         />
                        <Text style={styles.listText}>설정</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}/>
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
        flexDirection: 'row',
        alignItems: 'center',
        height:'25%',
    },
    title: {
        height:'25%',
        flexDirection: 'row',
    },
    content: {
        height:'48%',
        borderTopWidth: 1,
        borderColor:"#EAEAEA",
    },
    footer: {
        height: '2%',
    },
    userInfo: {
        width: 50,
    },
    userImg: {
        marginLeft: 30,
        marginRight: 30,
        width: '28%',
        height: '70%',
        backgroundColor: "#EAEAEA",
        borderRadius: 100,
        flexDirection: 'row',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        fontFamily: 'Fonts.NotoSansKR-Black',
    },
    select: {
        height:'18%',
        borderBottomWidth: 1,
        borderColor:"#EAEAEA",
        flexDirection: 'row',
    },
    selectButton: {
        marginLeft:20,
        marginRight: 2,
        borderBottomWidth: 1,
        borderColor:"#00A7FB",
        flexDirection: 'row',
    },
    selectList: {
        marginLeft:20,
        marginRight: 2,
    },
    pinList: {
        marginTop: 30,
        alignItems: 'center',
    },
    selectText: {
        fontSize: 14,
        fontFamily: 'Fonts.NotoSansKR-Black',
    },
    listButton: {
        width: '100%',
        height: '20%',
        backgroundColor: '#EAEAEA',
        padding: 20,
        paddingLeft: 30,
        marginTop: 10,
        borderRadius: 20,
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 28,
        marginRight: 16,
    },
    listText: {
        fontSize: 18,
        fontFamily: 'Fonts.NotoSansKR-Black',
    }
});