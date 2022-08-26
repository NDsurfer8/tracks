import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Spacer from './Spacer'


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, clearErrorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View>
            <Spacer />
            <Text style={styles.button} h3>{headerText}</Text>
            <Spacer />
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                label='Email'
                value={email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                label='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {
                errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null
            }
            <Button
                title={submitButtonText}
                style={styles.button}
                onPress={()=> onSubmit({email, password})}
            />
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    button: {
        margin: 15
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    }
})