import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <View>
            <TouchableOpacity onPress={toggleOpen}>
                <View style={styles.parrentItem}>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontSize: 18
                    }}>1</Text>
                    <Text style={{ fontSize: 16 }}>
                        Общая информация о курсе</Text>
                </View>
            </TouchableOpacity>
            {isOpen && (
                <View style={{
                    height: 50,
                    justifyContent: 'center',
                    paddingLeft: 60,
                    borderBottomWidth: 1,
                    borderBottomColor: '#C3C3C3'
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingRight: 5 }}>1.1</Text>
                        <Text>Общая информация о курсе</Text>
                    </View>
                    <View style={styles.iconsRow}>
                        <View style={styles.iconsItem}>
                            <Ionicons
                                name='stopwatch-outline'
                                size={15}
                                color='black'
                            />
                            <Text>5 минут</Text>
                        </View>
                        <View style={styles.iconsItem}>
                            <Ionicons
                                name='person-outline'
                                size={15}
                                color='black'
                            />
                            <Text>224.8K</Text>
                        </View>
                        <View style={styles.iconsItem}>
                            <Ionicons
                                name='thumbs-up-outline'
                                size={15}
                                color='black'
                            />
                            <Text>111166</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    parrentItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#F6F6F6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // только для Android
        marginBottom: 1
    },
    iconsRow: {
        flexDirection: 'row',
    },
    iconsItem: {
        flexDirection: 'row',
        paddingRight: 20
    }
})

export default DropdownList;