import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource , selectedImage }) {
    console.log("Current Image Source: ", selectedImage);  // Debugging log

 const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image}  key={imageSource.uri} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
