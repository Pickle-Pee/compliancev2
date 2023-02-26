import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LearnInfoItem = ({ description, icon, title }) => {

    return (
        <View>
            <View>
                <Text style={styles.rowChildrenTitle}>О курсе</Text>
                <Text style={styles.rowChildrenText}>{description}</Text>
            </View>
            <View>
                <Text style={styles.rowChildrenTitle}>Для кого этот курс</Text>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.rowChildrenIcon}
                            source={{ uri: icon }} />
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>{title}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.rowChildrenTitle}>Чему вы научитесь на курсе</Text>
                <Text style={styles.rowChildrenText}>{description}</Text>
            </View>
            <View>
                <Text style={styles.rowChildrenTitle}>По результатам обучения вы получите:</Text>
                <Text style={styles.rowChildrenText}>{description}</Text>
            </View>
            <View>
                <Text style={styles.rowChildrenTitle}>Документы для приема</Text>
                <Text style={styles.rowChildrenText}>{description}</Text>
            </View>
            <View>
                <Text style={styles.rowChildrenTitle}>Организаторы</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={styles.rowChildrenIcon}
                        source={{ uri: icon }} />
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowChildrenTitle: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 20
    },
    rowChildrenText: {
        paddingHorizontal: 10,
        fontSize: 14,
        lineHeight: 25
    },
    rowChildrenIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        paddingHorizontal: 10
    }
})

export default LearnInfoItem;