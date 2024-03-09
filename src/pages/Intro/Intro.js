import { View, Text, StatusBar,StyleSheet, ScrollView,Image,Dimensions } from 'react-native'
import React from 'react'
import Flag from '../Flag/Flag'
import Headerlogo2 from '../../../assets/headerlogo.png'

const Intro = () => {
  return (
    <View style={styles.container}>

      {/* <Image source={Headerlogo2}  style={styles.image}/> */}
      <Text style={styles.txt}>I want to learn...</Text>
      <View>
      <Flag/>
      </View>
     
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    marginTop:StatusBar.currentHeight,
  },
  txt:{
    marginTop:StatusBar.currentHeight,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:50

  },
  image:{
    // marginTop:StatusBar.currentHeight,
    width:Dimensions.get('window').width
  }
 
})
export default Intro