import { StyleSheet, Text, View, Button, Image } from 'react-native';


export const NewLearnItem = ({ title, image, description}) => {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.card_image} 
        source={{uri: image}}/>
        <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{title}</Text>
            <Text style={styles.description_p} numberOfLines={8}>{description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 500,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    padding: 10,
    flexDirection: 'space-between',
    flex: 1
  },
  h1: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 5
  },
  card_image: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flex: 2
  },
  description_p: {
    textAlign: 'justify'
  }
});
