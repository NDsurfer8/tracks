import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const TrackListScreen = ({navigation}) => {
    return <>
        <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
        <Button
            title='Go to Track Detail'
            onPress={(e)=> navigation.navigate('TrackDetail')}
        />
    </>

}

export default TrackListScreen

const styles = StyleSheet.create({

})