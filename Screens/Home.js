import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScroolView, FlatList } from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class Home extends React.Component {

 constructor() {
  super()

  this.state = {

   UserItemInfo: []

  }
 }

 componentDidMount = async () => {

  const query = await db.collection("AddedItem").get()

  query.docs.map((doc) => {

   this.setState({ UserItemInfo: [...this.state.UserItemInfo, doc.data()] })

  })
 }

 render() {
  return (

   <View style={{ flex: 1, backgroundColor: '#E9E6F9' }}>
    <FlatList
     data={this.state.UserItemInfo}
     renderItem={({ item }) => {
      return (

       <View style={{ padding: 3, backgroundColor: 'white', borderBottomWidth: 2, borderColor: 'lightgrey' }}>

        <Text>{'ItemName: ' + item.Item_Name}</Text>
        <Text>{'ItemDescription: ' + item.Item_Definition}</Text>
       </View>
      )
     }} />
   </View>

  )
 }
}