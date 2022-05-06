import React from "react";
import { CategoryProps } from "../../pages/Order";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";


interface ModalPickerProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selecttedItem: () => void
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window")

export function ModalPicker({ options, handleCloseModal, selecttedItem }: ModalPickerProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleCloseModal}>
            <View
                style={styles.content}
            >
                <Text>
                    Pizza
                </Text>
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH - 20,
        height: HEIGHT / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4

    }
})