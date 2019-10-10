import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const WriteHeader = ({navigation})=>{
    return (
        <View>
            <TouchableOpacity 
                onPress={ ()=>{ navigation.goBack() } }>
                    <MaterialCommunityIcons name="backspace" size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default withNavigation(WriteHeader)