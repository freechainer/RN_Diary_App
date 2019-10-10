import React from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class MainScreen extends React.Component {
    static navigationOptions= {
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="home" size={30} style={{color:tintColor}} />
        )
      }
      state = {
          selectedDate : '',
          Posts:[
            {
              title: '10월 10일에 쓴 글',
              content: '본문',
              date: '2019-10-10',
            },
            {
            title: '10월 9일에 쓴 글',
            content: '본문',
            date: '2019-10-09',
            },
        ]
      }
    render() {
        return (
            console.log(this.state.selectedDate),
            <SafeAreaView style={styles.container}>
                <Calendar
                    onDayPress={ (day)=>{this.setState(this.state.selectedDate = day)} }
                    // Initially visible month. Default = Date()
                    current={new Date()}/>
                <ScrollView>
                    <FlatList 
                        data ={this.state.Posts.filter(data => { return data.date == this.state.selectedDate.dateString })} 
                        renderItem = {({item, index})=>{
                            return(
                                <TouchableOpacity 
                                onPress={() => {this.props.navigation.navigate('Detail',{post:item})}}>
                                    <View>
                                        <Text>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            {item.content}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor = {(item, index)=>{return `${index}`}} />
                </ScrollView>    
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    },
    textstyle: {
        fontSize:40,
    }
})