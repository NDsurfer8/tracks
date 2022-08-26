import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation'


const AccountScreen = () => {
    const {signout} = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer/>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer/>
            <Button
                title= 'Sign Out'
                onPress={signout}
            />
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({

})