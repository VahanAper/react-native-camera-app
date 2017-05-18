import React, { Component } from 'react';
import { View } from 'react-native';
import Camera from 'react-native-camera';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          ref={(cam) => { this.camer = cam; }}
          aspect={Camera.constants.Aspect.fill}
        />
      </View>
    );
  }
}

export default App;
