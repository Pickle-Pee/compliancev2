import { View, StyleSheet, Text, Image } from "react-native"


const TeachersItem = ({ teachPhoto, teachName, teachPost }) => {

    return (
        <View>
            <Text style={styles.rowChildrenTitle}>Преподаватели</Text>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.rowChildrenText}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={{ uri: teachPhoto }}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%'
                            }} />
                        <Text style={{ paddingLeft: 10 }}>Балакин Владимир Валерьевич</Text>
                    </View>
                    <View>
                        <Text style={{ paddingTop: 15 }}>Президент Национальной Ассоциации Комплаенс.</Text>
                    </View>
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
    }
})

export default TeachersItem;