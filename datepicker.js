import React, { Component } from 'react';
import { View, SafeAreaView, Text, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from 'simple-react-native-datepicker';

interface IState {
  visible: boolean;
  dateStr?: string;
  date?: Date;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { dateStr: '', date: new Date(), visible: false };
  }
  render() {
    return (
        <View>
            <TouchableOpacity onPress={() => this.showDatePicker()} title="show" style={{backgroundColor: "#00A7FB", width: '20%', height: 30, borderRadius: 20, justifyContent:'center'}}>
                <Text style={{color: 'white', textAlign: 'center'}}>날짜 입력</Text>
            </TouchableOpacity>
            <DateTimePicker
                mode='date'
                visible={this.state.visible}
                onDateChange={(dateStr, date) => this.onDateChange(dateStr, date)}
                date={this.state.date}
            />
            <Text style={{marginLeft: '2%', color:'black', fontWeight:'bold', fontSize:15}}>{String(this.state.dateStr)}</Text>
        </View>
    );
  }

showDatePicker() {
    this.setState({ visible: true });
}

onDateChange(dateStr?: string, date?: Date) {
    if (dateStr === undefined) {
      dateStr = 'canceled';
    }
    this.setState({ dateStr, date, visible: false });
  }
}

export default App;