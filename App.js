import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

// import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceHolderImage = require('./assets/me.jpg');

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceHolderImage}/>
      </View>

      <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer:{
    flex:1,
    paddingTop:50,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
