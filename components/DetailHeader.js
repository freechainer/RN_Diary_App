import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const DetailHeader = ({navigation})=>{
    return (
        <View style={styles.header}>
        <View style={styles.container}>
            
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={ ()=>{ navigation.goBack() } }
                hitSlop={{ top:32, bottom: 32, left: 32, right: 32}}>
                <Ionicons name="ios-arrow-back" size={30} color={'#7a7171'}/>
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={ ()=>{ navigation.goBack() } }
                hitSlop={{ top:2, bottom: 2, left: 2, right: 2}}>
                <Ionicons name="ios-close" size={30} color={'#7a7171'}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems:'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 50,
    }
})

export default withNavigation(DetailHeader)