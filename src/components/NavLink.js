import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'


const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routeName)}>
            <Text style={{ color: 'blue' }}>{text}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        margin: 15
    },
})

export default withNavigation(NavLink);