import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar } from 'react-native'
import React from 'react'
import image1 from "../../../assets/duolingo_bird.png"
import image2 from "../../../assets/duolingo_bird2.png"
import { useNavigation } from '@react-navigation/native'

const data=[
{imageUrl:image1,id:0},
{imageUrl:image2,id:1}]
export default function LanguageExperience() {
   const navigation= useNavigation();

    const renderItem = ({ item }) => (
       
        <TouchableOpacity onPress={()=>navigation.navigate("BottomNavigator")} style={styles.item}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.title}>Lern first time</Text>
        <Text style={styles.subtext}>Lern not first time</Text>
        </TouchableOpacity>
    
   
 );
  return (
    <View>
     
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
  });