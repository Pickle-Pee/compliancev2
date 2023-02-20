import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import React from 'react';


export const PersonProfilePage = ({ avatar, name, rating, courses_count }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: avatar }}
                    style={styles.profile_image} />
                <View style={styles.personInfo}>
                    <Text style={styles.personName}>{name}</Text>
                    <View style={styles.workInfo}>
                        <Text>Твой рейтинг: {rating}</Text>
                        <Text>Количество пройденных курсов: {courses_count}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff'
    },
    profile_image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginHorizontal: 10
    },
    personName: {
        fontSize: 22,
        fontWeight: '500',
        paddingRight: 10

    },
    profileInfo: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        alignContent: 'center',
        
    },
    personInfo: {
        justifyContent: 'space-evenly',

    },
    scrollItems: {
        paddingTop: 10,
        overflow: 'hidden',
    },
})