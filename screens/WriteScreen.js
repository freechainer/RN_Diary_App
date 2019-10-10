import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WriteHeader from '../components/WriteHeader'

export default class WriteScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="lead-pencil" size={30} style={{color:tintColor}} />
        ),
        tabBarOnPress : ({navigation}) => {
            navigation.navigate('Write')
        }
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <WriteHeader />
                <Text style={styles.textstyle}>Write Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        paddingTop: 50,
    },
    textstyle: {
        fontSize:40,
    }
})