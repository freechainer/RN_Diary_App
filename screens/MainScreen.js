import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class MainScreen extends Component {
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstyle: {
        fontSize:40,
    }
})