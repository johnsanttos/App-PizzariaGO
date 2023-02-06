import React from "react";
import { CategoryProps } from "../../pages/Order";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";



interface ModalPickerProps {
    optionsCategory: CategoryProps[];
    handleCloseModal: () => void;
    selecttedItem: (item:CategoryProps) => void
}
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window")

export function ModalPicker({ optionsCategory, handleCloseModal, selecttedItem }: ModalPickerProps) {

    function onPressItem(item: CategoryProps) {
        console.log( 'oloco bixoo' , item)
        selecttedItem(item)
        handleCloseModal()
    }

    // aqui esta fazendo um .map em category que chegou como props da tela order
    const option = optionsCategory.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)} >
            <Text style={styles.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
    ))

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleCloseModal}>
            <View
                style={styles.content}>

                <ScrollView showsHorizontalScrollIndicator={false}>
                    {option}
                </ScrollView>
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
        backgroundColor: '#000060',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4,
      

    },
    option: {
        alignItems: 'flex-start',
        borderWidth: 0.8,
        borderColor: '#8a8a8a',
       
    },
    item: {
        margin: 18,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

})