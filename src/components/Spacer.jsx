import { View, StyleSheet } from 'react-native'
import React from 'react'

const Spacer = ({children}) => {
    return (
        <View style={styles.spacer}></View>
        
    )
}

export default Spacer

const styles = StyleSheet.create({
    spacer:{
        margin:15,
    }
})