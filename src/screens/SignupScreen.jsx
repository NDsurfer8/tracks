import { StyleSheet, View } from 'react-native'
import NavLink from '../components/NavLink'
import React, { useContext} from 'react'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'


const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink
                routeName={'Signin'}
                text='Already have an account?  Sign in.'
            />
        </View>
    )
}

// ALLOWS TO MAKE THE HEADER DISAPEAR
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },



})


// SPACER ALLOWS FOR SPACE TO BE CREATED.. ITS A COMPONENT WE MADE
// REACT NATIVE ELEMENTS IS A DEPENDENCY DOWNLOADED THAT ALLOWS US TO UTILIZE THINGS MADE BY REACT