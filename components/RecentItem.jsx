import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export const RecentItem = ({ image_recent, title_recent }) => {

    return (
        <View style={styles.container} >
            <View style={{ 
                flexDirection: 'row', 
                height: 150, 
                backgroundColor: '#fff',
                width: 150,
                borderRadius: 15,
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                }}>
                <Image
                    style={styles.card_image}
                    source={{ uri: image_recent }} />
            </View>
            <Text style={styles.h1}>{title_recent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    h1: {
        fontWeight: '500',
        fontSize: 16,
        paddingTop: 10
    },
    card_image: {
        width: '30%',
        height: '100%',
        borderRadius: 15
    },
    recentPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#B30E1F',
        paddingTop: 40,
    },
    recentDescription: {
        fontSize: 16,
        width: '70%',
        paddingLeft: 15,
        fontWeight: '400'
    }
})