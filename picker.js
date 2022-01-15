import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

function App() {
  const [Tag, setTag] = useState('Unknown');

  return (
    <View>
    <Text style={{color: '#A6A6A6', fontWeight: 'bold', fontSize:15, padding:5}}># 분류</Text>
      <Picker
        selectedValue={Tag}
        onValueChange={(value, index) => setTag(value)}
        mode="dropdown"
        style={{marginLeft: 0}}
      >
        <Picker.Item style={{fontSize: 15, color: '#A6A6A6', fontWeight: 'bold'}} label="핀 분류를 선택해주세요." value="Unknown" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="공부" value="공부" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="취미" value="취미" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="식사" value="식사" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="카페" value="카페" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="여행" value="여행" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="배달" value="배달" />
        <Picker.Item style={{fontSize: 15, color: 'black', fontWeight: 'bold'}} label="연애" value="연애" />
      </Picker>
    </View>
  );
}

export default App;