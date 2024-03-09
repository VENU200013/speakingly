import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import languages from './LanguageData';
// Assuming you have a component for ChevronDownSvg
// import ChevronDownSvg from './path-to/ChevronDownSvg';
// Import Flag component if available
// import Flag from './Flag';

const Languages = () => {
  const [languagesShown, setLanguagesShown] = useState(false);

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => setLanguagesShown(!languagesShown)}
      >
        <Text style={{ fontSize: 16, textTransform: 'uppercase' }}>Site language: English</Text>
        {/* Replace the following line with your ChevronDownSvg component */}
        {/* <ChevronDownSvg /> */}
        <Text>▼</Text>
      </TouchableOpacity>

      {languagesShown && (
        <ScrollView
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            width: 400, // Adjust based on your design
            borderRadius: 8,
            borderWidth: 2,
            borderColor: 'gray',
            backgroundColor: 'white',
            padding: 12,
          }}
        >
          {/* {console.log("languages====",languages)} */}
          {languages.map((language) => (
            
            <TouchableOpacity
              key={language.code}
              onPress={() => {
                // Handle language selection logic here
                setLanguagesShown(false);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                borderRadius: 8,
                backgroundColor: 'lightgray',
                marginBottom: 8,
              }}
            >
              {console.log("languages====",language.nativeName)}
              {/* Include your Flag component here if available */}
              {/* <Flag language={language} width={24} /> */}
              <Text style={{ marginLeft: 150 }}>{language.nativeName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Languages;
