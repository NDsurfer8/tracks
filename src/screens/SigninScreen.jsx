import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, {useContext} from 'react'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
    const { state, signin, clearErrorMessage} = useContext(Context);



    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText={'Sign In to your account'}
                errorMessage = {state.errorMessage}
                onSubmit={signin}
                submitButtonText= 'Sign In'
            />
            <NavLink 
                text="Don't have an account? Sign up."
                routeName={'Signup'}
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SigninScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:250,
    }
})