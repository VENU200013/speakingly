import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import React from 'react'

const Home2 = ({ unitNumber = 1, backgroundColor = "green", borderColor = "black" }) => {
  return (
    <View>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.header}>
          <View style={styles.info}>
            <Text style={styles.unitNumber}>Unit 1</Text>
            <Text style={styles.description}>Form basic sentences, greet people</Text>
          </View>
          <TouchableOpacity
            style={[styles.link, { borderColor }]}
            onPress={() => {
              // const url = `https://duolingo.com/guidebook/${language}/${unitNumber}`;
              // Navigate to the URL or perform an action
            }}
          >
            {/* Assume GuidebookSvg is an SVG component */}
            {/* <GuidebookSvg /> */}
            <Text style={styles.linkText} accessibilityLabel="Guidebook">
              Guidebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: StatusBar.currentHeight, alignItems: 'center' }}>

        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'orange', marginLeft: 0, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'green', marginLeft: -120, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'purple', marginLeft: -150, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'purple', marginLeft: -50, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'purple', marginLeft: 50, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'greenyellow', marginLeft: 150, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'greenyellow', marginLeft: 120, marginTop: 50 }}></View>
        <View style={{ borderColor: 'grey', borderRadius: 360, width: 100, height: 100, backgroundColor: 'greenyellow', marginLeft: 0, marginTop: 50 }}></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    maxWidth: Dimensions.get('window').width,
    borderRadius: 8,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  info: {
    flex: 1,
    marginRight: 8,
  },
  unitNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
    padding: 12,
    borderRadius: 8,
    transition: 'color 0.2s',
  },
  linkText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: 8,
  },
});


export default Home2