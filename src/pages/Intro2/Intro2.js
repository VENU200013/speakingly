import { View, Text, StatusBar,StyleSheet,FlatList,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import FlagOfIndiaImage from '../../../assets/india.jpg'
import FlagOfAmericaImage from '../../../assets/americaa.jpg'
import FlagOfSpanishImage from '../../../assets/spanish.jpg'
import FlagOfGermanyImage from '../../../assets/germany.jpg'
import { useNavigation } from '@react-navigation/native';


const data = [
    { id: '1', title: 'हिंदी', learners:"43.1M learners",imageUrl:FlagOfIndiaImage },
    { id: '2', title: 'English',learners:"43.1M learners",imageUrl:FlagOfAmericaImage },
    { id: '3', title: 'Español',learners:"43.1M learners",imageUrl:FlagOfSpanishImage },
    { id: '4', title: 'Deutsch',learners:"43.1M learners",imageUrl:FlagOfGermanyImage },
    // Add more data as needed
];

const Intro2 = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
       
        <TouchableOpacity  style={styles.item} onPress={()=>navigation.navigate("LanguageExperience")}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtext}>{item.learners}</Text>
        </TouchableOpacity>
    )
        
  return (
    <View style={styles.container}>
      
    <Text style={styles.txt}>I already know...</Text>
    <View>
    <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
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
  
    },item: {
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
  })
export default Intro2

