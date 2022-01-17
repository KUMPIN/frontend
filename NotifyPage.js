import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => {};
  return (
    <View style={styles.centeredView}>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>신고</Text>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
            <Text style={styles.modalText}>신고 유형 선택</Text>
            </View>
            <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
            <TouchableOpacity
                style={styles.listButton}
                onPress={onPress}
            >
                <Text>욕설 및 비방</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
            <TouchableOpacity
                style={styles.listButton}
                onPress={onPress}
            >
                <Text>불건전한 만남 및 대화</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
            <TouchableOpacity
                style={styles.listButton}
                onPress={onPress}
            >
                <Text>상업적 광고 및 판매</Text>
            </TouchableOpacity>
            </View>
           <View style={{width:'100%', borderBottomWidth:1, borderColor:"#EAEAEA"}}>
            <TouchableOpacity
                style={styles.listButton}
                onPress={onPress}
            >
                <Text>게시판 성격에 부적절함</Text>
            </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '60%',
    height: '60%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop:30,
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    width: "30%",
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize:20,
    color: "#2196F3",
    marginBottom: 40,
    textAlign: "center",
    fontWeight: 'bold',
  },
  listButton: {
    width: '100%',
    alignItems: "center",
    backgroundColer: "#DDDDDD",
    padding: 10,
  }
});

export default App;