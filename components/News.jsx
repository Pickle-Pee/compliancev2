import { StyleSheet, Text, View, Image } from 'react-native';


export const NewPost = ({ title, image, description }) => {


    return (
        <View style={styles.container} >
            <Image
                style={styles.card_image}
                source={{ uri: image }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 350,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        margin: 10,
        height: 200
    },
    card_image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        padding: 15
    }
});
