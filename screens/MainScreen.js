import React from 'react';
import { Text, StyleSheet, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {AsyncStorage} from 'react-native';

export default class MainScreen extends React.Component {
    static navigationOptions={
        tabBarIcon: ({tintColor})=>(
          <MaterialCommunityIcons name="home" size={30} style={{color:tintColor}}/>
        )
      }
      _storeData = async() =>{
          await AsyncStorage.setItem('@diary:state',JSON.stringify(this.state))
      }
      _getData = async()=>{
          const mystate = await AsyncStorage.getItem('@diary:state')
          if(mystate !== null){
              this.setState(JSON.parse(mystate))
          }
      }
      constructor(props){
          super(props)
          this.state = {
                selectedDate : '',
                Posts:[{
                  id: 1,
                  title: '10월 10일에 쓴 글',
                  content: '본문',
                  date: '2019-10-10',
                  },
                  {
                  id: 2,
                  title: '10월 9일에 쓴 글',
                  content: '본문',
                  date: '2019-10-09',
                  },
              ]
            }
        }
        componentDidMount(){
            this._getData()
            this.props.navigation.addListener(
                'didFocus',
                ()=>{
                    newpost = this.props.navigation.getParam('myparam')
                    signal = this.props.navigation.getParam('signal')
                    // console.log(newpost)
                    if(newpost){
                        const PrevPosts = [...this.state.Posts]
                        this.setState({Posts: PrevPosts.concat(newpost)}, this._storeData)
                        this.props.navigation.navigate('MainScreen',{myparam:false})
                    }
                    else if(signal) {
                        const PrevPosts2 = [...this.state.Posts]

                        deleteIndex = PrevPosts2.findIndex((item)=>{return item.id === signal})
                        PrevPosts2.splice(deleteIndex,1)

                        this.setState({Posts:PrevPosts2}, this._storeData)
                        this.props.navigation.navigate('MainScreen',{signal:false})
                    }
                }
            )
        }

        render() {
            console.log(this.newpost)
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
                                        <Text style={styles.listtext}>
                                            제목 : {item.title}
                                        </Text>
                                        <Text style={styles.listtext}>
                                            내용 : {item.content}
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
        paddingTop: 50,
    },
    textstyle: {
        fontSize:40,
    },
    listitem:{
        marginLeft: 50,
        marginTop: 20,
        borderLeftColor: "black",
        borderLeftWidth: 4,
        paddingLeft: 30,
    },
    listtext: {
        fontSize: 20,
    }
});