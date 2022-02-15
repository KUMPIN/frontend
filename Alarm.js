import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text>테스트</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },
    title: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
    items: {
        paddingLeft: 20,
        justifyContent: 'center',
        flex: 1,
        borderTopColor: '#eaeaea',
        borderTopWidth: 1,
        fontWeight: '400',
    },
});

export default Alarm;