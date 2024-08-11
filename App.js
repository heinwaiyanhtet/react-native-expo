import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';


const PlaceHolderImage = require('./assets/me.jpg');

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <Image source={PlaceHolderImage} style={styles.image} />
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
  }
});
