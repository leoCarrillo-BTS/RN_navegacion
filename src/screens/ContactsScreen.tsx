import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState: { isLoggedin } } = useContext(AuthContext)

    return (
        <View >
            <Text>
                ContactsScreen
            </Text>

            {
                !isLoggedin && <Button title='SignIn' onPress={signIn} />
            }

        </View>
    )
}
