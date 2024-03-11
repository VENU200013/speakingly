import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'

const Learn = () => {
  return (
    <ScrollView>
    <View style={{marginTop:StatusBar.currentHeight, alignItems:'center'}}>

     <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'orange',marginLeft:0, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'green',marginLeft:-120, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'purple',marginLeft:-150, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'purple',marginLeft:-50, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'purple',marginLeft:50, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'greenyellow',marginLeft:150, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'greenyellow',marginLeft:120, marginTop:50}}></View>
      <View style={{borderColor:'grey',borderRadius:360, width:100, height:100, backgroundColor:'greenyellow',marginLeft:0, marginTop:50}}></View>
    </View>
    </ScrollView>
  )
}

export default Learn