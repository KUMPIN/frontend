import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const AppSlider = ({

}) => {
    const [myValue, setMyValue] = useState(0);

    return (
        <View style={{marginBottom: 6}}>
            <Slider
                value={myValue} // == this.state.value
                onValueChange={(value) => setMyValue(value)} // 슬라이더 움직일때 value 반환
                minimumValue={0} // 최소값 설정
                maximumValue={20} // 최대값 설정
                step={1} // 1단위로 값 변경
            />
            <Text style={{marginLeft: '2%', color:'black', fontWeight:'bold'}}>{myValue}명  /  20명</Text>
        </View>
    )
}

export default AppSlider;