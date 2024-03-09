import React from 'react';
import { Image, View } from 'react-native';
import languages, { Language } from './LanguageData';

// Assuming `flagsImage` is the image source (you might need to change it based on your project structure)
const flagsImage = require('../../public/flags.png');

const Flag = () => {
  const height = (width * 19.3171) / 24;
  return (
    <View style={{ height, width }}>
      <Image
        style={{ height: '100%', width: '100%' }}
        source={flagsImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default Flag;
