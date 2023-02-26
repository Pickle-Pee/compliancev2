import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const RatingItem = ({ avatar, authorName, reviewTime, review }) => {


    return (
        <View>
            <View style={styles.ratingBlock}>

            </View>
            <Text style={styles.titleText}>Отзывы</Text>
            <View style={styles.reviewItem}>
                <View>
                    <Image
                        source={{ uri: avatar }} />
                    <View>
                        <Text>{authorName}</Text>
                        <Text>{reviewTime}</Text>
                    </View>
                    <View>
                        {review}
                    </View>
                </View>
                <View style={styles.reviewText}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingBlock: {

    },
    titleText: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 20
    },
    reviewItem: {

    },
    reviewText: {

    }
})

export default RatingItem;