import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

// tipagem dos items que vem do flatList
interface ItemsProps{
   data: {id: string;
    product_id: string;
    name: string;
    amount: string | number
}}

export function ListItem({data}: ItemsProps){
    return(
        <View style={styles.container}>
        <Text style={styles.item}>{data.amount} - {data.name} </Text>

        <TouchableOpacity>
            <Feather name = "trash-2" color='#ff3f4b' size={25}/>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
backgroundColor: '#101026',
flex: 1,
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row'
    },
    item:{

    }
})