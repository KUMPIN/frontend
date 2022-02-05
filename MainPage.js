import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: true};
  }

  _clickedMenu

  Submit = () => {
    fetch('http://kitcapstone.iptime.org:3000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude : this.state.latitudeValue,
        longitude : this.state.longitudeValue,
        latitudeDelta : this.state.latitudeDeltaValue,
        longitudeDelta : this.state.longitudeDeltaValue,
      }),
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.circle} activeOpacity={0.5}>
            <Icon name="search-outline" size={30} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle} activeOpacity={0.5}>
            <Text>금핀</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle} activeOpacity={0.5}>
            <Icon name="notifications-outline" size={30} color="black"/>
          </TouchableOpacity>
        </View>

        <View style={styles.map}>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.goSettingScreen()} style={styles.circle} activeOpacity={0.5}>
            <Icon name="menu-outline" size={30} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.longCircle} activeOpacity={0.5}>
            <Icon name="add-outline" size={30} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle} activeOpacity={0.5}>
            <Icon name="locate-outline" size={30} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  goSettingScreen(){
    this.props.navigation.navigate('SETTING');
  }
}

// style
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    top: {
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
    },
    map: {
        flex: 5,
    },
    bottom: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
    },
    circle: {
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
    },
    longCircle: {
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 60,
    }
});

export default MainPage;