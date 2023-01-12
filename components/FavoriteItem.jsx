import { StyleSheet, Text, View, Image } from 'react-native';

export const FavoriteItem = ({ title, image, description }) => {

    return (
        <View style={styles.container} >
            <Image
                style={styles.card_image}
                source={{ uri: image }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.h1}>{title}</Text>
                <Text style={styles.description_p} numberOfLines={4}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        margin: 10,
        flexDirection: "row",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 50,
    },
    h1: {
        fontWeight: '800',
        fontSize: 15,
        margin: 5,
    },
    card_image: {
        width: '30%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    description_p: {
        textAlign: 'justify',
        margin: 5,
        flex: 3
    }
});