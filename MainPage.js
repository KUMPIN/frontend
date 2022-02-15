import React from 'react';
import { Linking, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      pin: false,
      latitude: 36.144347690729994,
      longitude: 128.3929965666208,
      outerCoords: [
        { latitude: 38.344972353067035, longitude: 125.54269023987827},
        { latitude: 34.00194559043461, longitude: 125.84481774185605},
        { latitude: 34.27752392761733, longitude: 130.19792011729118},
        { latitude: 38.80291715851064, longitude: 129.5936651273578},
        { latitude: 38.344972353067035, longitude: 125.54269023987827},
      ],
      innerCoords: [
        { latitude: 36.145482009644425, longitude: 128.38614188985514},
        { latitude: 36.14763925873809, longitude: 128.38821255504647},
        { latitude: 36.14840164585637, longitude: 128.39180671513432},
        { latitude: 36.1486009048988, longitude: 128.3927508526309},
        { latitude: 36.14843629963923, longitude: 128.39388810916086},
        { latitude: 36.147639258718954, longitude: 128.39663469068833},
        { latitude: 36.147336034518375, longitude: 128.39675270787538},
        { latitude: 36.14698082753537, longitude: 128.39549743415836},
        { latitude: 36.144970845523055, longitude: 128.39513265376198},
        { latitude: 36.144295064139605, longitude: 128.39457475433218},
        { latitude: 36.14373154315323, longitude: 128.39442012808573},
        { latitude: 36.14283370435141, longitude: 128.39507572621324},
        { latitude: 36.14282551731691, longitude: 128.3952987648473},
        { latitude: 36.14297015466557, longitude: 128.39594760425808},
        { latitude: 36.14295650964358, longitude: 128.39628892078528},
        { latitude: 36.14289647151875, longitude: 128.3965288561658},
        { latitude: 36.14269179574264, longitude: 128.39684313774305},
        { latitude: 36.14249803552079, longitude: 128.39691748391726},
        { latitude: 36.14212688784408, longitude: 128.39678906779812},
        { latitude: 36.141682054098844, longitude: 128.39640719885654},
        { latitude: 36.14102435053753, longitude: 128.39716755744766},
        { latitude: 36.140167417283344, longitude: 128.3982388182937},
        { latitude: 36.140684617632985, longitude: 128.39989169244964},
        { latitude: 36.136716575135516, longitude: 128.40034931572765},
        { latitude: 36.13458658722849, longitude: 128.39667628874767},
        { latitude: 36.13613302256582, longitude: 128.39424366118985},
        { latitude: 36.137136469978316, longitude: 128.39673232948712},
        { latitude: 36.13864202839369, longitude: 128.39611882068337},
        { latitude: 36.14125000725617, longitude: 128.3945202241405},
        { latitude: 36.14192016288916, longitude: 128.3935257881985},
        { latitude: 36.14247201546469, longitude: 128.3901910617928},
      ],
    };
  }

  makePin = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} maxZoomLevel={18} minZoomLevel={16} initialRegion={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: 0.009, longitudeDelta: 0.001}}>
        <MapView.Polygon
          coordinates={this.state.outerCoords}
          holes={[this.state.innerCoords,]}
          fillColor='rgba(93,93,93,0.7)'
          strokeWidth={2}
          strokeColor='rgba(93,93,93,0.7)'
        />
        </MapView>
        
        { this.state.pin ?
          <Image source={require('./src/Pin.png')} style={styles.pin}/>
          : null
        }

        <TouchableOpacity onPress={() => this.goMainScreen()} style={styles.menu}>
            <Icon name="menu-outline" size={30} color="#353535"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.location} onPress={() => this.getLocation()}>
            <Icon name="locate-outline" size={30} color="#353535"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.search}>
            <Icon name="search-outline" size={30} color="#353535"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.my} onPress={() => this.goSettingScreen()}>
            <Icon name="person-outline" size={30} color="#353535"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{if (!this.state.pin){this.setState({pin: true})}else{this.setState({pin: false})}}} style={this.state.pin === false ? styles.longCircle : styles.longCircle_} activeOpacity={0.5}>
            <Icon name="add-outline" size={30} color="white"/>
            { this.state.pin ?
              <Text style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>등록 하기</Text>
              :
              <Text style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>핀 등록</Text>
            }
        </TouchableOpacity>
      </View>
    );
  }

  goSettingScreen() {
    this.props.navigation.navigate('SETTING');
  }
}

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
    pin: {
      position: 'absolute',
      borderRadius: 50,
      left: '24%', 
      bottom: '35%',
      width: 240,
      height: 240,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menu: {
      position: 'absolute',
      borderRadius: 50,
      left: '4%', 
      bottom: '4%',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    location: {
      position: 'absolute',
      borderRadius: 50,
      right: '4%', 
      bottom: '4%',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    search: {
      position: 'absolute',
      borderRadius: 50,
      left: '4%', 
      top: '5%',
      paddingLeft: '4%',
      width: '70%',
      height: 40,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    my: {
      position: 'absolute',
      borderRadius: 50,
      right: '4%', 
      top: '4%',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    longCircle: {
      position: 'absolute',
      flexDirection: 'row',
      borderRadius: 50,
      left: '35%', 
      bottom: '4%',
      width: '30%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00A7FB',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    longCircle_: {
      position: 'absolute',
      flexDirection: 'row',
      borderRadius: 50,
      left: '35%', 
      bottom: '4%',
      width: '30%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
});

export default MainPage;