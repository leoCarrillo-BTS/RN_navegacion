import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {


    const { logOut, authState: { isLoggedin } } = useContext(AuthContext)

    return (
        <View>
            <Text>
                AlbumsScreen
            </Text>

            {
                isLoggedin &&
                <Button
                    title='Log Out'
                    onPress={
                        logOut
                    }
                />
            }

        </View>
    )
}
