import React from 'react';
import {View} from 'react-native';
import Camera from './components/Camera';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Camera></Camera>
    </View>
  );
};

export default App;
