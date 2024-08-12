import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

// import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';

const PlaceHolderImage = require('./assets/me.jpg');

export default function App() 
{

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage,setSelectedImage] = useState(null);

  const onReset = () => {

    setShowAppOptions(false);

  }

  const onAddSticker = () => {

    setIsModalVisible(true);

  }

  const onModalClose = () => {

    setIsModalVisible(false);

  }

  const onSaveImageAsync = () => {

  }

  const PickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {

        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);

      } else {
        alert('You did not select any image');
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }

  }

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer 
            placeholderImageSource={PlaceHolderImage}
            selectedImage={selectedImage}    
        />
      </View>

      {
         showAppOptions ? (
            <View style={styles.optionsContainer}>
                <View style={styles.optionRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset}/>
                    <CircleButton onPress={onAddSticker}/>
                    <IconButton icon="save-alt"  label="Save"  onPress={onSaveImageAsync}/>
                </View>
            </View>
          ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={PickImageAsync}/>
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
         )
      }  

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          
      </EmojiPicker>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  optionsContainer: {
    position:"absolute",
    bottom:80,
  },
  
  optionRow:{
    alignItems: 'center',
    flexDirection: 'row',
  },

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
