import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native'

export const Recomendations = ({ image_recomendation, title_recomendation, price_recomendation }) => {
    return (
        <View style={styles.recomendations}>
            <Text style={styles.cancelCourses}>Рекомендуем ознакомиться</Text>
            <ScrollView horizontal={true} style={styles.scrollItems} showsHorizontalScrollIndicator={false}>
                <View style={{ width: 100, marginRight: 20, marginLeft: 10, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image_recomendation }}
                        style={styles.rec_item}
                    />
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>{title_recomendation}</Text>
                    <Text style={styles.price}>{price_recomendation}</Text>
                </View>
                <View style={{ width: 100, marginRight: 20, marginLeft: 10, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image_recomendation }}
                        style={styles.rec_item}
                    />
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>{title_recomendation}</Text>
                    <Text style={styles.price}>{price_recomendation}</Text>
                </View>
                <View style={{ width: 100, marginRight: 20, marginLeft: 10, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image_recomendation }}
                        style={styles.rec_item}
                    />
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>{title_recomendation}</Text>
                    <Text style={styles.price}>{price_recomendation}</Text>
                </View>
                <View style={{ width: 100, marginRight: 20, marginLeft: 10, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image_recomendation }}
                        style={styles.rec_item}
                    />
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>{title_recomendation}</Text>
                    <Text style={styles.price}>{price_recomendation}</Text>
                </View>
                <View style={{ width: 100, marginRight: 20, marginLeft: 10, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image_recomendation }}
                        style={styles.rec_item}
                    />
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>{title_recomendation}</Text>
                    <Text style={styles.price}>{price_recomendation}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    recomendations: {
        flexDirection: 'column',
        marginBottom: 20,
        paddingBottom: 15,
        paddingTop: 10,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowRadius: 15,
        backgroundColor: '#fff',

    },
    cancelCourses: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    profile_image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
        marginLeft: 10,
    },
    price: {
        borderRadius: 15,
        backgroundColor: 'white',
        padding: 10,
    },
    rec_item: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
    },
})