import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MainScreen extends React.Component {
    static navigationOptions= {
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="calendar-multiselect" size={30} style={{color:tintColor}} />
        )
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.textstyle}>Main Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstyle: {
        fontSize:40,
    }
})