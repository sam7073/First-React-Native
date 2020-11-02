import React from 'react';
import {Button, TouchableOpacity, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import * as tf from '@tensorflow/tfjs';
import * as tfjs from '@tensorflow/tfjs-react-native';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

async function loadModel(){
  console.log("ASDASDASD");
  try
  {
    const model = await tfjs.fetch('http://model-server.domain/download/model.json');
  }
  catch(err)
  {
    console.log(err);
  }
};

const App: () => React$Node = () => {
  //loadModel();
  console.log("ASD");
  const cameraRef = React.useRef(null);
  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data', data);
    }
  };
  return (
    <>
      <RNCamera
        style={{width: 300, height: 300}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <View>
        <TouchableOpacity onPress={takePhoto}>
          <Button title="click" style={styles.button}/>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 30,
  },
});

export default App;
