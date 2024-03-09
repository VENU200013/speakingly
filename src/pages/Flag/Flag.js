import { View, Text, FlatList,StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import FlagOfIndiaImage from '../../../assets/india.jpg'
import FlagOfAmericaImage from '../../../assets/americaa.jpg'
import FlagOfSpanishImage from '../../../assets/spanish.jpg'
import FlagOfGermanyImage from '../../../assets/germany.jpg'
import { useNavigation } from '@react-navigation/native';


const data = [
    { id: '1', title: 'Hindhi', learners:"43.1M learners",imageUrl:FlagOfIndiaImage },
    { id: '2', title: 'English',learners:"43.1M learners",imageUrl:FlagOfAmericaImage },
    { id: '3', title: 'Spanish',learners:"43.1M learners",imageUrl:FlagOfSpanishImage },
    { id: '4', title: 'Germany',learners:"43.1M learners",imageUrl:FlagOfGermanyImage },
    { id: '5', title: 'Hindhi', learners:"43.1M learners",imageUrl:FlagOfIndiaImage },
    { id: '6', title: 'English',learners:"43.1M learners",imageUrl:FlagOfAmericaImage },
    { id: '7', title: 'Spanish',learners:"43.1M learners",imageUrl:FlagOfSpanishImage },
    { id: '8', title: 'Germany',learners:"43.1M learners",imageUrl:FlagOfGermanyImage },
    // Add more data as needed
];
const Flag = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
       
            <TouchableOpacity onPress={()=>navigation.navigate("Intro2",{})} style={styles.item}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtext}>{item.learners}</Text>
            </TouchableOpacity>
        
       
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    )
}
const styles = StyleSheet.create({
    item: {
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
  
export default Flag