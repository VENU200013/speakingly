import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar } from 'react-native'
import React from 'react'
import image1 from "../../../assets/duolingo_bird.png"
import image2 from "../../../assets/duolingo_bird2.png"
import { useNavigation } from '@react-navigation/native'

const data=[
{imageUrl:image1,id:0,text:"learning english for first time?",subtxt:"start learning from beginning"},
{imageUrl:image2,id:1,text:"already learned some english?",subtxt:"check your level here"}]
export default function LanguageExperience() {
   const navigation= useNavigation();

    const renderItem = ({ item }) => (
       
        <TouchableOpacity onPress={()=>navigation.navigate("Home2")} style={styles.item}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.title}>{item.text}</Text>
        <Text style={styles.subtext}>{item.subtxt}</Text>
        </TouchableOpacity>
    
   
 );
  return (
    <View>

      <View style={styles.txtView}>
        <Text style={styles.txt}>
          Choose your path
        </Text>
      </View>
     
   <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={item => item.id}
   />
    </View>
  )
}
const styles = StyleSheet.create({
    item: {
    marginTop: StatusBar.currentHeight,
      backgroundColor: '',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 16,
      flex: 1,
      borderRadius: 10,
      borderWidth: 3, // Border width
    borderColor: 'lightgrey', // Border color
      alignItems: 'center',
      height:250
     
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    subtext: {
      fontSize: 14,
      marginTop: 5,
      color:"grey"
    },
    txtView:{
      marginTop:StatusBar.currentHeight,
     
    },
    txt:{
      fontSize:40,
      color:"grey",
      textAlign:"center"
    }
  });